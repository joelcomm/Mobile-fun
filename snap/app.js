/* Event Snap — open camera, every photo uploads to a shared gallery.

   Uploads go to Cloudinary (unsigned preset) — no login for guests and the
   QR on the tables is just a plain link to this page, so the destination is
   baked in below. (A Google Apps Script endpoint is still supported as a
   fallback if DEFAULT_ENDPOINT is set instead.)
*/
(function () {
  'use strict';

  // ===================================================================
  // Baked-in upload destination. Fill in the Cloudinary values:
  var DEFAULT_CLOUD_NAME = '';     // your Cloudinary "cloud name"
  var DEFAULT_UPLOAD_PRESET = '';  // an UNSIGNED upload preset name
  // (Optional) Google Apps Script /exec URL instead of Cloudinary:
  var DEFAULT_ENDPOINT = '';
  var DEFAULT_EVENT = 'Joel & Erin Wedding';
  // ===================================================================

  var LS = 'eventsnap.config';
  var QUEUE_KEY = 'eventsnap.queue';
  var GUEST_KEY = 'eventsnap.guest';
  var GUEST_COOKIE = 'eventsnap_guest';

  // ---- DOM ----
  var $ = function (id) { return document.getElementById(id); };
  var screens = {
    welcome: $('welcome'),
    camera: $('camera'),
    gallery: $('gallery')
  };
  var video = $('video');
  var canvas = $('canvas');
  var shutter = $('btn-shutter');
  var flash = $('flash');
  var toast = $('toast');
  var countBadge = $('count-badge');
  var eventBadge = $('event-badge');
  var thumbBtn = $('btn-thumb');
  var galleryGrid = $('gallery-grid');
  var galleryEmpty = $('gallery-empty');

  // ---- State ----
  var config = loadConfig();
  var guestName = loadGuest();
  var stream = null;
  var facing = 'environment';
  var uploadedCount = 0;
  var session = []; // { dataUrl, status } newest-first

  // ===================================================================
  // Guest name (cookie + localStorage so we only ask once)
  // ===================================================================
  function loadGuest() {
    var name = '';
    try { name = localStorage.getItem(GUEST_KEY) || ''; } catch (e) {}
    if (!name) {
      var m = document.cookie.match(new RegExp('(?:^|; )' + GUEST_COOKIE + '=([^;]*)'));
      if (m) { try { name = decodeURIComponent(m[1]); } catch (e) { name = m[1]; } }
    }
    return name;
  }
  function saveGuest(name) {
    guestName = name;
    try { localStorage.setItem(GUEST_KEY, name); } catch (e) {}
    document.cookie = GUEST_COOKIE + '=' + encodeURIComponent(name) +
                      '; max-age=31536000; path=/; samesite=lax';
  }

  // ===================================================================
  // Config
  // ===================================================================
  function loadConfig() {
    var params = new URLSearchParams(location.search);
    var cfg = {};
    try { cfg = JSON.parse(localStorage.getItem(LS)) || {}; } catch (e) { cfg = {}; }

    if (params.get('e')) {
      try { cfg.endpoint = atob(decodeURIComponent(params.get('e'))); }
      catch (e) { cfg.endpoint = decodeURIComponent(params.get('e')); }
    }
    if (params.get('cn')) cfg.cloudName = decodeURIComponent(params.get('cn'));
    if (params.get('up')) cfg.uploadPreset = decodeURIComponent(params.get('up'));
    if (params.get('n')) cfg.event = decodeURIComponent(params.get('n'));
    if (params.get('k')) cfg.key = decodeURIComponent(params.get('k'));

    // Fall back to the values baked into this page, so a plain link works.
    if (!cfg.cloudName && DEFAULT_CLOUD_NAME) cfg.cloudName = DEFAULT_CLOUD_NAME;
    if (!cfg.uploadPreset && DEFAULT_UPLOAD_PRESET) cfg.uploadPreset = DEFAULT_UPLOAD_PRESET;
    if (!cfg.endpoint && DEFAULT_ENDPOINT) cfg.endpoint = DEFAULT_ENDPOINT;
    if (!cfg.event) cfg.event = DEFAULT_EVENT;

    if (isConfigured(cfg)) {
      try { localStorage.setItem(LS, JSON.stringify(cfg)); } catch (e) {}
    }
    // Clean params out of the address bar so a refresh keeps working.
    if (params.get('e') || params.get('cn') || params.get('up') || params.get('n') || params.get('k')) {
      history.replaceState(null, '', location.pathname);
    }
    return cfg;
  }

  // Configured if we have a Cloudinary cloud+preset, or an Apps Script URL.
  function isConfigured(cfg) {
    return !!((cfg.cloudName && cfg.uploadPreset) || cfg.endpoint);
  }

  // ===================================================================
  // Screen switching
  // ===================================================================
  function show(name) {
    Object.keys(screens).forEach(function (k) {
      screens[k].classList.toggle('active', k === name);
    });
  }

  // ===================================================================
  // Welcome
  // ===================================================================
  function initWelcome() {
    if (!config.event) config.event = 'Joel & Erin Wedding';
    eventBadge.textContent = 'Joel & Erin · 9.5.26';

    if (!isConfigured(config)) {
      var err = $('welcome-error');
      err.textContent = 'This link is missing its upload destination. Please use the QR code Joel & Erin shared.';
      err.classList.remove('hidden');
      disable($('btn-start')); disable($('btn-launch'));
    }

    renderNameState();

    $('btn-start').addEventListener('click', submitName);
    $('guest-name').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') submitName();
    });
    $('btn-launch').addEventListener('click', launch);
    $('btn-change-name').addEventListener('click', function () {
      $('guest-name').value = guestName;
      showNameStep(true);
      $('guest-name').focus();
    });
  }

  function disable(btn) { btn.disabled = true; btn.style.opacity = '.5'; }

  function renderNameState() {
    if (guestName) {
      $('greet').innerHTML = 'Hi <b>' + escapeHtml(guestName) + '</b> 👋';
      showNameStep(false);
    } else {
      showNameStep(true);
    }
  }
  function showNameStep(showInput) {
    $('name-step').classList.toggle('hidden', !showInput);
    $('ready-step').classList.toggle('hidden', showInput);
  }

  function submitName() {
    var name = $('guest-name').value.trim().replace(/\s+/g, ' ');
    var err = $('name-error');
    if (name.length < 2) {
      err.textContent = 'Please enter your name so we know who took the photos.';
      err.classList.remove('hidden');
      return;
    }
    err.classList.add('hidden');
    saveGuest(name);
    launch();
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function launch() {
    if (!guestName) { showNameStep(true); $('guest-name').focus(); return; }
    if (!isConfigured(config)) return;
    if (!isSecure()) {
      fail('Camera needs a secure (https) connection. Open the link over https.');
      return;
    }
    startCamera().then(function () {
      show('camera');
      drainQueue();
    }).catch(function (e) {
      fail(cameraErrorText(e));
    });
  }

  function fail(msg) {
    var err = $('welcome-error');
    err.textContent = msg;
    err.classList.remove('hidden');
  }

  function isSecure() {
    return location.protocol === 'https:' ||
           location.hostname === 'localhost' ||
           location.hostname === '127.0.0.1';
  }

  function cameraErrorText(e) {
    if (!e) return 'Could not open the camera.';
    if (e.name === 'NotAllowedError') return 'Camera permission was blocked. Enable it in your browser settings and reload.';
    if (e.name === 'NotFoundError') return 'No camera was found on this device.';
    return 'Could not open the camera: ' + (e.message || e.name || e);
  }

  // ===================================================================
  // Camera
  // ===================================================================
  function startCamera() {
    if (stream) { stream.getTracks().forEach(function (t) { t.stop(); }); }
    return navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: facing }, width: { ideal: 1920 }, height: { ideal: 1920 } },
      audio: false
    }).then(function (s) {
      stream = s;
      video.srcObject = s;
      return video.play().catch(function () {});
    });
  }

  function flipCamera() {
    facing = (facing === 'environment') ? 'user' : 'environment';
    startCamera().catch(function (e) { showToast(cameraErrorText(e), 'err'); });
  }

  // ===================================================================
  // Capture + upload
  // ===================================================================
  function capture() {
    if (!stream) return;
    var w = video.videoWidth, h = video.videoHeight;
    if (!w || !h) return;

    // Cap the long edge so uploads stay quick on event wifi.
    var max = 1600, scale = Math.min(1, max / Math.max(w, h));
    canvas.width = Math.round(w * scale);
    canvas.height = Math.round(h * scale);
    var ctx = canvas.getContext('2d');
    if (facing === 'user') { // un-mirror the selfie
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
    }
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    stampCaption(ctx);

    var dataUrl = canvas.toDataURL('image/jpeg', 0.85);

    flash.classList.remove('fire'); void flash.offsetWidth; flash.classList.add('fire');
    if (navigator.vibrate) navigator.vibrate(15);

    var item = { dataUrl: dataUrl, status: 'pending' };
    session.unshift(item);
    if (session.length > 60) session.length = 60;
    thumbBtn.style.backgroundImage = 'url(' + dataUrl + ')';
    renderGallery();

    upload(dataUrl, item);
  }

  // Burn a small caption into the photo so the couple can see who took it,
  // even outside the filename. Reset any selfie-mirror transform first.
  function stampCaption(ctx) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    var W = canvas.width, H = canvas.height;
    var fs = Math.max(20, Math.round(W * 0.030));
    var pad = Math.round(W * 0.035);
    var label = '♥ ' + (guestName || 'Guest') + '  ·  Joel & Erin 9.5.26';

    // subtle gradient scrim along the bottom for legibility
    var grad = ctx.createLinearGradient(0, H - fs * 3.2, 0, H);
    grad.addColorStop(0, 'rgba(0,0,0,0)');
    grad.addColorStop(1, 'rgba(0,0,0,0.45)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, H - fs * 3.2, W, fs * 3.2);

    ctx.font = '600 ' + fs + 'px Inter, Arial, sans-serif';
    ctx.textBaseline = 'alphabetic';
    ctx.shadowColor = 'rgba(0,0,0,0.55)';
    ctx.shadowBlur = fs * 0.35;
    ctx.shadowOffsetY = 1;
    ctx.fillStyle = 'rgba(255,255,255,0.96)';
    ctx.fillText(label, pad, H - pad);
    ctx.shadowColor = 'transparent';
  }

  function upload(dataUrl, item) {
    showToast('Uploading…', 'pending');
    var payload = {
      image: dataUrl,
      event: config.event || '',
      guest: guestName || '',
      key: config.key || '',
      filename: makeName(),
      ts: Date.now()
    };
    sendPhoto(payload).then(function () {
      item.status = 'ok';
      uploadedCount++;
      updateCount();
      renderGallery();
      showToast('Shared 💕', 'ok');
    }).catch(function () {
      item.status = 'err';
      renderGallery();
      enqueue(payload);
      showToast('Saved — will retry upload', 'err');
    });
  }

  // Dispatch to whichever destination is configured.
  function sendPhoto(payload) {
    if (config.cloudName && config.uploadPreset) return sendToCloudinary(payload);
    return sendToDrive(payload);
  }

  // Cloudinary unsigned upload. CORS is allowed, so we get a real
  // success/failure (and the guest name rides along as a tag + context).
  function sendToCloudinary(payload) {
    var url = 'https://api.cloudinary.com/v1_1/' + encodeURIComponent(config.cloudName) + '/image/upload';
    var form = new FormData();
    form.append('file', payload.image);
    form.append('upload_preset', config.uploadPreset);
    if (payload.guest) {
      form.append('tags', slug(payload.guest));
      form.append('context', 'guest=' + payload.guest + '|event=' + (payload.event || ''));
    }
    return fetch(url, { method: 'POST', body: form }).then(function (r) {
      if (!r.ok) throw new Error('upload failed: ' + r.status);
      return r.json();
    });
  }

  function slug(s) {
    return String(s).replace(/[^a-z0-9]+/gi, '-').replace(/^-+|-+$/g, '').slice(0, 40) || 'guest';
  }

  // Apps Script fallback: no CORS headers, so POST as a "simple request"
  // (text/plain, no preflight); a resolved fetch is treated as success.
  function sendToDrive(payload) {
    return fetch(config.endpoint, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    }).then(function (r) { return r; });
  }

  function makeName() {
    var d = new Date();
    var p = function (n) { return String(n).padStart(2, '0'); };
    var stamp = d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) + '-' +
                p(d.getHours()) + p(d.getMinutes()) + p(d.getSeconds());
    var rand = Math.random().toString(36).slice(2, 6);
    var who = (guestName || 'guest').replace(/[^a-z0-9]+/gi, '-').replace(/^-+|-+$/g, '').slice(0, 30) || 'guest';
    return who + '_' + stamp + '-' + rand + '.jpg';
  }

  function updateCount() {
    countBadge.textContent = uploadedCount + ' uploaded';
  }

  // ===================================================================
  // Retry queue (survives reloads / flaky wifi)
  // ===================================================================
  function enqueue(payload) {
    var q = readQueue();
    q.push(payload);
    if (q.length > 40) q = q.slice(-40);
    try { localStorage.setItem(QUEUE_KEY, JSON.stringify(q)); } catch (e) {}
  }
  function readQueue() {
    try { return JSON.parse(localStorage.getItem(QUEUE_KEY)) || []; } catch (e) { return []; }
  }
  function drainQueue() {
    var q = readQueue();
    if (!q.length || !isConfigured(config)) return;
    localStorage.removeItem(QUEUE_KEY);
    q.forEach(function (payload) {
      sendPhoto(payload).then(function () {
        uploadedCount++; updateCount();
      }).catch(function () { enqueue(payload); });
    });
  }

  // ===================================================================
  // Toast
  // ===================================================================
  var toastTimer = null;
  function showToast(msg, kind) {
    toast.className = 'toast show ' + (kind || '');
    toast.innerHTML = (kind === 'pending' ? '<span class="spinner"></span>' : '') +
                      '<span>' + msg + '</span>';
    clearTimeout(toastTimer);
    if (kind !== 'pending') {
      toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 1800);
    }
  }

  // ===================================================================
  // Gallery
  // ===================================================================
  function renderGallery() {
    galleryGrid.innerHTML = '';
    galleryEmpty.classList.toggle('hidden', session.length > 0);
    session.forEach(function (item) {
      var cell = document.createElement('div');
      cell.className = 'cell';
      var img = document.createElement('img');
      img.src = item.dataUrl;
      cell.appendChild(img);
      var s = document.createElement('span');
      s.className = 'status ' + item.status;
      s.textContent = item.status === 'ok' ? '✓' : item.status === 'err' ? '↻' : '…';
      cell.appendChild(s);
      galleryGrid.appendChild(cell);
    });
  }

  // ===================================================================
  // Wire up
  // ===================================================================
  shutter.addEventListener('click', capture);
  $('btn-flip').addEventListener('click', flipCamera);
  thumbBtn.addEventListener('click', function () { renderGallery(); show('gallery'); });
  $('btn-gallery-back').addEventListener('click', function () { show('camera'); });

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      if (stream) { stream.getTracks().forEach(function (t) { t.stop(); }); stream = null; }
    } else if (screens.camera.classList.contains('active')) {
      startCamera().then(drainQueue).catch(function () {});
    }
  });

  updateCount();
  initWelcome();
  show('welcome');
})();

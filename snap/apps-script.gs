/**
 * Event Snap — Google Apps Script upload endpoint.
 *
 * Deploy this as a Web app (Deploy > New deployment > Web app):
 *   • Execute as:      Me
 *   • Who has access:  Anyone
 *
 * Every photo the app captures is POSTed here and saved into your Drive.
 * Guests never sign in — the script runs as YOU, so the files land in your
 * Drive with your permissions.
 */

// === CONFIGURE ME ===========================================================
// Leave FOLDER_ID blank to auto-create a folder named FOLDER_NAME in your
// "My Drive". Or paste a specific folder's ID (the part of its URL after
// /folders/) to use an existing folder instead.
var FOLDER_ID = '';
var FOLDER_NAME = 'Joel & Erin Wedding Photos';

// Optional shared secret. Leave '' to accept any upload.
var SHARED_KEY = '';

// One wedding = one folder, so keep this false. (Set true to split photos
// into per-event subfolders when reusing this for multiple events.)
var USE_EVENT_SUBFOLDERS = false;
// ============================================================================


function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return out({ ok: false, error: 'empty request' });
    }

    var data = JSON.parse(e.postData.contents);

    if (SHARED_KEY && data.key !== SHARED_KEY) {
      return out({ ok: false, error: 'unauthorized' });
    }
    if (!data.image) {
      return out({ ok: false, error: 'no image' });
    }

    var folder = getTargetFolder(data.event);

    // Strip the "data:image/jpeg;base64," prefix if present.
    var b64 = String(data.image).replace(/^data:[^,]+,/, '');
    var bytes = Utilities.base64Decode(b64);
    var blob = Utilities.newBlob(bytes, 'image/jpeg', data.filename || ('snap-' + Date.now() + '.jpg'));

    var file = folder.createFile(blob);

    // Record who took it (also embedded in the filename and on the photo).
    if (data.guest) {
      var when = data.ts ? new Date(Number(data.ts)) : new Date();
      file.setDescription('Photo by ' + data.guest + ' — ' + (data.event || '') + ' — ' + when);
    }

    return out({ ok: true, id: file.getId(), name: file.getName(), guest: data.guest || '' });
  } catch (err) {
    return out({ ok: false, error: String(err) });
  }
}

// Lets you confirm the deployment is live by visiting the URL in a browser.
function doGet() {
  return out({ ok: true, service: 'Joel & Erin wedding uploader' });
}

function getTargetFolder(eventName) {
  var root;
  if (FOLDER_ID) {
    root = DriveApp.getFolderById(FOLDER_ID);
  } else {
    var found = DriveApp.getFoldersByName(FOLDER_NAME);
    root = found.hasNext() ? found.next() : DriveApp.createFolder(FOLDER_NAME);
  }

  if (!USE_EVENT_SUBFOLDERS || !eventName) return root;

  var safe = String(eventName).replace(/[\\/:*?"<>|]/g, '_').trim() || 'Event';
  var existing = root.getFoldersByName(safe);
  return existing.hasNext() ? existing.next() : root.createFolder(safe);
}

function out(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

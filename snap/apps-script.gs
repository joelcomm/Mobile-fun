/**
 * Event Snap — Google Apps Script upload endpoint.
 *
 * Uploads via the Drive REST API (NOT DriveApp) so it only needs the
 * "drive.file" scope — a non-restricted scope a personal Gmail can approve.
 * DriveApp would force the full "drive" restricted scope, which Google
 * hard-blocks for unverified apps.
 *
 * Deploy: Deploy > New deployment > Web app, Execute as: Me,
 * Who has access: Anyone. Authorize when prompted.
 *
 * Requires this manifest (appsscript.json) oauthScopes:
 *   "https://www.googleapis.com/auth/script.external_request",
 *   "https://www.googleapis.com/auth/drive.file"
 */

var FOLDER_NAME = 'Joel & Erin Wedding Photos';
var SHARED_KEY = '';  // optional; leave '' to accept any upload


function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) return out({ ok: false, error: 'empty request' });
    var data = JSON.parse(e.postData.contents);
    if (SHARED_KEY && data.key !== SHARED_KEY) return out({ ok: false, error: 'unauthorized' });
    if (!data.image) return out({ ok: false, error: 'no image' });

    var folderId = getOrCreateFolder_();
    var bytes = Utilities.base64Decode(String(data.image).replace(/^data:[^,]+,/, ''));
    var name = data.filename || ('snap-' + Date.now() + '.jpg');
    var desc = data.guest ? ('Photo by ' + data.guest + ' — ' + (data.event || '')) : '';

    var id = uploadToDrive_(bytes, name, folderId, desc);
    return out({ ok: true, id: id, name: name });
  } catch (err) {
    return out({ ok: false, error: String(err) });
  }
}

function doGet() {
  return out({ ok: true, service: 'Joel & Erin wedding uploader' });
}

// Find (or create once) the wedding folder. Cached so we only look it up once.
function getOrCreateFolder_() {
  var props = PropertiesService.getScriptProperties();
  var cached = props.getProperty('FOLDER_ID');
  if (cached) return cached;

  var token = ScriptApp.getOAuthToken();
  var q = "mimeType='application/vnd.google-apps.folder' and name='" +
          FOLDER_NAME.replace(/'/g, "\\'") + "' and trashed=false";
  var look = UrlFetchApp.fetch(
    'https://www.googleapis.com/drive/v3/files?q=' + encodeURIComponent(q) + '&fields=files(id)',
    { headers: { Authorization: 'Bearer ' + token }, muteHttpExceptions: true });
  var files = (JSON.parse(look.getContentText()).files) || [];

  var id;
  if (files.length) {
    id = files[0].id;
  } else {
    var made = UrlFetchApp.fetch('https://www.googleapis.com/drive/v3/files?fields=id', {
      method: 'post',
      contentType: 'application/json',
      headers: { Authorization: 'Bearer ' + token },
      payload: JSON.stringify({ name: FOLDER_NAME, mimeType: 'application/vnd.google-apps.folder' }),
      muteHttpExceptions: true });
    id = JSON.parse(made.getContentText()).id;
  }
  props.setProperty('FOLDER_ID', id);
  return id;
}

// Multipart upload of the image bytes into the folder.
function uploadToDrive_(bytes, name, folderId, description) {
  var token = ScriptApp.getOAuthToken();
  var boundary = 'snap' + Date.now();
  var meta = { name: name, parents: [folderId] };
  if (description) meta.description = description;

  var pre = '--' + boundary + '\r\n' +
            'Content-Type: application/json; charset=UTF-8\r\n\r\n' +
            JSON.stringify(meta) + '\r\n' +
            '--' + boundary + '\r\n' +
            'Content-Type: image/jpeg\r\n\r\n';
  var post = '\r\n--' + boundary + '--';

  var body = Utilities.newBlob(pre).getBytes()
               .concat(bytes)
               .concat(Utilities.newBlob(post).getBytes());

  var resp = UrlFetchApp.fetch(
    'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id', {
      method: 'post',
      contentType: 'multipart/related; boundary=' + boundary,
      headers: { Authorization: 'Bearer ' + token },
      payload: Utilities.newBlob(body),
      muteHttpExceptions: true });
  return JSON.parse(resp.getContentText()).id;
}

function out(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

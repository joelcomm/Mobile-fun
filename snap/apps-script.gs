/**
 * Event Snap — Google Apps Script upload endpoint.
 *
 * Deploy this as a Web app (Deploy > New deployment > Web app):
 *   • Execute as:      Me
 *   • Who has access:  Anyone
 * Then copy the Web app URL into snap/setup.html.
 *
 * Every photo the app captures is POSTed here and saved into your Drive
 * folder. Attendees never sign in — the script runs as YOU, so the files
 * land in your Drive with your permissions.
 */

// === CONFIGURE ME ===========================================================
// The Drive folder that should collect the photos. Copy the ID from the
// folder's URL: https://drive.google.com/drive/folders/<THIS_IS_THE_ID>
var FOLDER_ID = 'PASTE_YOUR_DRIVE_FOLDER_ID_HERE';

// Optional shared secret. Leave '' to accept any upload. If set, the app's
// QR must carry the same key (the "Shared key" field in setup.html).
var SHARED_KEY = '';

// Put each event's photos in its own subfolder named after the event.
var USE_EVENT_SUBFOLDERS = true;
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

    return out({ ok: true, id: file.getId(), name: file.getName() });
  } catch (err) {
    return out({ ok: false, error: String(err) });
  }
}

// Lets you confirm the deployment is live by visiting the URL in a browser.
function doGet() {
  return out({ ok: true, service: 'Event Snap uploader', ready: FOLDER_ID !== 'PASTE_YOUR_DRIVE_FOLDER_ID_HERE' });
}

function getTargetFolder(eventName) {
  var root = DriveApp.getFolderById(FOLDER_ID);
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

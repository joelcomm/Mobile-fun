/* playables-sdk.js — thin wrapper around the YouTube Playables SDK (ytgame).
 * Outside the Playables host (e.g. local testing) `ytgame` doesn't exist, so
 * this falls back to a localStorage-backed stub purely for development —
 * that fallback never runs when actually embedded on YouTube, where
 * ytgame.IN_PLAYABLES_ENV is true and every call goes through the real SDK. */
var PlayablesSDK = (function () {
  var live = typeof window.ytgame !== 'undefined' && window.ytgame.IN_PLAYABLES_ENV === true;

  var devData = null;
  function devLoad() {
    try { devData = localStorage.getItem('alibi-devsave'); } catch (e) { devData = null; }
    return Promise.resolve(devData);
  }
  function devSave(str) {
    try { localStorage.setItem('alibi-devsave', str); } catch (e) {}
    return Promise.resolve();
  }

  function firstFrameReady() {
    if (live) window.ytgame.game.firstFrameReady();
  }

  function gameReady() {
    if (live) window.ytgame.game.gameReady();
  }

  function saveData(str) {
    return live ? window.ytgame.game.saveData(str) : devSave(str);
  }

  function loadData() {
    return live ? window.ytgame.game.loadData() : devLoad();
  }

  function isAudioEnabled() {
    return live ? window.ytgame.system.isAudioEnabled() : true;
  }

  function onAudioEnabledChange(cb) {
    return live ? window.ytgame.system.onAudioEnabledChange(cb) : function () {};
  }

  function onPause(cb) {
    return live ? window.ytgame.system.onPause(cb) : function () {};
  }

  function onResume(cb) {
    return live ? window.ytgame.system.onResume(cb) : function () {};
  }

  function getLanguage() {
    return live ? window.ytgame.system.getLanguage() : Promise.resolve('en');
  }

  return {
    live: live,
    firstFrameReady: firstFrameReady,
    gameReady: gameReady,
    saveData: saveData,
    loadData: loadData,
    isAudioEnabled: isAudioEnabled,
    onAudioEnabledChange: onAudioEnabledChange,
    onPause: onPause,
    onResume: onResume,
    getLanguage: getLanguage
  };
})();

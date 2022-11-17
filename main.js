// https://developer.chrome.com/docs/extensions/reference/tabs/#event-onActivated
// Listen for changed tab
chrome.tabs.onActivated.addListener(function(activeInfo) {
  console.log('Tab changed.');
  // https://developer.chrome.com/docs/extensions/reference/scripting/#type-ScriptInjection
  // Activate anger.js with current tab as target
  chrome.scripting.executeScript({
    files: ['anger.js'],
    target: {
      tabId: activeInfo.tabId
    }
  });
});

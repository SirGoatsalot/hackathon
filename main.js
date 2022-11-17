// Listen for changed tab
chrome.tabs.onActivated.addListener(function(activeInfo) {
  console.log('Tab changed.');

  // Activate anger.js with current tab as target
  chrome.scripting.executeScript({
    files: ['anger.js'],
    target: {
      tabId: activeInfo.tabId
    }
  });
});

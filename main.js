// Listen for changed tab
chrome.tabs.onActivated.addListener(function(activeInfo) {
  console.log('Tab changed.');

  const acceptableSites = [
    'codesmith',
    'leetcode',
    'github',
    'calendar',
    'developer.mozilla',
    'w3schools'
  ];

  const tab = chrome.tabs.query({
    "active": true,
    "windowId": chrome.windows.WINDOW_ID_CURRENT,
  }).then((tab) => {
    console.log(tab);
    let acceptable = false;
    for (const site of acceptableSites) {
      
      if (tab[0].url.includes(site)) acceptable = true;
    }
    
    if (!acceptable) {
      // Activate anger.js with current tab as target
      console.log('Script Activated');
      chrome.scripting.executeScript({
        files: ['anger.js'],
        target: {
          tabId: activeInfo.tabId
        }
      });
    }
  });
});

```javascript
chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeBackgroundColor({ color: '#4688F1' });
});

chrome.tabs.onCreated.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, { message: 'newTabOpened' });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.status === 'complete' && tab.url !== undefined) {
    chrome.tabs.sendMessage(tabId, { message: 'newTabOpened' });
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'updateDisplayed') {
    chrome.action.setBadgeText({ text: 'New' });
  }
});
```
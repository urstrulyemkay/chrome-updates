```javascript
let productUpdates = [];
let lastUpdateIndex = -1;

import { fetchUpdates } from './api.js';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'newTabOpened') {
    displayUpdate();
  }
});

function displayUpdate() {
  if (!productUpdates.length) {
    fetchUpdates().then(updates => {
      productUpdates = updates;
      showUpdate();
    });
  } else {
    showUpdate();
  }
}

function showUpdate() {
  let index = getRandomUpdateIndex();
  while (index === lastUpdateIndex) {
    index = getRandomUpdateIndex();
  }
  lastUpdateIndex = index;
  const update = productUpdates[index];
  const productUpdateDiv = document.getElementById('productUpdate');
  productUpdateDiv.textContent = update;
  productUpdateDiv.style.animation = 'fadein 2s';
  chrome.runtime.sendMessage({ message: 'updateDisplayed' });
}

function getRandomUpdateIndex() {
  return Math.floor(Math.random() * productUpdates.length);
}
```
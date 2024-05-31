// background.js
let selectedText = '';

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.text) {
    selectedText = message.text;
    console.log('Text stored in background:', selectedText);
  } else if (message.action === 'getSelectedText') {
    console.log('Returning selected text:', selectedText);
    sendResponse({ text: selectedText });
  }
  return true;  // Required to indicate you want to send a response asynchronously
});

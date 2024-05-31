// popup.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('Popup loaded');
    chrome.runtime.sendMessage({ action: 'getSelectedText' }, function(response) {
      if (response && response.text) {
        console.log('Received selected text:', response.text);
        document.getElementById('textBox1').value = response.text;
        document.getElementById('textBox2').value = response.text;
      } else {
        console.log('No selected text received');
      }
    });
  });
  
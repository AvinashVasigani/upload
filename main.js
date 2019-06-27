
chrome.tabs.query({'active': true, 
				'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
        document.write(tabs[0].url);
   }
);

chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
    var urlCourant = details.url;

    // Fetch the phishing blacklist from the server
    fetch('http://localhost:2500/phishing_list')
        .then(response => response.json())
        .then(phishingBlacklist => {
            console.log('Retrieved phishing blacklist:', phishingBlacklist);
            // URL verification
            if (phishingBlacklist.includes(urlCourant)) {
                // Block Access and redirect to the alert page
                var pageInterditeUrl = chrome.runtime.getURL("Access-Denied.html?url=1");
                chrome.tabs.update(details.tabId, { url: pageInterditeUrl });
            }
        })
        .catch(error => {
            console.error('Error fetching phishing blacklist:', error);
        });

    // Fetch the spam blacklist from the server
    fetch('http://localhost:2500/spam_list')
        .then(response => response.json())
        .then(spamBlacklist => {
            console.log('Retrieved spam blacklist:', spamBlacklist);
            // URL verification
            if (spamBlacklist.includes(urlCourant)) {
                // Block Access and redirect to the alert page
                var pageInterditeUrl = chrome.runtime.getURL("Access-Denied.html?url=2");
                chrome.tabs.update(details.tabId, { url: pageInterditeUrl });
            }
        })
        .catch(error => {
            console.error('Error fetching spam blacklist:', error);
        });

    // Fetch the malware blacklist from the server
    fetch('http://localhost:2500/malware_list')
        .then(response => response.json())
        .then(malwareBlacklist => {
            console.log('Retrieved malware blacklist:', malwareBlacklist);
            // URL verification
            if (malwareBlacklist.includes(urlCourant)) {
                // Block Access and redirect to the alert page
                var pageInterditeUrl = chrome.runtime.getURL("Access-Denied.html?url=3");
                chrome.tabs.update(details.tabId, { url: pageInterditeUrl });
            }
        })
        .catch(error => {
            console.error('Error fetching malware blacklist:', error);
        });

    // Fetch the botnet blacklist from the server
    fetch('http://localhost:2500/botnet_list')
        .then(response => response.json())
        .then(botnetBlacklist => {
            console.log('Retrieved botnet blacklist:', botnetBlacklist);
            // URL verification
            if (botnetBlacklist.includes(urlCourant)) {
                // Block Access and redirect to the alert page
                var pageInterditeUrl = chrome.runtime.getURL("Access-Denied.html?url=4");
                chrome.tabs.update(details.tabId, { url: pageInterditeUrl });
            }
        })
        .catch(error => {
            console.error('Error fetching botnet blacklist:', error);
        });

    // Fetch the cryptocurrencies blacklist from the server
    fetch('http://localhost:2500/cryptocurrencies_list')
        .then(response => response.json())
        .then(cryptocurrenciesBlacklist => {
            console.log('Retrieved cryptocurrencies blacklist:', cryptocurrenciesBlacklist);
            // URL verification
            if (cryptocurrenciesBlacklist.includes(urlCourant)) {
                // Block Access and redirect to the alert page
                var pageInterditeUrl = chrome.runtime.getURL("Access-Denied.html?url=5");
                chrome.tabs.update(details.tabId, { url: pageInterditeUrl });
            }
        })
        .catch(error => {
            console.error('Error fetching cryptocurrencies blacklist:', error);
        });
});

//buttons details + return home
document.getElementById('detailsButton').addEventListener('click', function() {
    
    var currentUrl = window.location.href;
	
    if (currentUrl === 'chrome-extension://eapaicgdglajplhcmghmingfidodmhke/Access-Denied.html?url=1') {
        alert('This website is deemed malicious due to its classification as a phishing site.');
    } else if (currentUrl === 'chrome-extension://eapaicgdglajplhcmghmingfidodmhke/Access-Denied.html?url=2') {
        alert('This website is deemed malicious due to its classification as a spam site.');
    } else if (currentUrl === 'chrome-extension://eapaicgdglajplhcmghmingfidodmhke/Access-Denied.html?url=3') {
        alert('This website is deemed malicious due to its classification as malware.');
    } else if (currentUrl === 'chrome-extension://eapaicgdglajplhcmghmingfidodmhke/Access-Denied.html?url=4') {
        alert('This website is deemed malicious due to its classification as part of a botnet.');
    } else if (currentUrl === 'chrome-extension://eapaicgdglajplhcmghmingfidodmhke/Access-Denied.html?url=5') {
        alert('This website is deemed malicious due to its classification related to cryptocurrencies.');
    } else {
        alert('This website is deemed malicious for an unknown reason.');
    }
});

document.getElementById('returnButton').addEventListener('click', function() {
    window.location.href = 'https://www.google.com'; 
});

// Phishing list
const phishingLogFilePath = 'http://localhost:2500/phishing_list';
var phishingBlacklist = [];

fetch(phishingLogFilePath)
    .then(response => response.json())
    .then(data => {
        phishingBlacklist = data;
        var urlCourant = window.location.href;
        var estSurListeNoire = phishingBlacklist.includes(urlCourant);

        if (estSurListeNoire) {
            alert("Access blocked. Redirecting to home page."); 
            window.location.replace("Access-Denied.html?url=1");
        }
    })
    .catch(error => console.error('Error fetching phishing blacklist:', error));

// Spam list
const spamLogFilePath = 'http://localhost:2500/spam_list';
var spamBlacklist = [];

fetch(spamLogFilePath)
    .then(response => response.json())
    .then(data => {
        spamBlacklist = data;
        var urlCourant = window.location.href;
        var estSurListeNoire = spamBlacklist.includes(urlCourant);

        if (estSurListeNoire) {
            alert("Access blocked. Redirecting to home page."); 
            window.location.replace("Access-Denied.html?url=2");
        }
    })
    .catch(error => console.error('Error fetching spam blacklist:', error));

// Malware list
const malwareLogFilePath = 'http://localhost:2500/malware_list';
var malwareBlacklist = [];

fetch(malwareLogFilePath)
    .then(response => response.json())
    .then(data => {
        malwareBlacklist = data;
        var urlCourant = window.location.href;
        var estSurListeNoire = malwareBlacklist.includes(urlCourant);

        if (estSurListeNoire) {
            alert("Access blocked. Redirecting to home page."); 
            window.location.replace("Access-Denied.html?url=3");
        }
    })
    .catch(error => console.error('Error fetching malware blacklist:', error));

// Botnet list
const botnetLogFilePath = 'http://localhost:2500/botnet_list';
var botnetBlacklist = [];

fetch(botnetLogFilePath)
    .then(response => response.json())
    .then(data => {
        botnetBlacklist = data;
        var urlCourant = window.location.href;
        var estSurListeNoire = botnetBlacklist.includes(urlCourant);

        if (estSurListeNoire) {
            alert("Access blocked. Redirecting to home page."); 
            window.location.replace("Access-Denied.html?url=4");
        }
    })
    .catch(error => console.error('Error fetching botnet blacklist:', error));

// Cryptocurrencies list
const cryptocurrenciesLogFilePath = 'http://localhost:2500/cryptocurrencies_list';
var cryptocurrenciesBlacklist = [];

fetch(cryptocurrenciesLogFilePath)
    .then(response => response.json())
    .then(data => {
        cryptocurrenciesBlacklist = data;
        var urlCourant = window.location.href;
        var estSurListeNoire = cryptocurrenciesBlacklist.includes(urlCourant);

        if (estSurListeNoire) {
            alert("Access blocked. Redirecting to home page."); 
            window.location.replace("Access-Denied.html?url=5");
        }
    })
    .catch(error => console.error('Error fetching cryptocurrencies blacklist:', error));

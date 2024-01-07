const userAgents = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:100.0) Gecko/20100101 Firefox/100.0',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.2 Safari/605.1.15',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:100.0) Gecko/20100101 Firefox/100.0',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59',
    'Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-G991U1) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/17.0 Chrome/97.0.4692.50 Mobile Safari/537.36',
    'Mozilla/5.0 (Android 11; Mobile; rv:100.0) Gecko/100.0 Firefox/100.0',
    'Mozilla/5.0 (Linux; Android 11; SM-G991U1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.50 Mobile Safari/537.36',
];

// Function to get a random User-Agent
function getRandomUserAgent() {
    const randomIndex = Math.floor(Math.random() * userAgents.length);
    return {
        'User-Agent': userAgents[randomIndex],
    };
}
module.exports = { getRandomUserAgent };
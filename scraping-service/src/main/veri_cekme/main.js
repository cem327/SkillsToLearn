const {allURLScrape} = require('./jobScraper');


async function main(){
    await allURLScrape();

}
// Scrape LinkedIn job details and listings

module.exports = {main};

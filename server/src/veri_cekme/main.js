const jobScraper = require('./jobScraper');


async function main(){
    await jobScraper.scrapeJobs();

}
// Scrape LinkedIn job details and listings
main();
module.exports = {main};

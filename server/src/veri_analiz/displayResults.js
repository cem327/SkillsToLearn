function displayResults({ termCount, termCompaniesCount, termCompanies, sortedSoftwareTerms }) {
    console.log('Software Term Count:\n');
    sortedSoftwareTerms.forEach((term) => {
        console.log(`${term}: ${termCount[term]},Company Count: ${termCompaniesCount[term]}, Companies: ${termCompanies[term].join(', ')}\n`);
    });
}

module.exports = displayResults;
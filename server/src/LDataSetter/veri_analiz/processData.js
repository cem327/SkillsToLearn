
const { cleanAndNormalizeTurkish } = require('../utils/convertWordsTurkishToEnglish');
const softwareTerms = require('../utils/constants/softwareTerms');


const termCount = {};
const termCompanies = {}; // Store company names for each software term
const termCompaniesCount = {};




function  processData(jobPosts) {
    jobPosts.forEach((job) => {
        const companyName = job['Company']; // Assuming the column name is 'Company Name'
        const description = job.Details;
        const words = description.split(/\s+/);


        words.forEach((word) => {
            const cleanedWord = cleanAndNormalizeTurkish(word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"“”‘’]/g, '').toLowerCase());

            if (softwareTerms.includes(cleanedWord)) {
                termCount[cleanedWord] = (termCount[cleanedWord] || 0) + 1;

                // Store company name for the software term
                if (!termCompanies[cleanedWord]) {
                    termCompanies[cleanedWord] = [];
                }
                if (!termCompanies[cleanedWord].includes(companyName)) {
                    termCompanies[cleanedWord].push(companyName);
                    // Increment company count for the term if not already counted for this company
                    if (!termCompaniesCount[cleanedWord]) {
                        termCompaniesCount[cleanedWord] = 1;
                    } else {
                        termCompaniesCount[cleanedWord]++;
                    }
                }


            }
        });
    });

    // Sort software terms alphabetically
    sortedSoftwareTerms = Object.keys(termCount)
        .sort((a, b) => termCount[b] - termCount[a]);

    return { termCount, termCompaniesCount, termCompanies, sortedSoftwareTerms };
}

module.exports = { processData };

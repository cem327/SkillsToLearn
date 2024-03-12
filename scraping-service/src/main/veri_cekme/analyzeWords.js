const { cleanAndNormalizeTurkish } = require('../utils/convertWordsTurkishToEnglish');
const softwareTerms = require('../utils/constants/softwareTerms');



function jobDetailsAnalyzed(jobDetails){
    const terms = [];

    const words = jobDetails.split(/\s+/);


    words.forEach(word=>{
        const cleanedWord = cleanAndNormalizeTurkish(word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"“”‘’]/g, '').toLowerCase());

        if (softwareTerms.includes(cleanedWord)) {
            terms.push(cleanedWord);

        }
    });
    return terms;

}

module.exports = {jobDetailsAnalyzed};
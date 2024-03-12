// app.js
const { readCSV } = require('../utils/csvReader');
const { processData } = require('./processData');
const displayResults = require('./displayResults');
const {writeToCSV} = require("../utils/csvWriter");
const {resolve} = require("path");
const {readdirSync} = require("fs");
const path = require("path");
const {dateMaker} = require("../utils/dateStringMaker");

const analyzeFilesPath = path.resolve(__dirname, `../`, 'analyzedData')

async function main() {

    const folderPath = resolve(__dirname, '../output_data');
    const analiz=[];
    const today = await dateMaker();
    try {
        const allCSVData = await readAllCSVsInFolder(folderPath);

        // processData ve displayResults fonksiyonlarını çağırın
        for (const csvData of allCSVData) {

            const { termCount, termCompaniesCount, termCompanies, sortedSoftwareTerms } = processData(csvData);

            displayResults({ termCount, termCompaniesCount, termCompanies, sortedSoftwareTerms } );
            sortedSoftwareTerms.forEach((term) => {
                analiz.push({term : term, termCount: termCount[term], CompanyCount: termCompaniesCount[term],CompanyNames:termCompanies[term] });

            });
            await writeToCSV(analiz, `l_Analiz_${today}`, analyzeFilesPath);
        }

    } catch (error) {
        // Hata işleme stratejilerini geliştirin
        console.error('Error during main process:', error);
    }
}
async function readAllCSVsInFolder(folderPath) {
    const files = readdirSync(folderPath);

    const csvData = [];

    for (const file of files) {
        if (file.endsWith('.csv')) {
            const filePath = resolve(folderPath, file);
            const data = await readCSV(filePath);
            csvData.push(data);
        }
    }

    return csvData;
}

module.exports = {main};
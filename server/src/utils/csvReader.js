// csvReader.js
const path = require('path');
const fs = require('fs');
const csv = require('csv-parser');


function readCSV(filePath) {
    return new Promise((resolve, reject) => {
        const linkedinJobs = [];
        if (fs.existsSync(filePath)) {
            const stream = fs.createReadStream(filePath);

            stream.pipe(csv())
                .on('data', (row) => {
                    linkedinJobs.push(row);
                })
                .on('end', () => {
                    console.log('File is read successfully.');
                    resolve(linkedinJobs);
                })
                .on('error', (error) => {
                    console.error('Error reading CSV file:', error);
                    reject(error);
                });

        } else {
            const error = new Error(`File not found: ${filePath}`);
            console.error(error.message);
            reject(error);
        }
    });
}

module.exports = { readCSV };
const ObjectsToCsv = require('objects-to-csv');
const path = require("path");


async function writeToCSV(object, filename) {
    const csv = new ObjectsToCsv(object);
    const csvFilePath = path.resolve(__dirname, `../`,'output_data')

    await csv.toDisk(path.resolve(csvFilePath, `${filename}.csv`), {append: false});
}

module.exports = { writeToCSV };
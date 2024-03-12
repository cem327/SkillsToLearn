const ObjectsToCsv = require('objects-to-csv');
const path = require("path");


async function writeToCSV(object, fileName, csvFilePath) {
    const csv = new ObjectsToCsv(object);

    await csv.toDisk(path.resolve(csvFilePath, `${fileName}.csv`), {append: false});
}

module.exports = {writeToCSV};
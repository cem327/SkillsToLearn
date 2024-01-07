const ObjectsToCsv = require('objects-to-csv');
const path = require("path");


async function writeToCSV(object, filename) {
    const csv = new ObjectsToCsv(object);
    const today = new Date();
    const csvFilePath = path.resolve(__dirname, `../`,'output_data')

// Yıl, ay ve gün bilgisi almak
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // JavaScript'te aylar 0'dan başlar, bu yüzden +1 ekliyoruz.
    const day = today.getDate();

    const formattedDate = `${year}${month < 10 ? '0' + month : month}${day < 10 ? '0' + day : day}`;
    // Overwrite the CSV file each time
    await csv.toDisk(path.resolve(csvFilePath, `${filename}${formattedDate}.csv`), { append: false });
}

module.exports = { writeToCSV };
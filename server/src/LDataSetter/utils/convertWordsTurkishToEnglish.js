function cleanAndNormalizeTurkish(word) {
    // word parametresini kontrol et
    if (word === undefined || word === null) {
        // İsterseniz burada bir hata fırlatabilir veya başka bir şey yapabilirsiniz
        return word;
    }

    const turkishMap = {
        'ı': 'i',
        'ğ': 'g',
        'ü': 'u',
        'ş': 's',
        'ö': 'o',
        'ç': 'c',
        'İ': 'I',
        'Ğ': 'G',
        'Ü': 'U',
        'Ş': 'S',
        'Ö': 'O',
        'Ç': 'C',
    };

    return word.replace(/[ğıüşöçİĞÜŞÖÇ]/g, (matched) => turkishMap[matched]);
}

module.exports = { cleanAndNormalizeTurkish };

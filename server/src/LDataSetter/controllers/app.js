const veriCekmeMain = require('../veri_cekme/main');
const veriAnalizMain = require('../veri_analiz/main');

async function main() {
    try {
        console.log("Program calisiyor...")
        await veriCekmeMain.main();
        await veriAnalizMain.main();
    } catch (error) {
        console.error('Bir hata oluştu:', error);
    }

}

main().then(r => "Program tamamlandı").catch(e => console.error(e));
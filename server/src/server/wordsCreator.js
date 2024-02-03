document.addEventListener("DOMContentLoaded", () => {
    const blackText = document.getElementById("blackText");
    const whiteText = document.getElementById("whiteText");
    const whiteWords = ["Java", "Iletisim", "FMEA", "Takim Calismasi"];
    const blackWords = ["Kedi", "Bilgisayar", "Yüzme", "Araba", "Müzik", "Kitap", "Bahçe", "Spor", "Gökyüzü", "Gözlük"];

    // Sayfa yüklendiğinde siyah metni rastgele bir kelimeyle güncelle
    function updateBlackText() {
        // Boş bir dize oluştur
        let formattedText = "";
        blackWords.forEach(word => {
            var minO = 0;
            var maxO = 360;
            var minFS = 24;
            var maxFS = 36;
            var randomIntegerOrientation = Math.floor(Math.random() * (maxO - minO + 1)) + minO;
            var randomIntegerFontSize = Math.floor(Math.random() * (maxFS - minFS + 1)) + minFS;
            const randomX = Math.floor(Math.random() * window.innerWidth);
            const randomY = Math.floor(Math.random() * (window.innerHeight - 40)) + 40;

            // blackText.style.transform = `rotate(${randomIntegerOrientation}deg)`;
            // blackText.style.left = randomX + "px";
            // blackText.style.top = randomY + "px";
            // blackText.style.fontSize = randomIntegerFontSize + "px";


            formattedText += `<div class="word" style="transform: rotate(${randomIntegerOrientation}deg); font-size: ${randomIntegerFontSize}px; top: ${randomY}px; left: ${randomX}px; ">${word}</div>`;
        });

        // blackText içeriğini güncelle
        blackText.innerHTML = formattedText;
    }

    updateBlackText(); // İlk yüklemede metni güncelle

    // Fare hareketlerine tepki ver
    function updateWhiteText() {
        // Boş bir dize oluştur
        let formattedText = "";
        whiteWords.forEach(word => {
            var minFS = 48;
            var maxFS = 92;
            var randomIntegerFontSize = Math.floor(Math.random() * (maxFS - minFS + 1)) + minFS;
            const randomX = Math.floor(Math.random() * window.innerWidth);
            const randomY = Math.floor(Math.random() * (window.innerHeight - 40)) + 40;

            // blackText.style.transform = `rotate(${randomIntegerOrientation}deg)`;
            // blackText.style.left = randomX + "px";
            // blackText.style.top = randomY + "px";
            // blackText.style.fontSize = randomIntegerFontSize + "px";


            formattedText += `<div class="word" style="font-size: ${randomIntegerFontSize}px; top: ${randomY}px; left: ${randomX}px; ">${word}</div>`;
        });

        // blackText içeriğini güncelle
        whiteText.innerHTML = formattedText;
    }

    updateWhiteText(); // İlk yüklemede metni güncelle
    // Sayfa her yeniden yüklendiğinde siyah metni güncelle
    window.addEventListener("load", updateBlackText);
});

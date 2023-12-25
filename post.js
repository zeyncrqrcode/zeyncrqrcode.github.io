document.getElementById('call').addEventListener('click', function() {
    // Telefon numarası
    var telefonNumarasi = "5551234567";

    // API endpoint URL
    var apiEndpoint = "https://zeyncrqrcode.github.io/";

    // Veriyi JSON formatına dönüştürün
    var veri = JSON.stringify({ telefon: telefonNumarasi });

    // Fetch API ile POST isteği yapın
    fetch(apiEndpoint, {    
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: veri
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Telefon numarası gönderme hatası: ' + response.statusText);
            }
            console.log("Telefon numarası başarıyla gönderildi.");
            window.location.href = "tel:" + telefonNumarasi;
        })
        .catch(error => {
            console.error('Hata:', error);
        });
});

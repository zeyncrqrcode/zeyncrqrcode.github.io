const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware - Gelen JSON verilerini işleme
app.use(bodyParser.json());

// POST isteği için endpoint
app.post('/api/gonder-telefon-numarasi', (req, res) => {
    const telefonNumarasi = req.body.telefon;

    // Burada telefon numarası ile ilgili yapılacak işlemleri gerçekleştirebilirsiniz
    // Örneğin, veritabanına kaydetme veya başka bir servise iletim

    console.log('Telefon numarası alındı:', telefonNumarasi);

    // Başarılı yanıt
    res.status(200).json({ message: 'Telefon numarası başarıyla alındı.' });
});

// Sunucuyu başlatma
app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} üzerinde çalışıyor`);
});

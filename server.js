const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Раздаём статические файлы из текущей директории
app.use(express.static(__dirname));

// Главный маршрут - index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Маршрут для projects.html
app.get('/projects.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'projects.html'));
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`📍 Local: http://localhost:${PORT}`);
});

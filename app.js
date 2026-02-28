const express = require('express');
const reservaRoutes = require('./routes/reservaRoutes');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/', reservaRoutes);

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
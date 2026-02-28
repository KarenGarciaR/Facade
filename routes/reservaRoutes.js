const express = require('express');
const router = express.Router();
const ReservaFacade = require('../services/ReservaFacade');

router.post('/reservar', (req, res) => {

    const facade = new ReservaFacade();

    const resultado = facade.realizarReserva({
        usuario: req.body.usuario,
        fecha: req.body.fecha,
        monto: 100
    });

    res.send(`
        <html>
            <head>
                <title>Resultado Reserva</title>
                <style>
                    body {
                        font-family: Arial;
                        text-align: center;
                        margin-top: 100px;
                        background: linear-gradient(135deg, #667eea, #764ba2);
                        color: white;
                    }
                    .card {
                        background: white;
                        color: black;
                        padding: 30px;
                        border-radius: 15px;
                        width: 400px;
                        margin: auto;
                        box-shadow: 0px 10px 25px rgba(0,0,0,0.3);
                    }
                    a {
                        text-decoration: none;
                        color: white;
                        background: #764ba2;
                        padding: 10px 20px;
                        border-radius: 8px;
                    }
                </style>
            </head>
            <body>
                <div class="card">
                    <h2>${resultado}</h2>
                    <br>
                    <a href="/">Volver</a>
                </div>
            </body>
        </html>
    `);
});

module.exports = router;
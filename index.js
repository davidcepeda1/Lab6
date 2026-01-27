const express = require('express');
const app = express();
const port = 3000;

app.get('/', (_req, res) => {
    res.send('Integracion continua funcionando!');
});

app.listen(port, () => {
    console.log(`Servidor esta ejecutandose en el puerto ${port}`);
});
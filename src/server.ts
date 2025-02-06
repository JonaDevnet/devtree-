import express from 'express';

const app = express(); // instancia de express

// routing a pagina principal
app.get('/', (req, res) => {
    res.send('Hola mundo en express');
});

export default app;
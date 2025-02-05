// sintaxis de commonjs 
//const express = require('express'); // tomamos la dependencia 
//sintaxis de module
import express from 'express';


const app = express(); // instancia de express

// routing a pagina principal
app.get('/', (req, res) => {
    res.send('Hola mundo en express');
});

// routing a ecommerce
app.get('/ecommerce', (req, res) => {
    res.send('Este es un ecommerce');
    //res.send('Es un render en ecommerces')
})

//creamos el servidor
const port = process.env.PORT || 4000; // variable de entorno o puerto 4000

app.listen(port, () => {
    console.log('Servidor funcionando en el puerto', port);
})



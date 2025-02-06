import express from 'express';
import router from './router';

const app = express(); // instancia de express

app.use('/', router); // buscamos la ruta principal en el router


export default app;
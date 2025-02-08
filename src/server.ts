import express from 'express';
import 'dotenv/config';
import router from './router';
import {connectDb} from './config/db';

const app = express(); // instancia de express

connectDb() 

app.use('/', router); // buscamos la ruta principal en el router

app.use(express.json()); //leer datos de formularios

export default app;
// aqui va la configuracion del servidor y la base de datos
import server from './server';

//creamos el servidor
const port = process.env.PORT || 4000; // variable de entorno o puerto 4000

server.listen(port, () => {
    console.log('Servidor funcionando en el puerto', port);
})



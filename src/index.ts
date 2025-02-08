import colors from 'colors';
// aqui va la configuracion del servidor y la base de datos y seguridad
import server from './server';

//creamos el servidor
const port = process.env.PORT || 4000; // variable de entorno o puerto 4000

server.listen(port, () => {
    console.log(colors.blue.bold(`Servidor funcionando en el puerto:${port} `));
})



// "Iniciamos el modulo express con el fin de dar inicio al servidor, evitando varias 
// configuraciones" - Referencia Nota. SENA (2021).
const express = require('express'); // Inporta el paquete express.
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

// Se llama al bodyParser.
app.use(bodyParser.json())
// Y se importan las rutas de la extención.
const postRoute = require('./routes/post');
app.use('/servicios', postRoute);
//app.use('/servicios', () => {console.log('Corriendo el middleware')});
//app.use('/api', postRoute);

// Se crean las rutas.
app.get('/', (req, res) => {
    res.send('Prueba 1 respuesta del servidor'); // Ruta por defecto del servidor.
}); 
// "Lo siguiente es crear la base de datos. Sin embargo, mLab (la plataforma sujerida en la
// plataforma) fue remplazada por MongoDB Atlas, que es identica pero como propiedad de
// MongoDB. - Martín.
// Conexión con la base de datos.
mongoose.connect(process.env.MONGODB_URI, 
{useNewUrlParser: true}, () =>{
    console.log('Si hay conexión con la BD');
});
// "Primero se configura cómo va a escuchar el servidor
// las peticiones" - Referencia Nota. SENA (2021).
app.listen(10000);
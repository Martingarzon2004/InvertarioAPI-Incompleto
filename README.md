# InvertarioAPI-Incompleto. Porfavor lee este archivo antes de revisar este repositorio.
Este repositorio incluye los archivos solicitados para la actividad GA7-220501096-AA4-EV03 Componente frontend del proyecto formativo y proyectos de clase (listas de chequeo), para la carrera tecnológica "Analisis y desarollo de software" del SENA.

El proyecto fue codificado siguiendo las instruciones del componente informativo del SENA "Construcción de API". El programa incluye las librerias de Express, Nodemon, Mongoose y Body-parser. También hay algunas librerias adicionales (dotenv, http-errors, mongodb), pero debido a que no he podido hacer funcionar la API, desconozco que tan necesesarias son estas librerias extras.

Las librerias se encuentran dentro del archivo zip "node-modules" (no pude incluir la carpeta dentro del repositorio debido al monton de archivos que tiene).

Cuando intento ejecutar el programa usando "npm start", Node trata de correr los archivos, pero luego saca el error "MongooseError: Mongoose.prototype.connect() no longer accepts a callback". Por esto no he podido conectarme a mi base de datos de MongoDB Atlas, ni probar la API con Postman.

Según lo que he podido investigar, el error "Mongoose.prototype.connect() no longer accepts a callback" significa que los datos de comunicacion del archivo routes/post.js están desactualizados ante la version de Mongoose. Pero por el momento desconozco si está es la real causa o cómo coregir esta falla.

Espero que este archivo pueda ser de utilidad. Muchas gracias, Martín Garzón Plazas.

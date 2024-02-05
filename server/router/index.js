const express = require('express');
//express tiene un metodo que funciona como enrutador para enlazar todas nuestras rutas de nuestra aplicacion (localhost:3100/)
const router = express.Router();

//esta funcsion define nuestras rutas de la API 
//que me permiten conectar mi parte visual (html)
//con mi senvidor (nodesjs)
function routerAPI(app){
app.use('/api/v1',router);
};

// vamos a exportar nuestra funcion para utilizarla en nuestro index.js principal del server

module.exports = routerAPI;
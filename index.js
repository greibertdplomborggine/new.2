const express = require ('express');
const routerAPI = require('./server/router');


//esto es nuestra aplicacion - origen 

const app = express();
// esta linea me sirve  para quitar el probema de cors
app.use(cors());

// esta linea me permite entender los archivos json enviados desde la respuesta
app.use(express.json());
//esta funcion es nuestra APi
routerAPI(app);
// .use sirve para servir nuestro servidor y recibe n cantidad de parametros , 
//el primero va ser nuestra ruta en la wed y el segundo el middleware 
//(logica cuando vaya o sirva esa ruta)
//app.use()

app.use('/', (req, res)=>{
// req = solicitud o solicitar
// res = respuesta o devolver

res.send("<h1>funciona</h1>")
})

// . listen escucha nueestro servidor y como primerparametro
//recibe el puerto y como el segundo la funcion a mostrar cuando nuestro servidor

app.listen(3000, ()=>{
    console.log ('aplicacion corriendo en el puerto 3100');
})
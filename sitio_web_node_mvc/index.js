// importa express
// const express = require('express');
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();


//conectar la base de datos
   db.authenticate()
   .then(()=>console.log('base conectada'))
   .catch(error => console.log('error'));


    // definir puerto
    const port = process.env.PORT || 4000;

    //habilitar pug
    app.set('view engine','pug');


   //propio middleware
   //obtener el año actual
   app.use((req, res, next)=>{

      //pasar informacion asia un archivo o vista
      const year = new Date();
      res.locals.Actualyear = year.getFullYear(); 
      res.locals.nombreSitio = "Agencia de Viajes"; 
      return next();

   });

//agregar body parse para leer los datos del formulario
app.use(express.urlencoded({extended:true}))

    //definir la carpeta publica
    app.use(express.static('public'));


  //agregar router
 app.use('/', router);



 app.listen(port,()=>{

    console.log(`El servidor esta funcionando en el puerto ${port}`)


 }  );

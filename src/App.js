import React, { Fragment, useState, useEffect } from 'react';


import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias'; 

function App() {
  

 // definir la categoria y noticias
 const [categoria, guardarCategoria] = useState('');
 const [noticias, guardarNoticias] = useState([]);

 useEffect(() => {
   const consultarAPI = async () => {
     const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=9be2c3f22b144f14858b0c9b751511c6`;

     const respuesta = await fetch(url);
     const noticias = await respuesta.json();
      
     guardarNoticias(noticias.articles);
   }
   consultarAPI();
 }, [categoria]);

return (
  <Fragment>
      <Header 
        titulo='Buscador de Noticias'
      />

      <div className="container white">
         <Formulario guardarCategoria = {guardarCategoria}/>
         <ListadoNoticias noticias={noticias}/>
      </div>
  </Fragment>
);
}

export default App;

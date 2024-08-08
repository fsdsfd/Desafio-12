import React from 'react' // Corazón de react
import ReactDOM from 'react-dom/client' // El adaptador que nos permite gestionar el dom
import './index.css'
import InicioApp from './InicioApp.jsx' // Hay que importarlo, se puede no importar y tenerlo abierto en pestaña dividida
import * as bootstrap from 'bootstrap' // De esta manera traigo todas las herramientas de js de bootsrap
// Creamos un componente
ReactDOM.createRoot(document.getElementById('root')).render(
    <InicioApp/> 
)
    /* <InicioApp></InicioApp>  Sacar el strictmode al principio*/
    /* Se puede cerrar de las 2 maneras, como un elemento html con 2 partes o así/ */
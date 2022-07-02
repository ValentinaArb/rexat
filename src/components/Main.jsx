import React, { useRef, useEffect, useState } from 'react';
import "./Main.css"
import basura from "../img/basura.png"
import logo from "../img/logoRXT.png"
import planeta from "../img/planeta.png"
import {Link} from "react-router-dom";
import separador from "../img/separador.png"
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoidW1ncnUiLCJhIjoiY2w0bzd5aHc3MDR5ZzNkbGx5bzh0bWZ3YiJ9.1m8NjPzeitlkvyR7UsQzLQ';

export default function Main() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-58.45400186608953 );
    const [lat, setLat] = useState(-34.549207371406716);
    const [zoom, setZoom] = useState(1);
   
  /*   useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/umgru/cl53gtdyf000614pmr05mcd1u',
      center: [lng, lat],
      zoom: zoom
    }); 
  }); */
  return (   
    <>    
      <div className="Navbar">  
        <img className= "logo" src= {logo} alt=" "/>
        <a className = "Seccion" href="#Rexat">Rexat</a>
        <a className = "Seccion" href="#Conocenos">Conocenos</a>
        <a className = "Seccion" href="#titulo">Mapa</a>        
      </div>
      
      <div id= "Parte1">
        <div className="Text">
        <div className = "Hola"> Hola, <br></br> Somos <b><span style={{ color: "#ff951c" }}>Rexat</span> </b></div>
          <Link to = "/mapview" className = "IralMapa"> <button className = "BtnNaranja">Ir al mapa 1</button> </Link>
          <Link to = "/mapview2" className = "IralMapa"> <button className = "BtnNaranja">Ir al mapa 2</button> </Link>
        </div>
        <img className='basura' src= {basura} alt=" "/>
      </div>

      <div id='Parte2'>
          <h2 className='frase'>Cuidemos nuestro planeta</h2>
          <h3 className='frase'>Actualmente hay mucha basura en las costas de todo el mundo </h3>
          <p className='frase'>Y hay que trabajar juntos para resolverlo, </p>
          <p className='frase'>para tener un futuro mejor.</p>
      </div>

      <div className='centrar'><img className='separador' src= {separador} alt=" "/></div>
       <h1 id="Rexat"> ¿Qué es Rexat?</h1>
      <div className="Grid1">        
              <div className= "QuienesSomos">
                <h1> ¿Quiénes somos?</h1>
                <p>Somos un grupo de estudiantes de 5to año en ORT Argentina. Creamos Rexat, una plataforma que mediante imagenes satelitales permite reconocer grandes acumulaciones de basura marina en las costas , con el fin de ayudar al medio ambiente. </p>
              </div>
              <div className ="Conocenosimg"> IMAGEN </div>      
              <div className ="Conocenosimg"> IMAGEN </div>            
              <div className= "Finalidad">
                <h1>Nuestra Finalidad</h1>
                <p>Buscamos concientizar y crear una plataforma de libre acceso para que cualquier persona que quiera participar en la limpieza de las costas: una gran necesidad ambiental de hoy en día.</p>
              </div>
              <div className= "TecnoAplicada"> 
                  <h1>Tecnología aplicada</h1>
                  <p>Trabajamos con imagenes satelitales y creando un programa de machine lerning que nos permite localizar los puntos más grandes de basura en las costas en tiempo actual.</p>
              </div>  
              <div className ="Conocenosimg"> IMAGEN </div>  
      </div> 
      <h1 id="Conocenos"> Contactanos </h1>
            
      <div className = "Grid2">      
              <div className = "Joaco">
                <p className='Nombre'> Joaquín<br></br>Marcel </p>
                <div className = "Info"> 
                  <button>L</button>
                  <p> Back-End</p>
                </div>
              </div>
              <div className = "Tina">
                <p className='Nombre'> Valentina<br></br>Arbarello </p>
                <div className = "Info"> 
                  <button>L</button>
                  <p> Full-Stack </p>
                </div>
              </div>
              <div className = "Iara">
                <p className='Nombre'> Iara<br></br>Srur </p>
                <div className = "Info"> 
                  <button>L</button>
                  <p> Full-Stack </p>
                </div>
              </div>
              <div className = "Uma">
                <p className='Nombre'> Uma<br></br>Grün </p>
                <div className = "Info"> 
                  <button>L</button>
                  <p>  UX/UI Designer  </p>
                </div>
              </div>
      </div>

      <div className='centrar'><img className='separador' src= {separador} alt=" "/></div>
      <div className='centrar'><h1 id='titulo'>Acceder al mapa</h1></div>
      <div className='centrar'><Link to = "/mapview" className = "IralMapa"> <img className= "planeta" src= {planeta} alt=" "/></Link> </div>  
        
     {/* <div ref={mapContainer} className="map-container" /> */}
      
      <footer className='footer'>Rexat - 2022</footer>     
    </>    
  );
}
import React, { useRef, useEffect, useState } from 'react';
import "./Main.css";
import Aos from "aos";
import "aos/dist/aos.css";
import basura from "../../img/basura.png";
import logo from "../../img/logoRXT.png";
import linkedin from "../../img/linkedin.png";
import planeta from "../../img/planeta.png";
import separador from "../../img/separador.png";
import {Link} from "react-router-dom";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Navbar from "../Navbar/Navbar";

mapboxgl.accessToken = 'pk.eyJ1IjoidW1ncnUiLCJhIjoiY2w0bzd5aHc3MDR5ZzNkbGx5bzh0bWZ3YiJ9.1m8NjPzeitlkvyR7UsQzLQ';

export default function Main() {
   /*  
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-58.45400186608953 );
    const [lat, setLat] = useState(-34.549207371406716);
    const [zoom, setZoom] = useState(1);
   
    useEffect(()=> {
      Aos.init({duration: 3000});
    }, []);

   useEffect(() => {
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
    <Navbar/>
    <div /* data-aos="fade-up" */ className="Inicio">
      <div /* data-aos="fade-up"  */id= "Parte1">
        <div className="Text">
        <div className = "Hola"> Hola, <br></br> Somos <b><span style={{ color: "#ff951c" }}>Rexat</span> </b></div>
          <Link to = "/mapview"> <button className = "BtnNaranja">Ir al mapa</button> </Link>
        </div>
        <img className='basura' src= {basura} alt=" "/>
      </div>

      <div /* data-aos="fade-up" */ id='Parte2'>
          <h2 className='frase'>Cuidemos nuestro planeta</h2>
          <h3 className='frase'>Actualmente hay mucha basura en las costas de todo el mundo </h3>
          <h4 className='frase'>Y hay que trabajar juntos para resolverlo, </h4>
          <h4 className='frase'>para tener un futuro mejor.</h4>
      </div>

      <div /* data-aos="fade-up" */ className='centrar'><img className='separador' src= {separador} alt=" "/></div>
       <h1 /* data-aos="fade-up" */ id="Rexat"> ¿Qué es Rexat?</h1>
      <div className="Grid1">        
              <div /* data-aos="fade-up" */ className= "QuienesSomos">
                <h1> ¿Quiénes somos?</h1>
                <p>Somos un grupo de estudiantes de 5to año en ORT Argentina. Creamos Rexat, una plataforma que mediante imagenes satelitales permite reconocer grandes acumulaciones de basura marina en las costas , con el fin de ayudar al medio ambiente. </p>
              </div>
              <div /* data-aos="fade-up"  */className ="Conocenosimg"> IMAGEN </div>      
              <div /* data-aos="fade-up" */ className ="Conocenosimg"> IMAGEN </div>            
              <div /* data-aos="fade-up" */ className= "Finalidad">
                <h1 /* data-aos="fade-up" */>Nuestra Finalidad</h1>
                <p /* data-aos="fade-up" */>Buscamos concientizar y crear una plataforma de libre acceso para que cualquier persona que quiera participar en la limpieza de las costas: una gran necesidad ambiental de hoy en día.</p>
              </div>
              <div /* data-aos="fade-up" */ className= "TecnoAplicada"> 
                  <h1 /* data-aos="fade-up" */>Tecnología aplicada</h1>
                  <p /* data-aos="fade-up" */>Trabajamos con imagenes satelitales y creando un programa de machine lerning que nos permite localizar los puntos más grandes de basura en las costas en tiempo actual.</p>
              </div>  
              <div /* data-aos="fade-up" */ className ="Conocenosimg"> IMAGEN </div>  
      </div> 
      <h1 /* data-aos="fade-up" */ id="Conocenos"> Contactanos </h1>
            
      <div /* data-aos="fade-up" */ className = "Grid2">      
              <div className = "Joaco">
                <p className='Nombre'> Joaquín<br></br>Marcel </p>
                  <div className = "info">
                    <a><img className='linkedin' src= {linkedin} alt=" "/></a>
                    <div className='centrar'><p> Back-End</p></div>
                </div>
              </div>
              <div className = "Tina">
                <p className='Nombre'> Valentina<br></br>Arbarello </p>
                  <div className= "centrar"><div className = "info"></div>
                     <a><img className='linkedin' src= {linkedin} alt=" "/></a> 
                     <div className='centrar'><p>Full-Stack</p></div>                    
                  </div>
              </div>
              <div className = "Iara">
                <p className='Nombre'> Iara<br></br>Srur </p>
                  <div className = "info">
                    <a><img className='linkedin' src= {linkedin} alt=" "/></a>
                    <div className='centrar'><p> Back-End</p></div>
                  </div>
                </div>
              
              <div className = "Uma">
              <p className='Nombre'> Uma<br></br>Grün </p>
                  <div className = "info">
                    <a><img className='linkedin' src= {linkedin} alt=" "/></a>
                    <div className='centrar'><p> UX/UI Designer</p></div>
                  </div>
              </div>
      </div>

      <div /* data-aos="fade-up"*/ className='centrar'><img className='separador' src= {separador} alt=" "/></div>
      <div /* data-aos="fade-up" */ className='centrar'><h1 id='titulo'>Acceder al mapa</h1></div>
      <div /* data-aos="fade-up" */ className='centrar'><Link to = "/mapview"> <img className= "planeta" src= {planeta} alt=" "/></Link></div>  
        
     {/* <div ref={mapContainer} className="map-container" /> */}
    </div>
      <footer className='footer'>Rexat - 2022</footer>     
    </>    
  );
}
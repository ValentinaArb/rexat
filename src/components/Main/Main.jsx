import React from 'react';
import "./Main.css";
import Aos from "aos";
import "aos/dist/aos.css";
import basura from "../../img/basura.png";
import linkedin from "../../img/linkedin.png";
import planeta from "../../img/planeta.png";
import separador from "../../img/separador.png";
import {Link} from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Main() {  
  Aos.init();
  return (       
    <>    
    <Navbar/>
    <div className="Inicio">
      <div id= "Parte1">
        <div className="Text">
        <div className = "Hola"> Hola, <br></br> Somos <b><span style={{ color: "#ff951c" }}>Rexat</span> </b></div>
          <Link to = "/mapview"> <button className = "BtnMapa">Ir al mapa</button> </Link>
        </div>
        <img className='basura' src= {basura} alt=" "/>
      </div>

      <div data-aos="fade-up" data-aos-duration="1000" id='Parte2'>
          <h2 className='frase'>Cuidemos nuestro planeta</h2>
          <h3 className='frase'>Actualmente hay mucha basura en las costas de todo el mundo </h3>
          <h4 className='frase'>Y hay que trabajar juntos para resolverlo, </h4>
          <h4 className='frase'>para tener un futuro mejor.</h4>
      </div>

      <div data-aos="fade-up" data-aos-duration="1000" className='centrar'><img className='separador' src= {separador} alt=" "/></div>
       <h1 data-aos="fade-up" data-aos-duration="1000" className='centrar' id = "Rexat"> ¿Qué es Rexat?</h1>
      <div className="Grid1">        
              <div data-aos="fade-up" data-aos-duration="1000">
                 <h2 className= "Subtitulo"> ¿Quiénes somos?</h2>
                  <p>Somos un grupo de estudiantes de 5to año en ORT Argentina. Creamos Rexat, una plataforma que mediante imagenes satelitales permite reconocer grandes acumulaciones de basura marina en las costas , con el fin de ayudar al medio ambiente. </p>
              </div>
              <div data-aos="fade-up" data-aos-duration="1000" className ="Conocenosimg"> IMAGEN </div>   
              <div data-aos="fade-up" data-aos-duration="1000" className ="Conocenosimg"> IMAGEN </div>
              <div data-aos="fade-up" data-aos-duration="1000">
                  <h2 data-aos="fade-up"data-aos-duration="1000" className= "Subtitulo"> Nuestra Finalidad</h2>
                  <p data-aos="fade-up" data-aos-duration="1000"> Buscamos concientizar y crear una plataforma de libre acceso para que cualquier persona que quiera participar en la limpieza de las costas: una gran necesidad ambiental de hoy en día.</p>
              </div>
              <div data-aos="fade-up" className= "Subtitulo"> 
                  <h2 data-aos="fade-up"> Tecnología aplicada</h2>
                  <p data-aos="fade-up" > Trabajamos con imagenes satelitales y creando un programa de machine lerning que nos permite localizar los puntos más grandes de basura en las costas en tiempo actual.</p>
              </div>  
              <div  className ="Conocenosimg"> IMAGEN </div>  
      </div> 

      <h1 data-aos="fade-up" data-aos-duration="1000" className='centrar' id = "Conocenos"> Contactanos </h1>            
      <div data-aos="fade-up" data-aos-duration="1000" className = "Grid2">      
              <div className = "Joaco">
                <p className='Nombre'> Joaquín<br></br>Marcel </p>
                  <div className = "info">
                    <a target = "_blank" rel= "noreferrer" href = "https://www.linkedin.com/in/valentina-arbarello-baa963246"><img className='linkedin' src= {linkedin} alt=" "/></a>
                    <div className='rol'><p> Back-End</p></div>
                </div>
              </div>
              <div className = "Tina">
                <p className='Nombre'> Valentina<br></br>Arbarello </p>
                  <div className = "info">
                     <a target = "_blank" rel= "noreferrer" href = "https://www.linkedin.com/in/valentina-arbarello-baa963246"><img className='linkedin' src= {linkedin} alt=" "/></a> 
                     <div className='rol'><p>Full-Stack</p></div>                    
                  </div>
              </div>
              <div className = "Iara">
                <p className='Nombre'> Iara<br></br>Srur </p>
                  <div className = "info">
                    <a target = "_blank" rel= "noreferrer" href = "https://www.linkedin.com/in/valentina-arbarello-baa963246"><img className='linkedin' src= {linkedin} alt=" "/></a>
                    <div className='rol'><p> Back-End</p></div>
                  </div>
                </div>
              <div className = "Uma">
              <p className='Nombre'> Uma<br></br>Grün </p>
                  <div className = "info">
                    <a target = "_blank" rel= "noreferrer" href = "https://www.linkedin.com/in/valentina-arbarello-baa963246"><img className='linkedin' src= {linkedin} alt=" "/></a>
                    <div className='rol'><p> UX/UI Designer</p></div>
                  </div>
              </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="1000" className='centrar'><img className='separador' src= {separador} alt=" "/></div>
      <div data-aos="fade-up" data-aos-duration="1000" className='centrar'><h1 id='titulo'>Acceder al mapa</h1></div>
      <div data-aos="fade-up" data-aos-duration="1000" className='centrar'><Link to = "/mapview"> <img className= "planeta" src= {planeta} alt=" "/></Link></div>  

    </div>
      <footer className='footer'>Rexat - 2022</footer>     
    </>    
  );
}
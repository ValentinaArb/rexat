import React from 'react';
import "./Main.css";
import Aos from "aos";
import "aos/dist/aos.css";

import basura from "../../img/basura.png";
import basura_satelital from "../../img/basura_satelital.png";
import linkedin from "../../img/linkedin.png";
import planeta from "../../img/planeta.png";
import juntando_basura from "../../img/juntando_basura.png";
import nosotros from "../../img/nosotros.png";
import linkedin_iara from "../../img/linkedin_iara.png";
import linkedin_uma from "../../img/linkedin_uma.png";
import linkedin_valen from "../../img/linkedin_valen.png"
import linkedin_joaco from "../../img/linkedin_joaco.png";
import separador from "../../img/separador.png";
import sparks_left from "../../img/sparks_left.png";
import sparks_right from "../../img/sparks_right.png";
import Planeta_Lupa from "../../img/Planeta_Lupa.png";
import click from "../../img/click_mapa.png";

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
        <div className = "Hola"> Hola, <br></br> Somos <span style={{ color: "#ff951c" }}>Rexat.</span> </div>
          <Link to = "/mapview"> <button className = "BtnMapa">Ir al mapa</button> </Link>
        </div>
        <img className='basura' src= {basura} alt=" "/>
      </div>

      <div data-aos="fade-up" data-aos-duration="1000" id='Parte2'>
      <div className= "centrar_frase_main">
      <img className='sparks' data-aos="fade-up" data-aos-duration="1200" src= {sparks_left} alt=" "/>
          <h2 className='frase_main' data-aos="fade-up" data-aos-duration="1200"> Cuidemos nuestro planeta </h2>
      <img className='sparks' data-aos="fade-up" data-aos-duration="1200" src= {sparks_right} alt=" "/>
      </div>
          <h3 className='frase' data-aos="fade-up" data-aos-duration="1200"> <b>Mantengamos las costas limpias, protejamos nuestro hogar. </b> </h3> <br></br>
          <h4 className='frase' data-aos="fade-up" data-aos-duration="1200">Actualmente se generan 1,4 billones de toneladas de Residuos Sólidos Urbanos en todo el mundo por año. </h4>
          <h4 className='frase' data-aos="fade-up" data-aos-duration="1200"> Y solo en Argentina  45 millones de toneladas diarias, siendo uno de los principales factores del calentamiento global. </h4>
          <h4 className='frase' data-aos="fade-up" data-aos-duration="1200">  <br></br>Estos contaminantes dañan la vida y la ecología marina, la salud humana y el turismo costero.</h4> 

        <div data-aos="fade-up" data-aos-duration="1000" className= "centrar"><img className='Planeta_Lupa' src= {Planeta_Lupa} alt=" "/></div>
        
      </div>

      <div data-aos="fade-up" data-aos-duration="1000" className='centrar'><img id = "Rexat" className='separador' src= {separador} alt=" "/></div>
       <h1 data-aos="fade-up" data-aos-duration="1000" className='titulo'> ¿Qué es Rexat?</h1>
      <div className="Grid1">        
              <div data-aos="fade-up" data-aos-duration="1000">
                 <h2 className= "Subtitulo"> ¿Quiénes somos?</h2>
                  <p>Somos un grupo de estudiantes de 5to año en ORT Argentina. Creamos Rexat, una plataforma que mediante imagenes satelitales permite reconocer grandes acumulaciones de basura marina en las costas , con el fin de ayudar al medio ambiente. </p>
              </div>
              <div className='centrar'><img data-aos="fade-up" data-aos-duration="1000" className ="Conocenosimg" src= {nosotros} alt=""/></div>
              <div className='centrar'><img data-aos="fade-up" data-aos-duration="1000" className ="Conocenosimg" src= {juntando_basura} alt=""/> </div>
              <div data-aos="fade-up" data-aos-duration="1000">
                  <h2 data-aos="fade-up"data-aos-duration="1000" className= "Subtitulo"> Nuestra Finalidad</h2>
                  <p data-aos="fade-up" data-aos-duration="1000"> Buscamos concientizar y crear una plataforma de libre acceso para que cualquier persona que quiera participar en la limpieza de las costas: una gran necesidad ambiental de hoy en día.</p>
              </div>
              <div data-aos="fade-up" className= "Subtitulo"> 
                  <h2 data-aos="fade-up"> Tecnología aplicada</h2>
                  <p data-aos="fade-up" > Trabajamos con imagenes satelitales , creando un programa de Machine Lerning que nos permite localizar los puntos mas grandes de basura en las costas argentinas en tiempo actual. Ademas de crear una base de datos de focos de basura agregados por la popria comunidad.</p>
              </div>  
              <div className='centrar'><img data-aos="fade-up" data-aos-duration="1000" className ="Conocenosimg" src= {basura_satelital} alt=""/></div>
              
      </div> 

      <h1 data-aos="fade-up" data-aos-duration="1000" className='titulo' id = "Conocenos"> Contactanos </h1>            
      <div data-aos="fade-up" data-aos-duration="1000" className = "Grid2">      
              
              <div className = "Joaco">
                <div className='centrar'><img data-aos="fade-up" data-aos-duration="1000" className ="linkedin_foto" src= {linkedin_joaco} alt=""/> </div>
                <div className= "centrar"><p className='linkedin_info'> Joaquín Marcel </p></div>
                <div className='centrar'>
                  <p className= "rol">Back-End</p>
                  <a className = "link" target = "_blank" rel= "noreferrer" href = "https://www.linkedin.com/in/valentina-arbarello-baa963246"><img className='linkedin_link' src= {linkedin} alt=" "/></a> 
                </div>
              </div>
              
              <div className = "Tina">
                <div className='centrar'><img data-aos="fade-up" data-aos-duration="1000" className ="linkedin_foto" src= {linkedin_valen} alt=""/> </div>
                <div className= "centrar"><p className='linkedin_info'> Valentina Arbarello </p></div>
                <div className='centrar'>
                  <p className= "rol">Full-Stack</p>
                  <a className = "link" target = "_blank" rel= "noreferrer" href = "https://www.linkedin.com/in/valentina-arbarello-baa963246"><img className='linkedin_link' src= {linkedin} alt=" "/></a> 
                </div>
              </div>
              
              <div className = "Iara">
                <div className='centrar'><img data-aos="fade-up" data-aos-duration="1000" className ="linkedin_foto" src= {linkedin_iara} alt=""/> </div>
                <div className= "centrar"><p className='linkedin_info'> Iara Srur </p></div>
                <div className='centrar'>
                  <p className= "rol">Full-Stack</p>
                  <a className = "link" target = "_blank" rel= "noreferrer" href = "https://www.linkedin.com/in/valentina-arbarello-baa963246"><img className='linkedin_link' src= {linkedin} alt=" "/></a> 
                </div>
              </div>

              <div className = "Uma">
                <div className='centrar'><img data-aos="fade-up" data-aos-duration="1000" className ="linkedin_foto" src= {linkedin_uma} alt=""/> </div>
                <div className= "centrar"><p className='linkedin_info'> Uma Grün </p></div>
                <div className='centrar'>
                  <p className= "rol">UX/UI Designer</p>
                  <a className = "link" target = "_blank" rel= "noreferrer" href = "https://www.linkedin.com/in/valentina-arbarello-baa963246"><img className='linkedin_link' src= {linkedin} alt=" "/></a> 
                </div>
              </div>               
      </div>

      <div data-aos="fade-up" data-aos-duration="1000" className='centrar'><img id='titulo' className='separador' src= {separador} alt=" "/></div>
      <div data-aos="fade-up" data-aos-duration="1000" className='centrar'><h1 className= "Acceder_mapa">Acceder al mapa</h1></div>
      
        <div data-aos="fade-up" data-aos-duration="1000" className= "click"><img src= {click} alt=" "/></div>
        <div data-aos="fade-up" data-aos-duration="1000" className='centrar'>
        <Link to = "/mapview"> <img className= "planeta" src= {planeta} alt=" "/></Link>
        </div>
    </div>
      <footer className='footer'>Rexat - 2022</footer>     
    </>    
  );
}
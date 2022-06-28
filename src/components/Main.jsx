import * as React from 'react';
import "./Main.css"
import basura from "../img/basura.png"
import logo from "../img/logoRXT.png"
import planeta from "../img/planeta.png"
import {Link} from "react-router-dom";
import Scroll from "../components/Scroll"
import separador from "../img/separador.png"

function Main() {
  return (
    <>
      {/* <Scroll showBelow={250}/> */}
      <div className="Navbar">  
        <img className= "logo" src= {logo} alt=" "/>
        <a className = "Seccion" href="#Rexat">Rexat</a>
{/*         <a className = "Seccion" href="#Parte2">Concientizate</a>
 */}        <a className = "Seccion" href="#Conocenos">Conocenos</a>
        <a className = "Seccion" href="#Parte4">Mapa</a>
      </div>
           
<div className='Inicio'>  
  <div id= "Parte1">
    <div className="Text">
     <div className = "Hola"> Hola, <br></br> Somos <b><span style={{ color: "#ff951c" }}>Rexat</span> </b></div>
      <Link to = "/mapview" className = "IralMapa"> <button className = "IrMapa">Ir al mapa</button> </Link>
    </div>    
      <img className='basura' src= {basura} alt=" "/>
  </div>

{/*    <div className='centrar'><img className='separador' src= {separador} alt=" "/></div>
 */}
  <div id='Parte2'> 
  <h2>Cuidemos nuestro planeta<br></br>Actualmente hay mucha basura en las costas de todo el mundo <br></br> </h2> <p>
      y hay que trabajar juntos para resolverlo, <br></br> para tener un futuro mejor.</p>      
  </div>
  <div id="Parte3">
  <div className='centrar'><img className='separador' src= {separador} alt=" "/></div>

  <h1 id="Rexat"> ¿Qué es Rexat?</h1>
    <div className="Grid1">
        <div className= "QuienesSomos"> 
          <h1> ¿Quiénes somos?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, maxime totam, doloremque ducimus ea pariatur alias aperiam deserunt delectus voluptatibus quisquam voluptate accusamus laboriosam modi! Ducimus ab quam laboriosam quos.</p>
        </div>
        <div className ="Conocenosimg"> </div>      
        <div className ="Conocenosimg"> </div>
        <div className= "TecnoAplicada"> 
          <h1>Tecnología aplicada</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, maxime totam, doloremque ducimus ea pariatur alias aperiam deserunt delectus voluptatibus quisquam voluptate accusamus laboriosam modi! Ducimus ab quam laboriosam quos.</p>
        </div>      
        <div className= "Finalidad">
          <h1>Nuestra Finalidad</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, maxime totam, doloremque ducimus ea pariatur alias aperiam deserunt delectus voluptatibus quisquam voluptate accusamus laboriosam modi! Ducimus ab quam laboriosam quos.</p>
        </div>
      <div className ="Conocenosimg"> </div>  
    </div>    
    <h1 id="Conocenos"> Contactanos </h1>
    <div className = "Grid2">
      <div className = "Joaco">
        <h2 className='Nombre'> Joaquín<br></br>Marcel </h2>
        <div className = "Info"> 
          <button>L</button>
          <p> Back-End</p>
{/*           <button> IG </button>
 */}        </div>
      </div>

      <div className = "Tina">
        <h2 className='Nombre'> Valentina<br></br>Arbarello </h2>
        <div className = "Info"> 
          <button>L</button>
          <p> Full-Stack </p>
{/*           <button> IG </button>
 */}        </div>
      </div>

      <div className = "Iara">
        <h2 className='Nombre'> Iara<br></br>Srur </h2>
        <div className = "Info"> 
          <button>L</button>
          <p> Full-Stack </p>
{/*           <button> IG </button>
 */}        </div>
      </div>

      <div className = "Uma">
        <h2 className='Nombre'> Uma<br></br>Grün </h2>
        <div className = "Info"> 
          <button>L</button>
          <p>  UX/UI Designer  </p>
{/*           <button> IG </button>
 */}        </div>
      </div>
    </div>
  </div>
  <div id="Parte4">
  <div className='centrar'><img className='separador' src= {separador} alt=" "/></div>
    <h1 className='titulo'>Acceder al mapa</h1>
    <div className='centrar'><Link to = "/mapview" className = "IralMapa"> <img className= "planeta" src= {planeta} alt=" "/></Link> </div>
  </div>
   
  <footer className='footer'>Rexat - 2022</footer>

</div>
</>    
  );
}
export default Main
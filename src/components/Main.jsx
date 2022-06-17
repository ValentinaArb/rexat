import React from 'react'
import "./Main.css"
import basura from "../img/basura.png"
import logo from "../img/logoRXT.png"
import planeta from "../img/planeta.png"
import MapView from './MapView'
import {BrowserRouter as Router, Route, Routes, NavLink} from "react-router-dom";


function Main() {
  return (
    <>
           <div className="Navbar">  
           <img className= "logo" src= {logo} alt=" "/>
            {/* <a className = "Seccion" href="#Parte1">Rexat</a> */}
            <a className = "Seccion" href="#Parte2">Concientizate</a>
            <a className = "Seccion" href="#Parte3">Conocenos</a>
            <a className = "Seccion" href="#Parte4">Mapa</a>
           </div>
           
<div className='Inicio'>
  <div id= "Parte1">
      <div className="Text">
        <div className = "Hola"> <b>Hola, <br></br> Somos Rexat</b></div> <br></br>
          <button className="IrMapa">Ir al mapa</button> 

        </div>

    
        <NavLink to = "/Hola">
        Hola
        </NavLink>
        <NavLink to = "/Chau">
        Chau
        </NavLink>

        <img className='basura' src= {basura} alt=" "/>
  </div>
  <div id='Parte2'> 
      <h1>Cuidemos nuestro planeta</h1>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nisi velit esse dolor, deserunt obcaecati laudantium explicabo amet commodi magnam reiciendis voluptatem perferendis corporis ab doloribus quibusdam. Illo, quod dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate magnam dolorum et harum cumque veritatis corporis officia nostrum. Dolorem, debitis incidunt? Nobis, fuga ipsa error ipsum quasi ducimus eaque nostrum.</p>      
  </div>
{/*   <Navbar bg = "light" variant = "light"></Navbar>
    <Nav className ="mr-auto">
      <Nav.Link>
        <Link to= "/MapView">Ir al Mapa</Link>
      </Nav.Link>
    </Nav> */}

  <div id="Parte3">
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

    <h1 className='titulo'>Conocenos</h1> 
    <div className = "Grid2">
      <div className = "Joaco">
        <h2 className='Nombre'> Joaquín<br></br>Marcel </h2>
        <div className = "Info"> 
          <button>L</button>
          <p> Back-End</p>
          <button> IG </button>
        </div>
      </div>

      <div className = "Tina">
        <h2 className='Nombre'> Valentina<br></br>Arbarello </h2>
        <div className = "Info"> 
          <button>L</button>
          <p> Full-Stack </p>
          <button> IG </button>
        </div>
      </div>

      <div className = "Iara">
        <h2 className='Nombre'> Iara<br></br>Srur </h2>
        <div className = "Info"> 
          <button>L</button>
          <p> Full-Stack </p>
          <button> IG </button>
        </div>
      </div>

      <div className = "Uma">
        <h2 className='Nombre'> Uma<br></br>Grün </h2>
        <div className = "Info"> 
          <button>L</button>
          <p>  UX/UI Designer  </p>
          <button> IG </button>
        </div>
      </div>
    </div>
  </div>
<div id="Parte4"> 
<h1 className='titulo'>Acceder al mapa</h1>
<img className= "planeta" src= {planeta} alt=" "/>
</div>
<footer className='footer'>Rexat - 2022</footer>
</div>
    </>    
  )
}
export default Main
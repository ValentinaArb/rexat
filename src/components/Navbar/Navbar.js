import React from 'react';
import logo from "../../img/logoRXT.png"
import "./Navbar.css";

export default function Navbar(){

return(
  <nav className="nav">
      <img className= "logo" src= {logo} alt=" "></img>
      <ul>
          <a className="Seccion" href="#Rexat">Rexat</a>
          <a className="Seccion" href="#Conocenos">Conocenos</a>
          <a className="Seccion" href="#titulo">Mapa</a>
      </ul>
  </nav>
);
}
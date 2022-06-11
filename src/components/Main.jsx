import React from 'react'
/* import styled from 'styled-components' */
import "./Main.css"
import Mapa from './Mapa'

function Main() {
  return (
    <>
{/*        <NavContainer> */}
           <div className="Navbar">
            <a href="/">Rexat</a>
            <a href="/">Concientizate</a>
            <a href="/">Conocenos</a>
            <a href="/">Mapa</a>
           </div>           
{/*    </NavContainer> */}
        
{/*   <WelcomeContainer> */}
        <div className="Text">
            <div className = "Hola"> <b>Hola, <br></br> Somos Rexat</b></div> <br></br>
            <button className="IrMapa" onClick="">Ir al mapa</button>
        </div>
        <div className ="img"> </div>
{/*      </WelcomeContainer> */}
    </>
  )
}

export default Main
/* const WelcomeContainer = styled.nav`
`
const NavContainer = styled.nav`
` */
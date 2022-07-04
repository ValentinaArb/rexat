import logo from "../img/logoRXT.png"
import "./Navbar.css"
export default function Navbar(){
    return(
    <nav className="nav">
        <a><img href="/" className= "logo" src= {logo} alt=" "></img></a>
        <ul>
          <li>
            <a className="Seccion" href="#Rexat">Rexat</a>
            <a className="Seccion" href="#Conocenos">Conocenos</a>
            <a className="Seccion" href="#titulo">Mapa</a>
          </li>
        </ul>
    </nav>
    );
}
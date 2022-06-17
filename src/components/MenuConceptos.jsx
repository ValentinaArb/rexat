import { NavLink } from "react-router-dom";

const MenuConceptos = () =>{
    return(
    <nav> 
        <ol>
            <li>
                <span> Menu con enlaces no recomendados</span>
                <a href="/">Home</a>
                <a href="/mapa">mapa</a>
                <a href="/main">main</a>
            </li>

            <li>
                <span>Componente Link</span> 
                <NavLink to = "/">Home</NavLink>
                <NavLink to = "/mapa">Mapa</NavLink>
                <NavLink to = "/main">Main</NavLink>
            </li>
        </ol>



     </nav>
    )
};

export default MenuConceptos
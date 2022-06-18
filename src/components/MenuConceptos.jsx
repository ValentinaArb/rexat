import { NavLink } from "react-router-dom";

const MenuConceptos = () =>{
    return(
    <nav> 
        <span>Componente Link</span> 
                <NavLink to = "/">Home</NavLink>
                <NavLink to = "/mapview">Mapa</NavLink>
    </nav>
    )
};

export default MenuConceptos
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Main from "./Main";
import MapView from "./MapView";
import MenuConceptos from "./MenuConceptos";

const ConceptosBasicos = () => {
return(
<div> 
<h2> Conceptos</h2>

 <li>
    <span> Prueba: </span> 
    {/* <Link to = "/main">Main</Link> */}
 </li> 
<Router>
    <MenuConceptos/>
        <Routes>
            <Route exact path = "/main" component = {Main}/>         
        </Routes>
</Router>
</div>
)
}

export default ConceptosBasicos
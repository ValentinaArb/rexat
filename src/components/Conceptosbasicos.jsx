import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from "./Main";
import MapView from "./MapView";
import MenuConceptos from "./MenuConceptos";

const ConceptosBasicos = () => {
return(
<div> 
<h2> Conceptos</h2>

<Router>
    <MenuConceptos/>
        <Routes>
            <Route exact path = "/" component = {Main}/>
            <Route exact path = "/mapview" component = {MapView}/>
        </Routes>
</Router>


</div>
)
}

export default ConceptosBasicos
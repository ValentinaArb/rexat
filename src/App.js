import React from "react";
import Main from "./components/Main";
import ConceptosBasicos from "./components/Conceptosbasicos";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

function App() {   
    return(
     <>      
       <Router>
        <Main/>
        <Routes>
            <Route exact path = "/main" component = {Main}/>         
        </Routes>
    </Router>            
      </> 
    );
}
export default App;

import React from "react";
import Main from "./components/Main";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MapView from "./components/MapView";

function App() {   
    return(
     <>   
      <Router>
        <Main/>
          <Routes>
              <Route exact path = "/main" component = {Main}/> 
              <Route exact path = "/MapView" component = {MapView}/>                 
          </Routes>
        </Router>
      </>  
      
    );
}
export default App;

import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./components/Main";
import MapView from "./components/MapView";
import InicioSesion from "./components/Usuario/InicioSesion";
import Registrarse from "./components/Usuario/Registrarse";

function App() {   
   return(
     <>  
     <BrowserRouter>
       <Routes> 
         <Route path="/" element={<Main/>}/>
         <Route path="/mapview" element={<MapView/>}/>{/* 
         <Route path="/InicioSesion" element={<InicioSesion/>}/> */}
         <Route path="/Registrarse" element={<Registrarse/>}/>
       </Routes>
     </BrowserRouter>
      </>       
   );
}
export default App;

//npm i react-leaflet leaflet 
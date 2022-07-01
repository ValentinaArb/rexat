import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./components/Main";
import MapView from "./components/MapView";

function App() {   
   return(
     <>  
     <BrowserRouter>
       <Routes> 
         <Route path="/" element={<Main/>}/>
         <Route path="/mapview" element={<MapView/>}/>{/* 
         <Route path="/InicioSesion" element={<InicioSesion/>}/> */}
       </Routes>
     </BrowserRouter>
      </>       
   );
}
export default App;

//npm i react-leaflet leaflet 
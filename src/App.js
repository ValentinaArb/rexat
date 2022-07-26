import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./components/Main/Main";
import MapView  from "./components/Mapa/MapView";

export default function App() {   
   return(
     <>  
     <BrowserRouter>
       <Routes> 
         <Route path="/" element={<Main/>}/>
         <Route path="/mapview" element={<MapView/>}/>
         <Route path="/map" element={<MapView/>}/>
       </Routes>
     </BrowserRouter>
      </>       
   );
}

//npm i react-leaflet leaflet 
//npm install --save mapbox-gl
// npm install aos --save
//npm install --save react @trendmicro/react-sidenav

import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./components/Main";
import MapView2 from "./components/Mapa/MapView2";
import MapView  from "./components/Mapa/MapView";

export default function App() {   
   return(
     <>  
     <BrowserRouter>
       <Routes> 
         <Route path="/" element={<Main/>}/>
         <Route path="/mapview" element={<MapView/>}/>
         <Route path="/mapview2" element={<MapView2/>}/>
       </Routes>
     </BrowserRouter>
      </>       
   );
}

//npm i react-leaflet leaflet 
//npm install --save mapbox-gl
// npm i aos--save
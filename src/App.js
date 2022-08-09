import React, {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./components/Main/Main";
import MapView  from "./components/Mapa/MapView";
import Draggable_Marker from './components/Draggable_Marker/draggable_marker';

export default function App() { 
  const [conectado, setConectado]= useState(false) 
  
  const acceder=(estado)=>{
    conectado(estado)
  }
  return(    
/*     conectado ? <MapView/> : <Draggable_Marker acceder = {acceder}/>
 */
    <>

     <BrowserRouter>
       <Routes> 
         <Route path="/" element={<Main/>}/>
         <Route path="/mapview" element={<MapView/>}/>
         <Route path = "/draggableMark" element = {<Draggable_Marker/>}/>
       </Routes>
     </BrowserRouter>
    </>       
   );
}


//npm install --save mapbox-gl
// npm install aos --save
//npm install --save react @trendmicro/react-sidenav
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./components/Main/Main";
import MapView  from "./components/Mapa/MapView";
import DraggableMark  from "./components/Pruebas/draggable_mark";

export default function App() {   
   return(
     <>  
     <BrowserRouter>
       <Routes> 
         <Route path="/" element={<Main/>}/>
         <Route path="/mapview" element={<MapView/>}/>
         <Route path="/map" element={<MapView/>}/>
         <Route path="/dragmark" element={<DraggableMark/>}/>
       </Routes>
     </BrowserRouter>
      </>       
   );
}


//npm install --save mapbox-gl
// npm install aos --save
//npm install --save react @trendmicro/react-sidenav

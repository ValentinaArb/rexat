import React from "react";
import Main from "./components/Main";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MapView from "./components/MapView";

function App() {   
   return(
     <>  
     <BrowserRouter>
       <Routes> 
         <Route path="/" element={<Main/>}/>
         <Route path="/mapview" element={<MapView/>}/>          
       </Routes>
     </BrowserRouter>
      </>       
   );
}
export default App;

//npm i react-leaflet leaflet 
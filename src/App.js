import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./components/Main/Main";
import MapView  from "./components/Mapa/MapView";
import Draggable_Marker from './components/Draggable_Marker/draggable_marker';

export default function App() { 
  
  return(
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

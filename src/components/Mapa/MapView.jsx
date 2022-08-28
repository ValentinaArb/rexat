import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import "./MapView.css"
import Sidebar from "../Sidebar/Sidebar";
//s import Draggable_Marker from '../Draggable_Marker/draggable_marker';
import AddIcon from '@mui/icons-material/Add';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import DeleteIcon from '@mui/icons-material/Delete';

mapboxgl.accessToken = 'pk.eyJ1IjoidW1ncnUiLCJhIjoiY2w0bzd5aHc3MDR5ZzNkbGx5bzh0bWZ3YiJ9.1m8NjPzeitlkvyR7UsQzLQ';

export default function MapView() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(-58.4540 );
  const [lat] = useState(-34.5492);
  const [zoom] = useState(11);
      
  const delete_point = () => {
    if (currentMarkers!==null) {
      for (var i = currentMarkers.length - 1; i >= 0; i--) {
        currentMarkers[i].remove();
      }
    }
  };

  const add_point  = () => {
      const oneMarker= new mapboxgl.Marker({currentMarkers,color: "#FBB03B", draggable:true})        
        .setLngLat([-58.44,-34.54])
        .addTo(map.current);
        currentMarkers.push(oneMarker);
      };

  useEffect(() => {
    if (map.current){ 
    return;
    }
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/umgru/cl53gtdyf000614pmr05mcd1u',
      center: [lng, lat],
      zoom: zoom
    });    
  });
  
  var currentMarkers=[];
  
return (  
  <>
    <Sidebar/>
    <div ref={mapContainer} className="map-container" />      
    <div className="sidebar"> Longitude: {lng} | Latitude: {lat} | Zoom: {zoom} </div>
    <button className='agregar' onClick={delete_point}><DeleteIcon/></button>
    <button className='eliminar' onClick={add_point}><AddIcon/></button>
  </>
  );
}

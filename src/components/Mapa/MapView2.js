import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import "./MapView2.css"
import {Link} from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddIcon from '@mui/icons-material/Add';
import Sidebar from "../Sidebar/Sidebar"

mapboxgl.accessToken = 'pk.eyJ1IjoidW1ncnUiLCJhIjoiY2w0bzd5aHc3MDR5ZzNkbGx5bzh0bWZ3YiJ9.1m8NjPzeitlkvyR7UsQzLQ';

export default function MapView2() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-58.45400186608953 );
  const [lat, setLat] = useState(-34.549207371406716);
  const [zoom, setZoom] = useState(11);
 
useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/umgru/cl53gtdyf000614pmr05mcd1u',
      center: [lng, lat],
      zoom: zoom
    });
  });

useEffect(() => {
  if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
    setLng(map.current.getCenter().lng.toFixed(4));
    setLat(map.current.getCenter().lat.toFixed(4));
    setZoom(map.current.getZoom().toFixed(2));
  });
});

const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

return (  
  <> 
    <Sidebar/>
    <div ref={mapContainer} className="map-container" />      
    <div className="sidebar"> Longitude: {lng} | Latitude: {lat} | Zoom: {zoom} </div>
    <div className = "btnMapa">
      <Link to = "/" className = "Volver">
        <HomeOutlinedIcon className = "BtnMapa"/>
      </Link>  
      <AddIcon className = "BtnMapa"  onClick={handleClickOpen}/>      
    </div>
  </>
   

  );
}
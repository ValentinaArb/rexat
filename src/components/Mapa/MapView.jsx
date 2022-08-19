import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import "./MapView.css"
import Sidebar from "../Sidebar/Sidebar";
//s import Draggable_Marker from '../Draggable_Marker/draggable_marker';
import geoJson from "./location.json"

mapboxgl.accessToken = 'pk.eyJ1IjoidW1ncnUiLCJhIjoiY2w0bzd5aHc3MDR5ZzNkbGx5bzh0bWZ3YiJ9.1m8NjPzeitlkvyR7UsQzLQ';

export default function MapView() {  

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-58.4540 );
  const [lat, setLat] = useState(-34.5492);
  const [zoom, setZoom] = useState(11);
 
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

  new mapboxgl.Marker({
    color: "#FFFFFF"
    }).setLngLat([30.5, 50.5])
    .addTo(map.current);
  
  //console.log('Este es el map: ' + map.current)
  /*geoJson.features.map((feature) =>
  );*/
// Create a new marker.


return (  
  <>
    <Sidebar/>
    <div ref={mapContainer} className="map-container" />      
    <div className="sidebar"> Longitude: {lng} | Latitude: {lat} | Zoom: {zoom} </div>
  </>
  );
}

import React from "react";
import{MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {Link} from "react-router-dom";
import Main from "./Main";

 const markerIcon = new L.Icon({
    iconUrl: require("../img/icon.png"),
    iconSize: [30,45],
}) 

function Mapa() {    
    return <>    
    <MapContainer center = {{lat:"-34.54949600222229", lng: "-58.454048583909845"}} zoom ={12}>      
    
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/> 
       
       <Marker position={{lat:"-34.52332670913202", lng: "-58.46806888901411 "}} icon ={markerIcon}>
         <Popup>
             <b>Costanera, Vicente Lopez</b>
         </Popup>
       </Marker>
 
       <Marker position={{lat:"-37.74009208753675", lng: "-57.41728579520585 "}} icon ={markerIcon}>
         <Popup>
             <b>Playa de Mar Chiquita, Mar del Plata</b>
         </Popup>
       </Marker>
 
       <Marker position={{lat:" -34.48742043071295", lng: "-58.48086394951987 "}} icon ={markerIcon}>
         <Popup>
             <b>Playita de Olivos, Argentina</b>
         </Popup>
       </Marker>
  
       <Marker position={{lat:" -37.081132945385974", lng: " -56.82744275746245  "}} icon ={markerIcon}>
         <Popup>
             <b>Mama Concert´s Playa, Pinamar</b>
         </Popup>
       </Marker>
       
     </MapContainer>  
     
     </>
 
 }
 export default Map;
import React from "react";
import{MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";
//import { Markers } from "./Markers";
import L from "leaflet"

const markerIcon = new L.Icon({
    iconUrl: require("../img/icon.png"),
    iconSize: [30,45],
})

const MapView = () =>{
    return <MapContainer center = {{lat:"-34.54949600222229", lng: "-58.454048583909845"}} zoom ={12}>
        
       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/> 
      {/* <Markers/> */}
      <Marker position={{lat:"-34.54949600222229", lng: "-58.454048583909845"}} icon ={markerIcon}>
        <Popup>
            <b>Ort, Argentina</b>
        </Popup>
      </Marker>
      
    </MapContainer>    
}

export default MapView;
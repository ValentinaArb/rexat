/* import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import "./MapView.css"
import {Link} from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddIcon from '@mui/icons-material/Add';
import Sidebar from "../Sidebar/Sidebar"
import{MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

mapboxgl.accessToken = 'pk.eyJ1IjoidW1ncnUiLCJhIjoiY2w0bzd5aHc3MDR5ZzNkbGx5bzh0bWZ3YiJ9.1m8NjPzeitlkvyR7UsQzLQ';

export default function MapView() {
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
 */

/* const markerIcon = new L.Icon({
  iconUrl: require("../../img/icon.png"),
  iconSize: [30,45],
});

const Transition = React.forwardRef(function Transition(props, ref) {
return <Slide direction="up" ref={ref} {...props} />;
});


function MapView() { 
const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};
   
   return ( 
   <>
      <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
      >
          <DialogTitle className = "centrar">{"Agregar punto"}</DialogTitle>
            <DialogContent>
              <TextField className='input'
              autoFocus
              margin="dense"
              id="name"
              label="Nombre"
              type="text"
              fullWidth
              variant="standard"
              />
              <TextField className='input'
              margin="dense"
              id="coordenada"
              label="Coordenada"
              placeholder="Ejemplo: 41.40338; 2.17403"
              type="text"
              fullWidth
              variant="standard"
              />
            </DialogContent> 
          <DialogActions>
            <Button onClick={handleClose}>CANCELAR</Button>
            <Button onClick={handleClose}>AGREGAR</Button>
          </DialogActions>
      </Dialog>      
    <div className = "Page">

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
           <b>Playita de Olivos, Martinez</b>
       </Popup>
     </Marker>

     <Marker position={{lat:" -37.081132945385974", lng: " -56.82744275746245  "}} icon ={markerIcon}>
       <Popup>
           <b>Mama Concert´s Playa, Pinamar</b>
       </Popup>
     </Marker>       
   </MapContainer>   
   
   <Link to = "/" className = "Volver">
      <HomeOutlinedIcon className = "BtnMapa"/>
    </Link>  
    <AddIcon className = "BtnMapa"  onClick={handleClickOpen}/>
    </div>
   </>
   );
}

export default MapView; */


import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import "./MapView.css"
import {Link} from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddIcon from '@mui/icons-material/Add';
import Sidebar from "../Sidebar/Sidebar"
import{MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';


mapboxgl.accessToken = 'pk.eyJ1IjoidW1ncnUiLCJhIjoiY2w0bzd5aHc3MDR5ZzNkbGx5bzh0bWZ3YiJ9.1m8NjPzeitlkvyR7UsQzLQ';

export default function MapView() {
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
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
    {<Sidebar/>}
    <div ref={mapContainer} className="map-container" />      
    <div className="sidebar"> Longitude: {lng} | Latitude: {lat} | Zoom: {zoom} </div>
    <div className = "btnMapa">     
      <AddIcon className = "BtnMapa"  onClick={handleClickOpen}/>      
    </div>
    <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle className = "centrar">{"AÑADIR PUNTO"}</DialogTitle>
            <DialogContent>
                <TextField className='input'
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
                />
                <TextField className='input'
                  name="password"
                  type="password"
                  placeholder="password"
                  label="Password"
                  fullWidth
                  variant="standard"
            />
            </DialogContent>     
            <DialogActions> 
              <Button onClick={handleClose}>CANCELAR</Button>
              <Button onClick={handleClose}>CONTINUAR</Button>
            </DialogActions>
        </Dialog>
  </>
   

  );
}
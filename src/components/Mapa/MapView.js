import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import "./MapView.css"
import Sidebar from "../Sidebar/Sidebar"
import "leaflet/dist/leaflet.css";
import Slide from '@mui/material/Slide';
/* import {Link} from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import{MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import L from "leaflet";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText'; */

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
  if (!map.current) return;
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
    
    {/* <div className = "btnMapa"> <AddIcon className = "BtnMapa"  onClick={handleClickOpen}/> </div>
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
    </Dialog> */}
  </>
  );
}
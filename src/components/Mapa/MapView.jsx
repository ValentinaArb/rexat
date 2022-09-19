import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import "./MapView.css"
import Sidebar from "../Sidebar/Sidebar";
//s import Draggable_Marker from '../Draggable_Marker/draggable_marker';
import AddIcon from '@mui/icons-material/Add';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

mapboxgl.accessToken = 'pk.eyJ1IjoidW1ncnUiLCJhIjoiY2w0bzd5aHc3MDR5ZzNkbGx5bzh0bWZ3YiJ9.1m8NjPzeitlkvyR7UsQzLQ';

const URL_LOGIN = "http://localhost/ws-login/login.php"

const enviarData = async (url, data)=> {

const resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/jason'
        }
    });

    console.log(resp);
    const json = await resp.json();
    console.log(json);
}

export default function MapView() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-58.4540 );
  const [lat, setLat] = useState(-34.5492);
  const [zoom, setZoom] = useState(11);
  
  const handleClosePunto = () => {
    setOpenPunto(false);
  };

  const [openPunto, setOpenPunto] = React.useState(false);
  const handleClickOpenPunto = () => {
      setOpenPunto(true);
    };

  const delete_point = () => {
    if (currentMarkers!==null) {
      for (var i = currentMarkers.length - 1; i >= 0; i--) {
        currentMarkers[i].remove();
      }
    }
  };
  const refTitulo = useRef(null);
  const refDescripcion = useRef(null);

  const add_point  = () => {
    setOpenPunto(false);
    var html = {refTitulo};

    var popup = new mapboxgl.Popup(
        {
           anchor: 'bottom',
           offset: { 'bottom': [0, -10] }, 
           OnClick: false
        }

    ).setHTML(html.value); 
    
      const oneMarker= new mapboxgl.Marker({currentMarkers,color: "#FBB03B", draggable:true})        
        .setLngLat([-58.44,-34.54])
        .setPopup(popup)
        .addTo(map.current);
  
        currentMarkers.push(oneMarker);

        const data = {
          "Titulo": refTitulo.current.value,
          "Descripcion": refDescripcion.current.value
      }
      
      fetch('https://sheet.best/api/sheets/d7e4405d-c143-45c4-881b-157eec610464',{
          method:'POST',
          mode: 'cors',
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              "Titulo": data.Titulo,
              "Descripcion": data.Descripcion
          })
      });
      console.log(data);
      enviarData( URL_LOGIN, data);
  }  
     
  useEffect(() => {    
    if (map.current){ 
    return;
    }
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/umgru/cl53gtdyf000614pmr05mcd1u',
      center: [lng, lat],
      zoom: zoom,      
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
  
  var currentMarkers=[];
  
return (
  <>
    <Sidebar/>
    <div ref={mapContainer} className="map-container" />      
    <div className="sidebar"> Longitude: {lng} | Latitude: {lat} | Zoom: {zoom} </div>
    <button title= "Eliminar" className='eliminar' onClick={delete_point}><DeleteIcon/></button>
      {/* <button title= "Agregar" className='agregar' onClick={add_point}><AddIcon/></button> */}

    <button title= "Agregar" className='agregar' onClick={handleClickOpenPunto}><AddIcon/></button>

    <Dialog
        open={openPunto}
        keepMounted
        onClose={handleClosePunto}
        aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle className = "Titulo">{"Agregar punto"}</DialogTitle>
      <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <input className='NombrePunto-input'
          autoFocus
          type="text"
          id="input-punto"
          placeholder="Titulo del punto"
          variant="standard"
          ref={refTitulo}
          />
          <input className='DescripcionPunto-input'
          autoFocus
          type="text"
          id="input-punto"
          placeholder="Descripción del punto"
          variant="standard"
          ref={refDescripcion}
          />
          <Button variant="contained" component="label" id="upload-image-punto">
            <div className= "centrar"><DriveFolderUploadIcon/></div>
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          </DialogContentText>
      </DialogContent>     
      <DialogActions>
      <Button onClick={handleClosePunto}>Cancelar</Button>
      <Button onClick={add_point}>Ok</Button>
      </DialogActions>
    </Dialog>   

  </>
  );
}

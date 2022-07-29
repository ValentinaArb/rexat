/* import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import "./draggable_mark.css"
import "leaflet/dist/leaflet.css";
mapboxgl.accessToken = 'pk.eyJ1IjoidW1ncnUiLCJhIjoiY2w0bzd5aHc3MDR5ZzNkbGx5bzh0bWZ3YiJ9.1m8NjPzeitlkvyR7UsQzLQ';
    
export default function DraggableMark() { 
    const coordinates = document.getElementById('coordinates');
    const map = useRef(null);
    const [lng] = useState(-58.45400186608953 );
    const [lat] = useState(-34.549207371406716);
    const [zoom] = useState(11);
    const mapContainer = useRef(null);
      
    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/umgru/cl53gtdyf000614pmr05mcd1u',
          center: [lng, lat],
          zoom: zoom
        });
      });       
} */
     /*  const canvas = map.getCanvasContainer();
      const geojson = {
          'type': 'FeatureCollection',
          'features': [
              {
                  'type': 'Feature',
                  'geometry': {
                     'type': 'Point',
                     'coordinates': [0, 0]
                  }
              }
          ]
      };

     function onMove(e) {
        const coords = e.lngLat;

        canvas.style.cursor = 'grabbing';

        geojson.features[0].geometry.coordinates = [coords.lng, coords.lat];
        map.getSource('point').setData(geojson);
    }

    function onUp(e) {
        const coords = e.lngLat;

        coordinates.style.display = 'block';
        coordinates.innerHTML = `Longitude: ${coords.lng}<br />Latitude: ${coords.lat}`;
        canvas.style.cursor = '';

        map.off('mousemove', onMove);
        map.off('touchmove', onMove);
    }

    map.on('load', () => {
        map.addSource('point', {
            'type': 'geojson',
            'data': geojson
        });

        map.addLayer({
            'id': 'point',
            'type': 'circle',
            'source': 'point',
            'paint': {
                'circle-radius': 10,
                'circle-color': 'red'
            }
        });

        map.on('mouseenter', 'point', () => {
            map.setPaintProperty('point', 'circle-color', '#3bb2d0');
            canvas.style.cursor = 'move';
        });

        map.on('mouseleave', 'point', () => {
            map.setPaintProperty('point', 'circle-color', '#3887be');
            canvas.style.cursor = '';
        });

        map.on('mousedown', 'point', (e) => {
            e.preventDefault();

            canvas.style.cursor = 'grab';

            map.on('mousemove', onMove);
            map.once('mouseup', onUp);
        });

        map.on('touchstart', 'point', (e) => {
            if (e.points.length !== 1) return;

            e.preventDefault();

            map.on('touchmove', onMove);
            map.once('touchend', onUp);
        });
    });  
      
    return (  
      <>
        <div ref={mapContainer} className="map-container" />      
        <div className="sidebar"> Longitude: {lng} | Latitude: {lat}</div>
      </>
      );
    }
    
    import React, { useRef, useState, useMemo, useCallback, Marker, Popup,render, MapContainer,TileLayer } from 'react';
    import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
    import "./draggable_mark.css"
    import "leaflet/dist/leaflet.css";
    mapboxgl.accessToken = 'pk.eyJ1IjoidW1ncnUiLCJhIjoiY2w0bzd5aHc3MDR5ZzNkbGx5bzh0bWZ3YiJ9.1m8NjPzeitlkvyR7UsQzLQ';
        

    const center = {
        lat: 51.505,
        lng: -0.09,
      }
      
      export default function DraggableMark() { 
        const [draggable, setDraggable] = useState(false)
        const [position, setPosition] = useState(center)
        const markerRef = useRef(null)
        const eventHandlers = useMemo(
          () => ({
            dragend() {
              const marker = markerRef.current
              if (marker != null) {
                setPosition(marker.getLatLng())
              }
            },
          }),
          [],
        )
        const toggleDraggable = useCallback(() => {
          setDraggable((d) => !d)
        }, [])
      
        return (
          <Marker
            draggable={draggable}
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}>
            <Popup minWidth={90}>
              <span onClick={toggleDraggable}>
                {draggable
                  ? 'Marker is draggable'
                  : 'Click here to make marker draggable'}
              </span>
            </Popup>
          </Marker>
        )
      }
      
      render(
        <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
        </MapContainer>,
      )
      
     /*  import React, { useRef, useState, useMemo, useCallback, Marker, Popup,render, MapContainer,TileLayer } from 'react';
      import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
      import "./draggable_mark.css"
      import "leaflet/dist/leaflet.css";
      mapboxgl.accessToken = 'pk.eyJ1IjoidW1ncnUiLCJhIjoiY2w0bzd5aHc3MDR5ZzNkbGx5bzh0bWZ3YiJ9.1m8NjPzeitlkvyR7UsQzLQ';

      const center = {
        lat: 51.505,
        lng: -0.09,
      }
      
      export default function DraggableMark() { 
        const [draggable, setDraggable] = useState(false)
        const [position, setPosition] = useState(center)
        const markerRef = useRef(null)
        const eventHandlers = useMemo(
          () => ({
            dragend() {
              const marker = markerRef.current
              if (marker != null) {
                setPosition(marker.getLatLng())
              }
            },
          }),
          [],
        )
        const toggleDraggable = useCallback(() => {
          setDraggable((d) => !d)
        }, [])
      
        return (
          <Marker
            draggable={draggable}
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}>
            <Popup minWidth={90}>
              <span onClick={toggleDraggable}>
                {draggable
                  ? 'Marker is draggable'
                  : 'Click here to make marker draggable'}
              </span>
            </Popup>
          </Marker>
        )
      }
      
      render(
        <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>,
      ) */

      /* import React, { useRef, useState, useMemo, useCallback, Marker, Popup,render, MapContainer,TileLayer } from 'react';
      const center = {
        lat: 51.505,
        lng: -0.09,
      }
      
      export default function DraggableMarker() {
        const [draggable, setDraggable] = useState(false)
        const [position, setPosition] = useState(center)
        const markerRef = useRef(null)
        const eventHandlers = useMemo(
          () => ({
            dragend() {
              const marker = markerRef.current
              if (marker != null) {
                setPosition(marker.getLatLng())
              }
            },
          }),
          [],
        )
        const toggleDraggable = useCallback(() => {
          setDraggable((d) => !d)
        }, [])
      
        return (
          <Marker
            draggable={draggable}
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}>
            <Popup minWidth={90}>
              <span onClick={toggleDraggable}>
                {draggable
                  ? 'Marker is draggable'
                  : 'Click here to make marker draggable'}
              </span>
            </Popup>
          </Marker>
        )
      }
      
      render(
        <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>,
      ) */
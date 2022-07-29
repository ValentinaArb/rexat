/* import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import "./MapView.css"
import Sidebar from "../Sidebar/Sidebar"

mapboxgl.accessToken = 'pk.eyJ1IjoidW1ncnUiLCJhIjoiY2w0bzd5aHc3MDR5ZzNkbGx5bzh0bWZ3YiJ9.1m8NjPzeitlkvyR7UsQzLQ';
    const coordinates = document.getElementById('coordinates');
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [0, 0],
        zoom: 2
    });

    const canvas = map.getCanvasContainer();

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

        // Set a UI indicator for dragging.
        canvas.style.cursor = 'grabbing';

        // Update the Point feature in `geojson` coordinates
        // and call setData to the source layer `point` on it.
        geojson.features[0].geometry.coordinates = [coords.lng, coords.lat];
        map.getSource('point').setData(geojson);
    }

    function onUp(e) {
        const coords = e.lngLat;

        // Print the coordinates of where the point had
        // finished being dragged to on the map.
        coordinates.style.display = 'block';
        coordinates.innerHTML = `Longitude: ${coords.lng}<br />Latitude: ${coords.lat}`;
        canvas.style.cursor = '';

        // Unbind mouse/touch events
        map.off('mousemove', onMove);
        map.off('touchmove', onMove);
    }

    map.on('load', () => {
        // Add a single point to the map.
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
                'circle-color': '#F84C4C' // red color
            }
        });

        // When the cursor enters a feature in
        // the point layer, prepare for dragging.
        map.on('mouseenter', 'point', () => {
            map.setPaintProperty('point', 'circle-color', '#3bb2d0');
            canvas.style.cursor = 'move';
        });

        map.on('mouseleave', 'point', () => {
            map.setPaintProperty('point', 'circle-color', '#3887be');
            canvas.style.cursor = '';
        });

        map.on('mousedown', 'point', (e) => {
            // Prevent the default map drag behavior.
            e.preventDefault();

            canvas.style.cursor = 'grab';

            map.on('mousemove', onMove);
            map.once('mouseup', onUp);
        });

        map.on('touchstart', 'point', (e) => {
            if (e.points.length !== 1) return;

            // Prevent the default map drag behavior.
            e.preventDefault();

            map.on('touchmove', onMove);
            map.once('touchend', onUp);
        });
    });



 */

    import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import "./MapView.css"
import Sidebar from "../Sidebar/Sidebar"
import "leaflet/dist/leaflet.css";

mapboxgl.accessToken = 'pk.eyJ1IjoidW1ncnUiLCJhIjoiY2w0bzd5aHc3MDR5ZzNkbGx5bzh0bWZ3YiJ9.1m8NjPzeitlkvyR7UsQzLQ';

export default function MapView() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-58.45400186608953 );
  const [lat, setLat] = useState(-34.549207371406716);
  const [zoom, setZoom] = useState(11);
 
useEffect(() => {
    if (map.current) return;
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

return (  
  <>
    {<Sidebar/>}
    <div ref={mapContainer} className="map-container" />      
    <div className="sidebar"> Longitude: {lng} | Latitude: {lat} | Zoom: {zoom} </div>
  </>
  );
}

import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZXJpY3podTE5IiwiYSI6ImNsc2k1OGh5YTJkNHYyanF1dTFheTh4MXAifQ.uFPaTHtGZLIH-x-926nChg';

const MapboxMap = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!mapboxgl.accessToken || mapboxgl.accessToken === 'YOUR_MAPBOX_ACCESS_TOKEN') {
      console.error('Mapbox access token is not set.');
      return;
    }

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9,
    });

    map.on('load', () => {
      map.addSource('some-gis-layer', {
        type: 'geojson',
        data: 'URL_TO_YOUR_GEOJSON_DATA',
      });

      map.addLayer({
        id: 'some-gis-layer',
        type: 'fill',
        source: 'some-gis-layer',
        layout: {},
        paint: {
          'fill-color': '#888888',
          'fill-opacity': 0.4,
        },
      });
    });

    map.on('error', (e) => {
      console.error('An error occurred with the Mapbox map:', e);
    });

    return () => map.remove();
  }, []);

  return <div ref={mapContainerRef} className="h-full w-full" style={{ height: '100vh', width: '100vw' }} />;
};

export default MapboxMap;
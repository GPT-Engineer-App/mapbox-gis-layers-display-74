import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

const MapboxMap = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9,
    });

    // Add GIS layers here
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

    return () => map.remove();
  }, []);

  return <div ref={mapContainerRef} className="h-full w-full" />;
};

export default MapboxMap;
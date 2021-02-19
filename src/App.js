import './App.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

const createClusterCustomIcon = (cluster) => {
  console.log(cluster.getAllChildMarkers())
  return L.divIcon({
    html: `<span>${cluster.getChildCount()}</span>`,
    className: 'marker-cluster-custom',
    iconSize: L.point(40, 40, true)
  })
}

function App() {
  return (
    <MapContainer
      className="markercluster-map"
      center={[51.0, 19.0]}
      zoom={4}
      maxZoom={10}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <MarkerClusterGroup iconCreateFunction={createClusterCustomIcon}>
        <Marker position={[49.8397, 24.0297]} alt={'high'}/>
        <Marker position={[52.2297, 21.0122]} alt={'low'}/>
        <Marker position={[51.5074, -0.0901]} />
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default App;

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from 'react-leaflet-cluster'

function Map({ features }) {
    return (
        <MapContainer
            center={[0, 0]}
            zoom={1.5}
            scrollWheelZoom={true}
            style={{ height: "100vh" }}
            zoomSnap={0.5}
            minZoom={1.5}            
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup
                chunkedLoading
            >
                {features?.map((feature, index) => (
                    <Marker key={index} position={[feature?.latitude, feature?.longitude]}>
                        <Popup>
                            <h3>{feature?.title}</h3>
                            <p><strong>Magnitude:</strong> {feature?.magnitude}</p>
                            <p><strong>Place:</strong> {feature?.place}</p>
                            <a href={feature?.external_url} target="_blank" rel="noopener noreferrer">See more</a>
                        </Popup>
                    </Marker>
                ))}
            </MarkerClusterGroup>
        </MapContainer>
    );
}

export default Map;

import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from 'react-leaflet-cluster'

function Map({ features }) {
    return (
        <MapContainer
            center={[0, 0]}
            zoom={1.5}
            scrollWheelZoom={true}
            zoomSnap={0.5}
            minZoom={1.5}
            maxBounds={[[-90, -180], [90, 180]]}
        >
            <LayersControl position="topright">
                <LayersControl.BaseLayer name="OpenStreetMap" checked>
                    <TileLayer
                        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="Esri Satellite">
                    <TileLayer
                        // attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    />
                </LayersControl.BaseLayer>
            </LayersControl>
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

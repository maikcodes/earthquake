import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from 'react-leaflet-cluster'
import { markerIcon } from './Icons';

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
                <LayersControl.BaseLayer name="Esri Satellite" checked>
                    <TileLayer
                        // attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="OpenStreetMap">
                    <TileLayer
                        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>
            </LayersControl>
            <MarkerClusterGroup
                chunkedLoading
            >
                {features?.map((feature, index) => (
                    <Marker key={index} position={[feature?.latitude, feature?.longitude]} icon={markerIcon}>
                        <Popup>
                            <h3 className='font-bold'>{feature?.place}</h3>
                            <p className="text-gray-500">{feature?.title}</p>
                            <p><span className='font-bold'>magnitude: </span>{feature?.magnitude} ({feature?.mag_type})</p>
                            <p><span className='font-bold'>longitude: </span>{feature?.longitude}</p>
                            <p><span className='font-bold'>latitude: </span>{feature?.latitude}</p>

                            <a href={feature?.external_url} target="_blank" rel="noopener noreferrer">See more</a>
                        </Popup>
                    </Marker>
                ))}
            </MarkerClusterGroup>
        </MapContainer>
    );
}

export default Map;

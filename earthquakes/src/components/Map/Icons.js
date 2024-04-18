import L from 'leaflet';

export const markerIcon = L.icon({
    iconUrl: '/marker-icon-2x.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: '/marker-shadow.png',
    shadowSize: [41, 41],
    shadowAnchor: [12, 41],
});
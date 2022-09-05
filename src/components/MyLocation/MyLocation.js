import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import './MyLocation.css';

function MyLocation() {
    return (
        <MapContainer center={[25.4362, 89.3132]} zoom={20} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[25.4362, 89.3132]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default React.memo(MyLocation)
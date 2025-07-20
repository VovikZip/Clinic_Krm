import { LocationData } from '@/Components/Shared/Consts';
import SectionWrapper from '../SectionWrapper';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState, useEffect } from 'react';

const Location = () => {
  const customIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  const mapCenter = LocationData.locations[0].coordinates as [number, number];
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  const handleMapClick = () => {
    setIsOverlayVisible(false);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const mapContainer = document.querySelector('#location .leaflet-container');
    if (mapContainer && !mapContainer.contains(event.target as Node)) {
      setIsOverlayVisible(true);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <SectionWrapper id="місцезнаходження">
      <h3 className="text-3xl font-bold text-center mb-10 md:mb-20">
        {LocationData.heading}
      </h3>
      <div className="w-full h-[400px] relative">
        <MapContainer center={mapCenter} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={mapCenter} icon={customIcon}>
            <Popup>
              {LocationData.locations[0].address} <br /> Телефон: {LocationData.locations[0].phone}
            </Popup>
          </Marker>
        </MapContainer>
        {isOverlayVisible && (
          <div
            className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-50 z-10"
            onClick={handleMapClick}
          />
        )}
      </div>
    </SectionWrapper>
  );
};

export default Location;



import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useDashboardContext } from "../../lib/DashboardContext";
import "./styles.css";
import { format } from "date-fns";

const LJUBLJANA = [46.0569, 14.5058];
const DATE_FORMAT = "d.M.yyyy 'at' hh:mm";

const Map = () => {
  const [startingLocation, setLocation] = useState(LJUBLJANA);
  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    if (params["long"] !== undefined && params["lat"] !== undefined) {
      setLocation([parseFloat(params["long"]), parseFloat(params["lat"])]);
    }
  }, []);

  const { events } = useDashboardContext();
  return (
    <MapContainer center={startingLocation} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {events &&
        events.map((event) => (
          <Marker key={event.id} position={[event.lat, event.long]}>
            <Popup>
              Reported at {format(new Date(event.created_at), DATE_FORMAT)}
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};

export default Map;

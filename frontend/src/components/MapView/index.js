import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { MapViewContainer } from "./styledComponents";
import Header from "../Header";
import "leaflet/dist/leaflet.css";
import "./index.css";

const MapView = () => {
  const [locationData, setLocationData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchMapLocation = async () => {
      const jwtToken = Cookies.get("jwtToken");
      const apiUrl = "http://localhost:5000/api/map/";
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };
      const response = await fetch(apiUrl, options);
      if (response.ok === true) {
        const data = await response.json();
        const location = data.location.find((location) => location.id === id);
        if (location) {
          setLocationData(location);
        }
      } else {
        alert("User not logged in");
      }
    };
    fetchMapLocation();
  }, [id]);
  const { latitude, longitude, zoom } = locationData;
  const center = [latitude, longitude];
  const indiaBounds = [
    [6.5, 68.0],
    [37.5, 97.5], 
  ];
  
  return (
    <>
      <Header />
      <MapViewContainer>
        {latitude && longitude && zoom && (
          <MapContainer
            center={center}
            zoom={zoom}
            scrollWheelZoom={false}
            bounds={indiaBounds}
            maxBounds={indiaBounds}
            maxBoundsViscosity={1.0} 
            style={{ height: "648px", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={center}>
              <Popup>{id}</Popup>
            </Marker>
          </MapContainer>
        )}
      </MapViewContainer>
    </>
  );
};
export default MapView;

import React, { useState } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const Map = () => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 23.0522, // Set the initial latitude
    lng: 72.5497, // Set the initial longitude
  };

  const [markerPosition, setMarkerPosition] = useState(center);
  const [address, setAddress] = useState("");

  // Function to handle marker drag end event
  const onMarkerDragEnd = (event) => {
    const newLat = event.latLng.lat();
    const newLng = event.latLng.lng();
    setMarkerPosition({ lat: newLat, lng: newLng });

    // Perform reverse geocoding to get the address
    const apiKey = "";
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${newLat},${newLng}&key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "OK" && data.results.length > 0) {
          const formattedAddress = data.results[0].formatted_address;
          setAddress(formattedAddress);
        } else {
          setAddress("Address not found");
        }
      })
      .catch((error) => {
        setAddress("Error fetching address");
      });

    console.log(address);
  };

  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Add markers or other map components here */}
        <MarkerF
          position={markerPosition}
          draggable={true}
          icon={{
            url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
          }}
          onDragEnd={onMarkerDragEnd}
        />
      </GoogleMap>

      <div>Marker's Address: {address}</div>
    </LoadScript>
  );
};

export default Map;

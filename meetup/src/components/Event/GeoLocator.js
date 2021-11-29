import { useEffect, useState } from "react";
import AddEvent from "./AddEvent";
const GeoLocator = (props) => {
  const [location, setLocation] = useState({
    lat: 51.501364,
    lng: -0.14189,
  });
  const success = (position) => {
    const coordinates = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setLocation(coordinates);
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(success);
          }
        });
    }
  }, []);
  return (
    <div>
      <div className="container" style={{ maxWidth: "500px" }}>
        <AddEvent location={location} />
      </div>
    </div>
  );
};
export default GeoLocator;

import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { useState, useRef, useCallback } from "react";
import classes from "./GoogleMap.module.css";
const GoogleMap = (props) => {
  const [listing, setListing] = useState({
    latLng: { lat: 51.501364, lng: -0.14189 },
  });
  const refMap = useRef();
  const handleBoundsChanged = () => {
    if (refMap.current) {
      const mapCenter = {
        lat: refMap.current.map.center.lat(),
        lng: refMap.current.map.center.lng(),
      };
      setListing({ ...listing, latLng: mapCenter });
    }
  };
  return (
    <div>
      <Map
        className={classes["map-container"]}
        google={props.google}
        zoom={14}
        initialCenter={listing.latLng}
        ref={refMap}
        style={{ width: "400px", height: "300px" }}
        onBoundsChanged={useCallback(handleBoundsChanged, [
          handleBoundsChanged,
        ])}
      >
        <Marker position={listing.latLng} />
      </Map>
    </div>
  );
};
export default GoogleApiWrapper({
  apiKey: "",
})(GoogleMap);

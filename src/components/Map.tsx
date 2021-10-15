import { CSSProperties, PropsWithRef } from "react";
import GoogleMapReact, { Coords } from "google-map-react";
import Location from "../interfaces/Location";

interface MapProps {
  center?: Coords;
  zoom?: number;
  className?: string;
  style?: CSSProperties;
}

function Map(props: PropsWithRef<MapProps>) {
  const defaultCenter: Location = {
    lat: 59.95,
    lng: 30.33,
  };
  return (
    <div style={{ height: "100%", width: "100%" }} {...props}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_MAPS_KEY!,
        }}
        defaultCenter={props.center ?? defaultCenter}
        defaultZoom={props.zoom ?? 11}
      ></GoogleMapReact>
    </div>
  );
}

export default Map;

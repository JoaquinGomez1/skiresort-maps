import { CSSProperties, PropsWithChildren } from "react";
import GoogleMapReact, { Coords } from "google-map-react";
import Location from "../interfaces/Location";

interface MapProps {
  center?: Coords;
  zoom?: number;
  className?: string;
  style?: CSSProperties;
}

function Map(props: PropsWithChildren<MapProps>) {
  const defaultCenter: Location = {
    lat: -31.5466105642452,
    lng: -64.33647312816072,
  };

  return (
    <div style={{ height: "100%", width: "100%" }} {...props}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_MAPS_KEY!,
        }}
        defaultCenter={props.center ?? defaultCenter}
        defaultZoom={props.zoom ?? 11}
      >
        {props.children}
      </GoogleMapReact>
    </div>
  );
}

export default Map;

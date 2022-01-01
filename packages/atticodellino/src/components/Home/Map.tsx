import GoogleMapReact from "google-map-react";
import { FaMapMarker } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

import { useGlobal } from "../Layout";

export const Map: React.FC<{ title: string }> = ({ title }) => {
  const { latitude, longitude } = useGlobal();

  const [ref, inView] = useInView({ triggerOnce: true });
  const { lat, lng } = {
    lat: parseFloat(latitude ?? ""),
    lng: parseFloat(longitude ?? ""),
  };
  return (
    // Important! Always set the container height explicitly
    <div ref={ref} style={{ height: "100vh", width: "100%" }}>
      {inView && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_MAP_KEY ?? "" }}
          defaultCenter={[lat, lng] as any}
          defaultZoom={16}
        >
          <div {...{ lat, lng }}>
            <FaMapMarker /> <p>{title}</p>
          </div>
        </GoogleMapReact>
      )}
    </div>
  );
};

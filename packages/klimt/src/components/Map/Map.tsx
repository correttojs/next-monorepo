import GoogleMapReact from "google-map-react";
import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { useLazyMount } from "../../hooks/useLazy";

const NodeMarker: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div>
      <FaMapMarker /> <p>{title}</p>
    </div>
  );
};

export const Map: React.FC<{
  title: string;
  lat: number;
  lng: number;
}> = ({ title, lat, lng }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, inView] = useLazyMount({ triggerOnce: true });

  return (
    // Important! Always set the container height explicitly
    <div ref={ref} className="py-10 h-map main">
      {inView && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_MAP_KEY ?? "" }}
          defaultCenter={[lat, lng] as any}
          defaultZoom={16}
          onGoogleApiLoaded={({ map, maps }) => setIsLoaded(true)}
        >
          {isLoaded && <NodeMarker {...{ lat, lng }} title={title} />}
        </GoogleMapReact>
      )}
    </div>
  );
};

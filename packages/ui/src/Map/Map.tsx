import GoogleMapReact from "google-map-react";
import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

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
  className: string;
}> = ({ title, lat, lng, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    // Important! Always set the container height explicitly
    <div ref={ref} className={className} data-testid="google-map">
      {inView && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_MAP_KEY ?? "" }}
          defaultCenter={[lat, lng] as any}
          defaultZoom={16}
          onGoogleApiLoaded={() => setIsLoaded(true)}
        >
          {isLoaded && <NodeMarker {...{ lat, lng }} title={title} />}
        </GoogleMapReact>
      )}
    </div>
  );
};

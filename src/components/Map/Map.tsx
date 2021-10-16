import GoogleMapReact from "google-map-react";
import { FaMapMarker } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export const Map: React.FC<{ title: string }> = ({ title }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const { lat, lng } = {
    lat: parseFloat("45.7386085" ?? ""),
    lng: parseFloat("10.7926225" ?? ""),
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

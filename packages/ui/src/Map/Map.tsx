"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { Wrapper } from "@googlemaps/react-wrapper";

type MapProps = {
  title: string;
  lat: number;
  lng: number;
};

const Marker: React.FC<google.maps.MarkerOptions & MapProps> = (options) => {
  const [marker, setMarker] = React.useState<google.maps.Marker>();
  const svgMarker = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "black",
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    position: options.position,
  };
  React.useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker) {
      marker.setOptions({
        ...options,
        label: {
          text: options.title,
          fontFamily: "Roboto",
          fontSize: "14px",
          fontWeight: "bold",
        },
        animation: google.maps.Animation.DROP,
        icon: svgMarker,
      });
    }
  }, [marker, options]);

  return null;
};

const Map1: React.FC<React.PropsWithChildren<MapProps>> = ({
  lat,
  lng,
  title,
}) => {
  const ref = React.useRef(null);
  const [map, setMap] = React.useState<google.maps.Map | null>(null);
  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new google.maps.Map(ref.current, {
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          center: {
            lat: lat ?? 0,
            lng: lng ?? 0,
          },
          zoom: 16,
        })
      );
    }
  }, [ref, map, lat, lng]);

  return (
    <>
      <div ref={ref} style={{ height: "100%", width: "100%" }} />
      <Marker
        title={title}
        position={{ lat, lng }}
        icon={"Lodging"}
        map={map}
        lat={lat}
        lng={lng}
      />
    </>
  );
};

export const Map: React.FC<
  React.PropsWithChildren<
    MapProps & {
      className: string;
    }
  >
> = ({ title, lat, lng, className }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <div ref={ref} className={className}>
      {inView ? (
        <Wrapper apiKey={process.env.NEXT_PUBLIC_MAP_KEY ?? ""}>
          <Map1 title={title} lat={lat} lng={lng} />
        </Wrapper>
      ) : null}
    </div>
  );
};

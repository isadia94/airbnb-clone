import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { LocationMarkerIcon } from "@heroicons/react/solid";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  console.log(selectedLocation);

  // Transform the search results object into the { latitude: 52.516272, longitude: 13.377722 } object

  const coords = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coords);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/yobreezy/ckw3g4u0u61lz14mpqt1y4dma"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer animate-bounce"
            >
              <LocationMarkerIcon className="h-7 text-red-500" />
            </p>
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;

import { MapPin, Navigation, Droplets } from "lucide-react";

const Map = () => {
  return (
    <div className="map-page">
      <div className="page-header">
        <div>
          <h1>Water Collection Map</h1>
          <p>Location of the latest water quality sample</p>
        </div>
      </div>

      <div className="map-container">
        <div className="map-placeholder">
          <MapPin size={48} />

          <h2>Water Sample Location</h2>
          <p>Interactive map will be displayed here</p>

          <div className="location-info">
            <div>
              <Navigation size={18} />
              <span>
                Latitude: <strong>18.5204</strong>
              </span>
            </div>

            <div>
              <Navigation size={18} />
              <span>
                Longitude: <strong>73.8567</strong>
              </span>
            </div>

            <div>
              <Droplets size={18} />
              <span>
                Sample: <strong>Latest Reading</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;

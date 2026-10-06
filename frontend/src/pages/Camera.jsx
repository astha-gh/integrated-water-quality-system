import { Camera as CameraIcon, Circle, Image, Clock } from "lucide-react";

const Camera = () => {
  return (
    <div className="camera-page">
      <div className="page-header">
        <div>
          <h1>Camera Monitoring</h1>
          <p>Monitor and review water sample images</p>
        </div>

        <div className="camera-status">
          <Circle size={10} fill="currentColor" />
          Camera Offline
        </div>
      </div>

      <div className="camera-grid">
        {/* Live Camera */}
        <div className="camera-card live-camera">
          <div className="camera-card-header">
            <div>
              <h2>Live Camera</h2>
              <p>Current camera feed</p>
            </div>

            <CameraIcon size={22} />
          </div>

          <div className="camera-preview">
            <CameraIcon size={52} />
            <h3>No Camera Feed</h3>
            <p>Camera feed will appear here</p>
          </div>
        </div>

        {/* Latest Image */}
        <div className="camera-card">
          <div className="camera-card-header">
            <div>
              <h2>Latest Sample</h2>
              <p>Most recently captured image</p>
            </div>

            <Image size={22} />
          </div>

          <div className="sample-preview">
            <Image size={42} />
            <p>No sample image available</p>
          </div>

          <div className="sample-info">
            <div>
              <Clock size={16} />
              <span>Last captured: —</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Camera;

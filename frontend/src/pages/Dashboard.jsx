import SensorCard from "../components/dashboard/SensorCard";
import WaterQualityStatus from "../components/dashboard/WaterQualityStatus";
import { sensorData } from "../data/mockSensorData";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="page-header">
        <div>
          <h1>Water Quality Dashboard</h1>
          <p>Real-time monitoring of water quality parameters</p>
        </div>

        <div className="connection-status">● Online</div>
      </div>

      <WaterQualityStatus />

      <div className="sensor-grid">
        {sensorData.map((sensor) => (
          <SensorCard
            key={sensor.name}
            name={sensor.name}
            value={sensor.value}
            unit={sensor.unit}
            status={sensor.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

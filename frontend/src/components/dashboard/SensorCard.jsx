const SensorCard = ({ name, value, unit, status }) => {
  return (
    <div className="sensor-card">
      <div className="sensor-card-header">
        <span>{name}</span>
        <span className={`status ${status.toLowerCase()}`}>{status}</span>
      </div>

      <div className="sensor-value">
        {value}
        {unit && <span>{unit}</span>}
      </div>
    </div>
  );
};

export default SensorCard;

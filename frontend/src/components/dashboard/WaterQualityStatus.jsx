const WaterQualityStatus = () => {
  return (
    <div className="water-quality">
      <div>
        <p>Overall Water Quality</p>
        <h1>Acceptable</h1>
        <span>Based on current sensor readings</span>
      </div>

      <div className="quality-score">94%</div>
    </div>
  );
};

export default WaterQualityStatus;

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const historyData = [
  {
    time: "10:00",
    ph: 7.1,
    turbidity: 3.2,
    tds: 275,
    temperature: 24.8,
    mq136: 0.41,
  },
  {
    time: "11:00",
    ph: 7.2,
    turbidity: 3.5,
    tds: 278,
    temperature: 25.1,
    mq136: 0.44,
  },
  {
    time: "12:00",
    ph: 7.3,
    turbidity: 3.8,
    tds: 281,
    temperature: 25.6,
    mq136: 0.46,
  },
  {
    time: "13:00",
    ph: 7.2,
    turbidity: 3.4,
    tds: 279,
    temperature: 25.4,
    mq136: 0.43,
  },
  {
    time: "14:00",
    ph: 7.1,
    turbidity: 3.1,
    tds: 276,
    temperature: 25.0,
    mq136: 0.42,
  },
  {
    time: "15:00",
    ph: 7.2,
    turbidity: 3.3,
    tds: 280,
    temperature: 25.3,
    mq136: 0.44,
  },
];

const sensors = [
  { key: "ph", name: "pH", unit: "" },
  { key: "turbidity", name: "Turbidity", unit: "NTU" },
  { key: "tds", name: "TDS / EC", unit: "ppm" },
  { key: "temperature", name: "Temperature", unit: "°C" },
  { key: "mq136", name: "MQ-136 Gas", unit: "V" },
];

const History = () => {
  return (
    <div className="history-page">
      <div className="page-header">
        <div>
          <h1>Water Quality History</h1>
          <p>Historical sensor readings and water quality trends</p>
        </div>
      </div>

      {/* Combined graph */}
      <div className="history-card combined-chart">
        <div className="history-card-header">
          <div>
            <h2>All Sensor Readings</h2>
            <p>Combined historical sensor data</p>
          </div>
        </div>

        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={historyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Line
                type="monotone"
                dataKey="ph"
                name="pH"
                stroke="#159b78"
                strokeWidth={2}
              />

              <Line
                type="monotone"
                dataKey="turbidity"
                name="Turbidity"
                stroke="#d7a83e"
                strokeWidth={2}
              />

              <Line
                type="monotone"
                dataKey="tds"
                name="TDS"
                stroke="#4c9bd8"
                strokeWidth={2}
              />

              <Line
                type="monotone"
                dataKey="temperature"
                name="Temperature"
                stroke="#d46b6b"
                strokeWidth={2}
              />

              <Line
                type="monotone"
                dataKey="mq136"
                name="MQ-136"
                stroke="#a678c4"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Individual graphs */}
      <div className="individual-charts">
        {sensors.map((sensor) => (
          <div className="history-card" key={sensor.key}>
            <div className="history-card-header">
              <div>
                <h2>{sensor.name}</h2>
                <p>{sensor.unit || "Sensor value"} over time</p>
              </div>
            </div>

            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={historyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey={sensor.key}
                    stroke="#159b78"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;

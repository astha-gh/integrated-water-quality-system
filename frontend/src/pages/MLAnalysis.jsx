import { Brain, AlertTriangle, CheckCircle, Lightbulb } from "lucide-react";

const MLAnalysis = () => {
  const analysis = {
    status: "Acceptable",
    confidence: 94,
    issue: "No significant pollution detected",
    solution: "Water quality parameters are within acceptable range.",
  };

  return (
    <div className="ml-page">
      <div className="page-header">
        <div>
          <h1>ML Analysis</h1>
          <p>AI-based water quality and pollution analysis</p>
        </div>
      </div>

      <div className="ml-grid">
        {/* Prediction */}
        <div className="ml-card prediction-card">
          <div className="ml-card-header">
            <div className="ml-icon">
              <Brain size={22} />
            </div>
            <span>Prediction Result</span>
          </div>

          <div className="prediction-result">
            <CheckCircle size={42} />
            <h2>{analysis.status}</h2>
            <p>Water quality prediction</p>
          </div>

          <div className="confidence">
            <div className="confidence-header">
              <span>Model Confidence</span>
              <strong>{analysis.confidence}%</strong>
            </div>

            <div className="confidence-bar">
              <div
                className="confidence-fill"
                style={{ width: `${analysis.confidence}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Pollution status */}
        <div className="ml-card">
          <div className="ml-card-header">
            <div className="ml-icon warning-icon">
              <AlertTriangle size={22} />
            </div>
            <span>Pollution Status</span>
          </div>

          <div className="analysis-content">
            <h2>{analysis.issue}</h2>
            <p>The current sensor readings were analyzed by the ML model.</p>
          </div>
        </div>

        {/* Recommended solution */}
        <div className="ml-card solution-card">
          <div className="ml-card-header">
            <div className="ml-icon">
              <Lightbulb size={22} />
            </div>
            <span>Recommended Action</span>
          </div>

          <div className="analysis-content">
            <h2>Recommended Solution</h2>
            <p>{analysis.solution}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MLAnalysis;

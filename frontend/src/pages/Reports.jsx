import {
  FileText,
  Download,
  Droplets,
  Brain,
  MapPin,
  Calendar,
} from "lucide-react";

const Reports = () => {
  return (
    <div className="reports-page">
      <div className="page-header">
        <div>
          <h1>Water Quality Reports</h1>
          <p>Generate and download water quality analysis reports</p>
        </div>
      </div>

      <div className="report-layout">
        {/* Report preview */}
        <div className="report-card report-preview">
          <div className="report-header">
            <div className="report-logo">
              <Droplets size={26} />
            </div>

            <div>
              <h2>CWPRS</h2>
              <p>Integrated Water Quality & Pollution Detection System</p>
            </div>
          </div>

          <div className="report-title">
            <FileText size={22} />
            <div>
              <h2>Water Quality Analysis Report</h2>
              <p>Latest water sample analysis</p>
            </div>
          </div>

          <div className="report-details">
            <div>
              <Calendar size={18} />
              <span>
                Date: <strong>06 October 2026</strong>
              </span>
            </div>

            <div>
              <MapPin size={18} />
              <span>
                Location: <strong>Sample Location</strong>
              </span>
            </div>
          </div>

          <div className="report-section">
            <h3>Water Quality Result</h3>

            <div className="report-result">
              <span>Overall Status</span>
              <strong>Acceptable</strong>
            </div>
          </div>

          <div className="report-section">
            <h3>ML Analysis</h3>

            <div className="report-result">
              <span>Prediction</span>
              <strong>94% Confidence</strong>
            </div>

            <p className="report-description">
              No significant pollution detected in the latest analysis.
            </p>
          </div>

          <div className="report-section">
            <h3>Sensor Summary</h3>

            <div className="sensor-summary">
              <div>
                <span>pH</span>
                <strong>7.2</strong>
              </div>

              <div>
                <span>Turbidity</span>
                <strong>3.5 NTU</strong>
              </div>

              <div>
                <span>TDS / EC</span>
                <strong>278 ppm</strong>
              </div>

              <div>
                <span>Temperature</span>
                <strong>25.1 °C</strong>
              </div>

              <div>
                <span>MQ-136 Gas</span>
                <strong>0.44 V</strong>
              </div>
            </div>
          </div>

          <div className="report-section">
            <h3>Recommended Action</h3>
            <p className="report-description">
              Water quality parameters are currently within the acceptable
              range.
            </p>
          </div>
        </div>

        {/* Generate report */}
        <div className="report-card report-actions">
          <div className="action-icon">
            <FileText size={28} />
          </div>

          <h2>Generate Report</h2>

          <p>
            Generate a PDF report containing the latest sensor readings,
            location, ML analysis, and recommended actions.
          </p>

          <button className="generate-report-btn" type="button">
            <Download size={18} />
            Generate PDF Report
          </button>

          <div className="report-note">
            <Brain size={17} />
            <span>
              Report data will be generated from the latest system analysis.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;

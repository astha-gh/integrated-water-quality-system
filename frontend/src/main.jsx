import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { AuthProvider } from "./context/AuthContext";

import "./styles/global.css";
import "./styles/layout.css";
import "./styles/sidebar.css";
import "./styles/navbar.css";
import "./styles/auth.css";
import "./styles/dashboard.css";
import "./styles/map.css";
import "./styles/ml.css";
import "./styles/camera.css";
import "./styles/history.css";
import "./styles/reports.css";
import "./styles/profile.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

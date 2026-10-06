import { useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const pageNames = {
  "/dashboard": "Dashboard",
  "/map": "Map",
  "/ml": "ML Analysis",
  "/camera": "Camera Monitoring",
  "/history": "History",
  "/reports": "Reports",
  "/profile": "Profile",
  "/settings": "Settings",
};

const Navbar = () => {
  const location = useLocation();
  const { user } = useAuth();

  const pageTitle = pageNames[location.pathname] || "Dashboard";

  return (
    <header className="navbar">
      <div>
        <h2>{pageTitle}</h2>
        <p>Integrated Water Quality & Pollution Detection System</p>
      </div>

      <div className="navbar-right">
        <span className="system-status">
          <span className="status-dot"></span>
          System Online
        </span>

        <div className="navbar-user">
          <div className="user-avatar">
            {user?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>

          <span>{user?.name || "User"}</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

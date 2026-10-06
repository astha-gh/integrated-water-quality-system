import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  Menu,
  X,
  LayoutDashboard,
  MapPin,
  Brain,
  Camera,
  History,
  FileText,
  User,
  Settings,
} from "lucide-react";

function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const mainItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Map",
      path: "/map",
      icon: MapPin,
    },
    {
      name: "ML Analysis",
      path: "/ml",
      icon: Brain,
    },
    {
      name: "Camera",
      path: "/camera",
      icon: Camera,
    },
    {
      name: "History",
      path: "/history",
      icon: History,
    },
  ];

  const systemItems = [
    {
      name: "Reports",
      path: "/reports",
      icon: FileText,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  const accountItems = [
    {
      name: "Profile",
      path: "/profile",
      icon: User,
    },
  ];

  const renderItems = (items) => {
    return items.map((item) => {
      const Icon = item.icon;

      return (
        <NavLink
          key={item.path}
          to={item.path}
          className="nav-item"
          title={collapsed ? item.name : ""}
        >
          <Icon size={20} />
          {!collapsed && <span>{item.name}</span>}
        </NavLink>
      );
    });
  };

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        {!collapsed && (
          <div className="brand">
            <div className="brand-logo">💧</div>
            <div>
              <h2>CWPRS</h2>
              <p>Water Quality System</p>
            </div>
          </div>
        )}

        <button
          className="menu-button"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <Menu size={24} /> : <X size={24} />}
        </button>
      </div>

      <nav className="sidebar-nav">
        {!collapsed && <p className="nav-section-title">MAIN</p>}
        {renderItems(mainItems)}

        {!collapsed && <p className="nav-section-title">SYSTEM</p>}
        {renderItems(systemItems)}

        {!collapsed && <p className="nav-section-title">ACCOUNT</p>}
        {renderItems(accountItems)}
      </nav>

      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;

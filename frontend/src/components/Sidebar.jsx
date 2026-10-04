import { useState } from "react";
import { NavLink } from "react-router-dom";
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
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
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
    {
      name: "Reports",
      path: "/reports",
      icon: FileText,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: User,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

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
        {menuItems.map((item) => {
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
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;

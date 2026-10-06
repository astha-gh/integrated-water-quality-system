import { User, Mail, Shield, Calendar } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="profile-page">
      <div className="page-header">
        <div>
          <h1>My Profile</h1>
          <p>View your account information</p>
        </div>
      </div>

      <div className="profile-layout">
        {/* Profile card */}
        <div className="profile-card profile-main">
          <div className="profile-avatar">
            {user?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>

          <h2>{user?.name || "CWPRS User"}</h2>
          <p>{user?.email || "user@cwprs.com"}</p>

          <span className="profile-role">
            <Shield size={14} />
            System User
          </span>
        </div>

        {/* Account information */}
        <div className="profile-card">
          <div className="profile-card-header">
            <User size={20} />
            <h2>Account Information</h2>
          </div>

          <div className="profile-info">
            <div className="profile-info-item">
              <div className="profile-info-icon">
                <User size={18} />
              </div>

              <div>
                <span>Full Name</span>
                <strong>{user?.name || "CWPRS User"}</strong>
              </div>
            </div>

            <div className="profile-info-item">
              <div className="profile-info-icon">
                <Mail size={18} />
              </div>

              <div>
                <span>Email Address</span>
                <strong>{user?.email || "user@cwprs.com"}</strong>
              </div>
            </div>

            <div className="profile-info-item">
              <div className="profile-info-icon">
                <Shield size={18} />
              </div>

              <div>
                <span>Account Type</span>
                <strong>System User</strong>
              </div>
            </div>

            <div className="profile-info-item">
              <div className="profile-info-icon">
                <Calendar size={18} />
              </div>

              <div>
                <span>Account Status</span>
                <strong className="active-account">Active</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

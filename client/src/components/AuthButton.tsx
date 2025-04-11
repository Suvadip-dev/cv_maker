import React from "react";
import { useMsal } from "@azure/msal-react";

const AuthButton = () => {
  const { instance, accounts } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect();
  };

  const handleLogout = () => {
    instance.logoutRedirect();
  };

  if (accounts.length > 0) {
    return (
      <div className="auth-box">
        <p>Welcome, {accounts[0].username}</p>
        <button className="btn logout" onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return <button className="btn login" onClick={handleLogin}>Login with Microsoft</button>;
};

export default AuthButton;
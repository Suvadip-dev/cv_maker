import React from "react";
import AuthButton from "../components/AuthButton";
import "../styles/AuthPage.css";

const AuthPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Welcome to CV Maker</h1>
        <p>Sign in to create your professional CV with AI</p>
        <AuthButton />
      </div>
    </div>
  );
};

export default AuthPage;
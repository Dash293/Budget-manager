import { useNavigate } from "react-router-dom";
import React from "react";
import Button from "./style";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    document.cookie = "token=; Max-Age=0; path=/;"; // remove cookie
    // redirect to login page
    navigate("/login");
  };

  return <Button onClick={handleLogout}>Déconnexion</Button>;
}

export default LogoutButton;

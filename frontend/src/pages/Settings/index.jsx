import React from "react";
import SSettings from "./style";
import LogoutButton from "../../components/Buttons/LogoutButton";

function Settings() {
  return (
    <SSettings>
      <h1 className="title">Paramètres</h1>
      <LogoutButton />
    </SSettings>
  );
}

export default Settings;

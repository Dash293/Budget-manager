import { Link } from "react-router-dom";
import SSettingsButton from "./style";
import SettingsIcon from "../../../assets/icons/cog.png";

export default function SettingsButton() {
  return (
    <SSettingsButton>
      <Link to="/settings">
        <img className="IconSettings" src={SettingsIcon} alt="" />
      </Link>
    </SSettingsButton>
  );
}

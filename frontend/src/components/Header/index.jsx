import { Link } from "react-router-dom";
import SettingsButton from "@components/Buttons/SettingsButton";
import AddExpenseButton from "@components/Buttons/AddExpenseButton";
import SHeader from "./style";
import BmLogo from "../../assets/logos/logo.png";

export default function Header() {
  return (
    <SHeader>
      <SettingsButton />
      <Link to="/">
        <img className="HeaderLogo" src={BmLogo} alt="logo BM" />
      </Link>
      <AddExpenseButton />
    </SHeader>
  );
}

import { Link } from "react-router-dom";
import SettingsButton from "@components/Buttons/SettingsButton";
import AddExpenseButton from "@components/Buttons/AddExpenseButton";
import SHeader from "./style";

export default function Header() {
  return (
    <SHeader>
      <SettingsButton />
      <Link to="/">
        <h1>Activité</h1>
      </Link>
      <AddExpenseButton />
    </SHeader>
  );
}

import { Link } from "react-router-dom";
import SettingsButton from "@components/Buttons/SettingsButton";
import AddTransactionButton from "@components/Buttons/AddTransactionButton";
import SHeader from "./style";

export default function Header() {
  return (
    <SHeader>
      <SettingsButton />
      <Link to="/">
        <h1>JADE</h1>
      </Link>
      <AddTransactionButton />
    </SHeader>
  );
}

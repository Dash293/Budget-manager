import { Link } from "react-router-dom";
import SHeader from "./style";
import BmLogo from "../../assets/logos/logo.png";

export default function Header() {
  return (
    <SHeader>
      <Link to="/">
        <img className="HeaderLogo" src={BmLogo} alt="logo BM" />
      </Link>
    </SHeader>
  );
}

import { Link } from "react-router-dom";
import SNavbar from "./style";
import ActivityIcon from "../../assets/icons/activity.png";
import DashboardIcon from "../../assets/icons/dashboard.png";
import CategoriesIcon from "../../assets/icons/folder.png";

export default function Navbar() {
  return (
    <SNavbar>
      <ul>
        <Link to="/">
          <li>
            <img className="iconActivity" src={ActivityIcon} alt="" />
            <p>Activité</p>
          </li>
        </Link>
        <Link to="/dashboard">
          <li>
            <img className="iconDashboard" src={DashboardIcon} alt="" />
            <p>Budget</p>
          </li>
        </Link>
        <Link to="/categories">
          <li>
            <img className="iconCategories" src={CategoriesIcon} alt="" />
            <p>Catégories</p>
          </li>
        </Link>
      </ul>
    </SNavbar>
  );
}

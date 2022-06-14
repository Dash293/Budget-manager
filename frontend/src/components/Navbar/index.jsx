import { Link } from "react-router-dom";
import SNavbar from "./style";
import ActivityIcon from "../../assets/icons/activity.png";
import DashboardIcon from "../../assets/icons/dashboard.png";
import CategoriesIcon from "../../assets/icons/folder.png";

export default function Navbar() {
  return (
    <SNavbar>
      <ul>
        <li>
          <Link to="/">
            <img className="iconActivity" src={ActivityIcon} alt="" />
          </Link>
          <p>Activité</p>
        </li>
        <li>
          <Link to="/dashboard">
            <img className="iconDashboard" src={DashboardIcon} alt="" />
          </Link>
          <p>Budget</p>
        </li>
        <li>
          <Link to="/categories">
            <img className="iconCategories" src={CategoriesIcon} alt="" />
          </Link>
          <p>Catégories</p>
        </li>
      </ul>
    </SNavbar>
  );
}

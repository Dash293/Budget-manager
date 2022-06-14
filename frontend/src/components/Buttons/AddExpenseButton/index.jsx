import { Link } from "react-router-dom";
import SAddExpenseButton from "./style";
import AddButton from "../../../assets/icons/add.png";

export default function AddExpenseButton() {
  return (
    <SAddExpenseButton>
      <Link to="/settings">
        <img className="IconSettings" src={AddButton} alt="" />
      </Link>
    </SAddExpenseButton>
  );
}

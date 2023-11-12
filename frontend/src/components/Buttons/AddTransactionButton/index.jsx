import { Link } from "react-router-dom";
import SAddTransactionButton from "./style";
import AddButton from "../../../assets/icons/add.png";

export default function AddTransactionButton() {
  return (
    <SAddTransactionButton>
      <Link to="/add-expense">
        <img src={AddButton} alt="" />
      </Link>
    </SAddTransactionButton>
  );
}

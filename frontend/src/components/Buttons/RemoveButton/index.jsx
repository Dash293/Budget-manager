import SRemoveButton from "./style";
import TrashLogo from "../../../assets/icons/trash.png";

export default function RemoveButton() {
  return (
    <SRemoveButton>
      <img src={TrashLogo} alt="logo de corbeille" />
    </SRemoveButton>
  );
}

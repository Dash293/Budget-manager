import propTypes from "prop-types";
import SActivityDetailsCard from "./style";

export default function ActivityDetailsCard({
  name,
  operator,
  amount,
  logo,
  date,
  note,
  trashLogo,
}) {
  return (
    <SActivityDetailsCard>
      <div className="activityCard">
        <img className="logo" src={logo} alt="logo de catégorie" />
        <div className="informations">
          <h1 className="name">{name}</h1>
          <h2 className="amount">
            {operator} {amount} €
          </h2>
          <p className="date">{date}</p>
          <p className="note">{note}</p>
          <img className="trashLogo" src={trashLogo} alt="logo de corbeille" />
        </div>
      </div>
    </SActivityDetailsCard>
  );
}

ActivityDetailsCard.propTypes = {
  name: propTypes.string.isRequired,
  logo: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  amount: propTypes.string.isRequired,
  operator: propTypes.string.isRequired,
  note: propTypes.string.isRequired,
  trashLogo: propTypes.string.isRequired,
};

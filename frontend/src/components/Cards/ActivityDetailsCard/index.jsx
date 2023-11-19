import propTypes from "prop-types";
import SActivityDetailsCard from "./style";

export default function ActivityDetailsCard({
  name,
  operator,
  amount,
  logo,
  date,
  note,
  onRemove,
}) {
  return (
    <SActivityDetailsCard>
      <div className="activityCard">
        <div className="activityCardSection1">
          <img className="logo" src={logo} alt="logo de catégorie" />
          <div className="informations">
            <h1 className="name">{name}</h1>
            <h2 className="amount">
              {operator} {amount} €
            </h2>
            <p className="date">{date}</p>
            <p className="note">{note}</p>
          </div>
        </div>
        <div className="activityCardSection2">
          <button type="button" className="remove" onClick={onRemove}>
            supprimer
          </button>
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
  onRemove: propTypes.func.isRequired,
};

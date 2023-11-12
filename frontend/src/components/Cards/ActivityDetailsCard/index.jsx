import propTypes from "prop-types";
import SActivityDetailsCard from "./style";
import RemoveButton from "../../Buttons/RemoveButton";

export default function ActivityDetailsCard({
  name,
  operator,
  amount,
  logo,
  date,
  note,
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
          <RemoveButton className="removeButton" />
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
};

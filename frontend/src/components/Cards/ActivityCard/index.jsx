import propTypes from "prop-types";
import SActivityCard from "./style";

export default function ActivityCard({ operator, amount, logo, date }) {
  return (
    <SActivityCard>
      <div className="activityCard">
        <img className="logo" src={logo} alt="logo de catégorie" />
        <div className="informations">
          <p className="date">{date}</p>
          <h2 className="amount">
            {operator} {amount} €
          </h2>
        </div>
      </div>
    </SActivityCard>
  );
}

ActivityCard.propTypes = {
  logo: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  amount: propTypes.string.isRequired,
  operator: propTypes.string.isRequired,
};

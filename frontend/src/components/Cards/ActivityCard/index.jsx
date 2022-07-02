import propTypes from "prop-types";
import logo from "@assets/icons/housing.png";
import SActivityCard from "./style";

export default function ActivityCard({ name, amount, date }) {
  return (
    <SActivityCard>
      <div className="activityCard">
        <img className="logo" src={logo} alt="logo de catégorie" />
        <div className="informations">
          <h1 className="name"> {name}</h1>
          <h2 className="amount"> {amount}</h2>
          <p className="date"> {date}</p>
        </div>
      </div>
    </SActivityCard>
  );
}

ActivityCard.propTypes = {
  name: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  amount: propTypes.number.isRequired,
};

import { useState } from "react";
import SCalendar from "./style";
import NextIcon from "../../assets/icons/next.svg";
import PreviousIcon from "../../assets/icons/previous.svg";

export default function Calendar() {
  const month = [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre",
  ];

  const [selectedMonth, setSelectedMonth] = useState(5);
  const [selectedYear, setSelectedYear] = useState(2022);

  const next = () => {
    if (selectedMonth === month.length - 1) {
      setSelectedYear(selectedYear + 1);
      setSelectedMonth(0);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };

  const previous = () => {
    if (selectedMonth === 0) {
      setSelectedYear(selectedYear - 1);
      setSelectedMonth(11);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  return (
    <SCalendar>
      <div className="calendar">
        <button type="button" onClick={previous}>
          <img className="previousIcon" src={PreviousIcon} alt="précédent" />
        </button>
        <div className="monthAndYear">
          {month[selectedMonth]} {selectedYear}
        </div>
        <button type="button" onClick={next}>
          <img className="nextIcon" src={NextIcon} alt="suivant" />
        </button>
      </div>
    </SCalendar>
  );
}

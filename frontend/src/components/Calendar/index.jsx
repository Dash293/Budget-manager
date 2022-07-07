import { useState } from "react";
import SCalendar from "./style";

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
      <button type="button" onClick={previous}>
        {"<"}
      </button>
      <div className="monthAndYear">
        {month[selectedMonth]} {selectedYear}
      </div>
      <button type="button" onClick={next}>
        {">"}
      </button>
    </SCalendar>
  );
}

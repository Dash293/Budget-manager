import { useState } from "react";

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

  const [selectedMonth, setSelectedMonth] = useState(6);
  const [selectedYear, setSelectedYear] = useState(2022);

  const handleOnClick = () => {
    if (selectedMonth === month.length - 1) {
      setSelectedYear(selectedYear + 1);
      setSelectedMonth(0);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };

  return (
    <button type="button" onClick={handleOnClick}>
      {month[selectedMonth]} {selectedYear}
    </button>
  );
}

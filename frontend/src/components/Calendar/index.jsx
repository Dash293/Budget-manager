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

  const year = [
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
  ];

  const [selectedMonth, setSelectedMonth] = useState(6);
  const [selectedYear, setSelectedYear] = useState(0);

  const handleMonthOnClick = () => {
    setSelectedMonth((currentMonth) => {
      if (currentMonth === month.length - 1) {
        return (
          0 &&
          setSelectedYear((currentYear) => {
            return currentYear + 1;
          })
        );
      }
      return currentMonth + 1;
    });
  };

  return (
    <button type="button" onClick={handleMonthOnClick}>
      {month[selectedMonth]} {year[selectedYear]}
    </button>
  );
}

import ActivityCard from "@components/Cards/ActivityCard";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";
import SHome from "./style";
import NextIcon from "../../assets/icons/next.svg";
import PreviousIcon from "../../assets/icons/previous.svg";

function Home() {
  const calendarDate = new Date();
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/activity"}`)
      .then(({ data }) => {
        setActivities(data);
      });
  }, []);
  const [selectedMonth, setSelectedMonth] = useState(
    calendarDate.getMonth() + 1
  );
  const [selectedYear, setSelectedYear] = useState(calendarDate.getFullYear());
  const getDate = () => {
    return `${String(selectedMonth).padStart(2, "0")}/${selectedYear}`;
  };
  const next = () => {
    if (selectedMonth === 12) {
      setSelectedYear(selectedYear + 1);
      setSelectedMonth(1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };
  const previous = () => {
    if (selectedMonth === 1) {
      setSelectedYear(selectedYear - 1);
      setSelectedMonth(12);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  function date(d) {
    return `${DateTime.fromISO(d).setLocale("fr").toFormat("dd/MM/yyyy")}`;
  }

  return (
    <SHome>
      <div className="calendar">
        <button type="button" onClick={previous}>
          <img className="previousIcon" src={PreviousIcon} alt="précédent" />
        </button>
        <div className="monthAndYear">{getDate()}</div>
        <button type="button" onClick={next}>
          <img className="nextIcon" src={NextIcon} alt="suivant" />
        </button>
      </div>
      {activities
        .filter((activity) => {
          return date(activity.date).includes(getDate());
        })
        .map((activity) => (
          <Link to={`/activity-detail/${activity.id}`}>
            <ActivityCard
              key={activity.name}
              date={`${date(activity.date)}`}
              operator={activity.type_id === 1 ? "-" : "+"}
              amount={activity.amount}
              logo={activity.logo}
            />
          </Link>
        ))}
    </SHome>
  );
}

export default Home;

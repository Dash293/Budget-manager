import ActivityCard from "@components/Cards/ActivityCard";
import Calendar from "@components/Calendar/";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";
import SHome from "./style";

function Home() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/activity"}`)
      .then(({ data }) => {
        setActivities(data);
      });
  }, []);

  function date(d) {
    return `${DateTime.fromISO(d).setLocale("fr").toFormat("dd/MM/yyyy")}`;
  }

  return (
    <SHome>
      <Calendar />
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          name={activity.name}
          date={`${date(activity.date)}`}
          amount={activity.amount}
          logo={activity.logo}
        />
      ))}
    </SHome>
  );
}

export default Home;

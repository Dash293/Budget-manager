import ActivityCard from "@components/Cards/ActivityCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
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
  return (
    <SHome>
      <p>Transactions</p>
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          name={activity.name}
          date={activity.date}
          amount={activity.amount}
          logo={activity.logo}
        />
      ))}
    </SHome>
  );
}

export default Home;

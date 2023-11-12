import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DateTime } from "luxon";
import ActivityDetailsCard from "../../components/Cards/ActivityDetailsCard";
import SActivityDetails from "./style";

function ActivityDetails() {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/activity/"}${id}`)
      .then(({ data }) => {
        setDetails(data);
      });
  }, []);

  function date(d) {
    return `${DateTime.fromISO(d).setLocale("fr").toFormat("dd/MM/yyyy")}`;
  }

  return (
    <SActivityDetails>
      <ActivityDetailsCard
        key={details.id}
        name={details.name}
        date={`${date(details.date)}`}
        operator={details.type_id === 1 ? "-" : "+"}
        amount={details.amount}
        logo={details.logo}
        trashLogo={details.logo}
        note={details.note}
      />
    </SActivityDetails>
  );
}

export default ActivityDetails;

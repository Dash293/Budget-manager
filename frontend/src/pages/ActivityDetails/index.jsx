import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DateTime } from "luxon";
import ActivityDetailsCard from "../../components/Cards/ActivityDetailsCard";
import SActivityDetails from "./style";

function ActivityDetails() {
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/activity/"}${id}`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        setDetails(data);
      });
  }, []);

  function date(d) {
    return `${DateTime.fromISO(d).setLocale("fr").toFormat("dd/MM/yyyy")}`;
  }

  const handleDelete = () => {
    axios
      .delete(
        `${import.meta.env.VITE_BACKEND_URL}${"/delete-activity/"}${id}`,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <SActivityDetails>
      <ActivityDetailsCard
        key={details.id}
        name={details.name}
        date={`${date(details.date)}`}
        operator={details.type_id === 1 ? "-" : "+"}
        amount={details.amount}
        logo={details.logo}
        RemoveButton={details.logo}
        note={details.note}
        onRemove={handleDelete}
      />
    </SActivityDetails>
  );
}

export default ActivityDetails;

import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Bounce, Flip, toast } from "react-toastify";
import SAddExpense from "./style";

function AddExpense() {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    category_name: "",
    type: "dépense",
    date: "",
    note: "",
    amount: "",
    user_id: 1,
    category_id: "",
    category_user_id: 1,
    type_id: 1,
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/categories"}`)
      .then(({ data }) => {
        setCategories(data);
      });
  }, []);

  const hChange = (evt) => {
    const matchCategory = categories?.find(
      (category) => category.name === evt.target.value
    );
    setFormData({
      ...formData,
      category_id: matchCategory.id,
      category_name: matchCategory.name,
    });
  };

  const hChange2 = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}${"/new-activity"}`, formData)
      .then(() => {
        toast.success("Votre transaction a bien été enregistrée", {
          position: "top-center",
          autoClose: 1700,
          transition: Flip,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch(() => {
        toast.error("Votre transaction n'a pas pu être enregistrée", {
          position: "top-center",
          autoClose: 1700,
          transition: Bounce,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  return (
    <SAddExpense>
      <h1 className="title">Nouvelle transaction</h1>
      <Link to="/add-revenue">
        <button type="button"> Saisir un revenu</button>
      </Link>
      <form className="form" action="" onSubmit={hSubmit}>
        <div className="category">
          <select
            value={formData.category_name}
            name="category_name"
            onChange={(e) => {
              hChange(e);
            }}
          >
            {categories
              .filter((category) => category.type_id === 1)
              .map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
          </select>
        </div>
        <div className="date">
          <input
            type="date"
            value={formData.date}
            name="date"
            onChange={hChange2}
          />
        </div>
        <div className="note">
          <input
            type="text"
            value={formData.note}
            name="note"
            onChange={hChange2}
            placeholder="notes"
          />
        </div>
        <div className="repeat">
          Répéter{" "}
          <input
            type="checkbox"
            value={formData.repeat}
            name="repeat"
            onChange={hChange2}
          />
        </div>
        <div className="amount">
          <input
            type="number"
            value={formData.amount}
            name="amount"
            onChange={hChange2}
            placeholder="- 10 €"
          />
        </div>
        <div className="submit">
          <button type="submit" onClick={hSubmit}>
            Enregistrer
          </button>
        </div>
      </form>
    </SAddExpense>
  );
}

export default AddExpense;

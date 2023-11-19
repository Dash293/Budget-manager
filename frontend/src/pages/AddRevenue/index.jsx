import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Bounce, Flip, toast } from "react-toastify";
import SAddRevenue from "./style";
import CategoriesIcon from "../../assets/icons/categoriesIconGrey.svg";
import CalendarIcon from "../../assets/icons/calendarGrey.svg";
import NoteIcon from "../../assets/icons/noteGrey.svg";
import RepeatIcon from "../../assets/icons/repeatGrey.svg";

function AddRevenue() {
  const date = new Date();
  const today = date.toISOString().slice(0, 10);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    category_name: "",
    type: "revenu",
    date: today,
    note: "",
    amount: "",
    category_id: "",
    type_id: 2,
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/categories"}`, {
        withCredentials: true,
      })
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
      .post(`${import.meta.env.VITE_BACKEND_URL}${"/new-activity"}`, formData, {
        withCredentials: true,
      })
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
    <SAddRevenue>
      <div className="typeButtonContainer">
        <Link to="/add-expense">
          <button className="formTypeButton" type="button">
            Saisir une dépense
          </button>
        </Link>
      </div>
      <form className="form" action="" onSubmit={hSubmit}>
        <div className="line-2" />
        <div className="category">
          <img
            className="Icons"
            src={CategoriesIcon}
            alt="logo désignant des catégories"
          />
          <select
            className="selectInput"
            value={formData.category_name}
            name="category_name"
            onChange={(e) => {
              hChange(e);
            }}
          >
            <option value="" disabled selected>
              Catégorie
            </option>
            {categories
              .filter((category) => category.type_id === 2)
              .map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
          </select>
        </div>
        <div className="line-1" />
        <div className="date">
          <img className="Icons" src={CalendarIcon} alt="logo de calendrier" />
          <input
            className="calendarInput"
            type="date"
            value={formData.date}
            name="date"
            onChange={hChange2}
          />
        </div>
        <div className="line-1" />
        <div className="note">
          <img className="Icons" src={NoteIcon} alt="logo catégorie" />
          <input
            className="noteInput"
            type="text"
            value={formData.note}
            name="note"
            onChange={hChange2}
            placeholder="notes"
          />
        </div>
        <div className="line-1" />
        <div className="repeat">
          <img className="Icons" src={RepeatIcon} alt="logo catégorie" />
          Répéter{" "}
          <input
            className="repeatInput"
            type="checkbox"
            value={formData.repeat}
            name="repeat"
            onChange={hChange2}
          />
        </div>
        <div className="line-1" />
        <div className="amount">
          <input
            className="amountInput"
            type="number"
            value={formData.amount}
            name="amount"
            onChange={hChange2}
            placeholder="+ 10 €"
          />
        </div>
        <div className="line-1" />
        <div className="submitContainer">
          <button className="submitButton" type="submit" onClick={hSubmit}>
            Enregistrer
          </button>
        </div>
      </form>
    </SAddRevenue>
  );
}

export default AddRevenue;

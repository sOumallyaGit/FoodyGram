import React from "react";
import "../theme.css";
import "../FormPages.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function FoodPartnerLogin() {

  const navigate = useNavigate();
    const handleSubmit = async (e) =>{
    e.preventDefault();

    const email = e.target.partnerEmail.value;
    const password = e.target.password.value;

    const response = await axios.post("http://localhost:3000/api/auth/food-partner/login",{
      email,
      password
    },{
      withCredentials : true
    })

    console.log(response.data);
    navigate("/create-food")

  }

  return (
    <div className="form-container">
      <h2>Food Partner Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="partnerEmail">Partner Email</label>
        <input type="text" id="partnerEmail" name="partnerEmail" autoComplete="organization" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" autoComplete="current-password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

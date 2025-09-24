import React from "react";
import "../theme.css";
import "../FormPages.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

export default function FoodPartnerRegister() {

  const navigate = useNavigate();

    const handleSubmit = async (e) =>{
    e.preventDefault();

    const name = e.target.partnerName.value
    // console.log(fullName)
    const contactName = e.target.contactName.value
    const phone = e.target.phone.value
    const address = e.target.address.value
    const email = e.target.email.value;
    // console.log(email)
    const password = e.target.password.value


    const response = await axios.post("http://localhost:3000/api/auth/food-partner/register",{
      name,
      email,
      password,
      phone,
      address,
      contactName
    },{
      withCredentials : true
    })

    console.log(response.data);
    navigate("/create-food")

  }



  return (
    <div className="form-container">
      <h2>Food Partner Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="partnerName">Partner Name</label>
        <input type="text" id="partnerName" name="partnerName" autoComplete="organization" />
        <label htmlFor="contactName">Contact Name</label>
        <input type="text" id="contactName" name="contactName" autoComplete="name" />
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" autoComplete="tel" />
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" autoComplete="street-address" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" autoComplete="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" autoComplete="new-password" />
        <button type="submit">Register</button>
      </form>
      <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
        <Link to="/user/register" style={{ marginRight: "1rem" }}>Register as Normal User</Link>
        <Link to="/food-partner/login">Login as Food Partner</Link>
      </div>
    </div>
  );
}

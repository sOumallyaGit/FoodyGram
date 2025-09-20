import React from "react";
import "../theme.css";
import "../FormPages.css";
import axios from "axios";

import { Link } from "react-router-dom";

export default function UserRegister() {

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const fullName = e.target.fullName.value
    console.log(fullName)
    const email = e.target.email.value;
    console.log(email)
    const password = e.target.password.value


    await axios.post("http://localhost:3000/api/auth/user/register",{
      fullName,
      email,
      password
    })

  }

  return (
    <div className="form-container">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" name="fullName" autoComplete="fullName" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" autoComplete="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" autoComplete="new-password" />
        <button type="submit">Register</button>
      </form>
      <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
        <Link to="/food-partner/register" style={{ marginRight: "1rem" }}>Register as Food Partner</Link>
        <Link to="/user/login">Login as User</Link>
      </div>
    </div>
  );
}

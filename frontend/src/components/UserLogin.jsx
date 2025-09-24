import React from "react";
import "../theme.css";
import "../FormPages.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UserLogin() {

  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await axios.post("http://localhost:3000/api/auth/user/login",{
      email,
      password
    },{
      withCredentials : true
    })

    console.log(response.data);
    navigate("/")

  }

  return (
    <div className="form-container">
      <h2>User Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" autoComplete="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" autoComplete="current-password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

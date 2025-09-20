import React from "react";
import "../theme.css";
import "../FormPages.css";

import { Link } from "react-router-dom";

export default function UserRegister() {
  return (
    <div className="form-container">
      <h2>User Registration</h2>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" autoComplete="username" />
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

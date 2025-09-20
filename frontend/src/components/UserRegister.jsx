import React from "react";
import "../theme.css";
import "../FormPages.css";

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
    </div>
  );
}

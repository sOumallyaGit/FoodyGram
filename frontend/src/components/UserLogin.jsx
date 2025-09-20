import React from "react";
import "../theme.css";
import "../FormPages.css";

export default function UserLogin() {
  return (
    <div className="form-container">
      <h2>User Login</h2>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" autoComplete="username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" autoComplete="current-password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

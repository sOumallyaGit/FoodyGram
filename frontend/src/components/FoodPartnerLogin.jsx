import React from "react";
import "../theme.css";
import "../FormPages.css";

export default function FoodPartnerLogin() {
  return (
    <div className="form-container">
      <h2>Food Partner Login</h2>
      <form>
        <label htmlFor="partnerName">Partner Name</label>
        <input type="text" id="partnerName" name="partnerName" autoComplete="organization" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" autoComplete="current-password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

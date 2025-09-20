import React from "react";
import "../theme.css";
import "../FormPages.css";

export default function FoodPartnerRegister() {
  return (
    <div className="form-container">
      <h2>Food Partner Registration</h2>
      <form>
        <label htmlFor="partnerName">Partner Name</label>
        <input type="text" id="partnerName" name="partnerName" autoComplete="organization" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" autoComplete="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" autoComplete="new-password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

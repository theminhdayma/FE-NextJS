import React from "react";
import "./navigate.scss"

export default function Navigation() {
  return (
    <div className="backgroup1">
      <div className="content">
        <div className="logo">
          <img
            src="https://png.pngtree.com/png-vector/20210414/ourlarge/pngtree-beauty-logo-png-image_3209241.jpg"
            alt=""
          />
          <h2>logoispum *</h2>
        </div>
        <ul>
          <li className="home">Home</li>
          <li>Updates</li>
          <li>Services</li>
          <li>Features</li>
          <li>About Us</li>
        </ul>
        <span className="avatar material-symbols-outlined">account_circle</span>
      </div>
    </div>
  );
}

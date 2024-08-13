import React from "react";
import "./popup.scss";

export default function Popup() {
  return (
    <div className="backgroup">
      <span className="error material-symbols-outlined">error</span>
      <h2>Delete blog post</h2>
      <p>
        Are you sure you want to delete this post? This action cannot be undone
      </p>
      <div className="button">
        <button className="cancel">Cancel</button>
        <button className="delete">Delete</button>
      </div>
    </div>
  );
}

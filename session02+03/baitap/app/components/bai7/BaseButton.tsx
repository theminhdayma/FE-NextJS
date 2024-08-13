import React from "react";
import buttonStyles from "./baseButton.module.css";

export default function BaseButton() {
  return (
    <div className={buttonStyles.container}>
      <button className={buttonStyles.success}>Success</button>
      <button className={buttonStyles.warning}>Warning</button>
      <button className={buttonStyles.danger}>Danger</button>
      <button className={buttonStyles.primary}>Primary</button>
    </div>
  );
}

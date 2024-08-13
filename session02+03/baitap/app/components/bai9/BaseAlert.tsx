import React from "react";
import baseAlertStyles from "./baseAlert.module.css";

interface Props {
  type: any;
  children: any;
}

export default function BaseAlert({ type, children }: Props) {
  return (
    <div
      className={`${baseAlertStyles.alert} ${
        baseAlertStyles[`alert--${type}`]
      }`}
    >
      {children}
    </div>
  );
}

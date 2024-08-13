import React from "react";
import Image from "next/image";
import CaseButton from "./CaseButton";
import "./baseCart.scss";

interface Props {
  content: any;
  title: any;
  image: any;
}

export default function BaseCart({ content, title, image }: Props) {
  return (
    <div className="backgroundCart">
      <img className="imageCart" src={image} alt="" />
      <h2 className="h2Cart">{title}</h2>
      <p className="pCart">{content}</p>
      <CaseButton children="Thêm vào giỏ hàng" type="primary" />
    </div>
  );
}

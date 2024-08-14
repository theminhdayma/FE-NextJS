"use client"
import React, { useState } from "react";
import "./globals.css";
import Input from "./components/bai1/Input";
import CheckBox from "./components/bai2/CheckBox";
import SignUp from "./components/bai3/SignUp";
import SignIn from "./components/bai4/SiginIn";
import Popup from "./components/bai5/Popup";
import Navigation from "./components/bai6/Navigation";
import BaseButton from "./components/bai7/BaseButton";
import Pagination from "./components/bai8/Pagination";
import BaseAlert from "./components/bai9/BaseAlert";
import BaseCart from "./components/bai10/BaseCart";
import Select from "./components/bai11/Select";
import Date from "./components/bai12/Date";

export default function page() {
  const [selectedValue, setSelectedValue] = useState({});

  const options = [
    { value: 1, label: "HTML" },
    { value: 2, label: "CSS" },
    { value: 3, label: "JavaScript" },
    { value: 4, label: "NextJS" },
  ];

  const handleChange = (option: any) => {
    setSelectedValue(option);
  };
  return (
    <div className="ml-[250px]">
      <h1>Bài 1</h1>
      <Input />
      <br />
      <h1>Bài 2</h1>
      <CheckBox />
      <br />
      <h1>Bài 3</h1>
      <SignUp />
      <br />
      <h1>Bài 4</h1>
      <SignIn />
      <br />
      <h1>Bài 5</h1>
      <Popup />
      <br />
      <h1>Bài 6</h1>
      <Navigation />
      <br />
      <h1>Bài 7</h1>
      <BaseButton />
      <br />
      <h1>Bài 8</h1>
      <Pagination />
      <br />
      <h1>Bài 9</h1>
      <div className="flex flex-col gap-3">
        <BaseAlert type="success">Success Text</BaseAlert>
        <BaseAlert type="info">Info Text</BaseAlert>
        <BaseAlert type="warning">Warning Text</BaseAlert>
        <BaseAlert type="error">Error Text</BaseAlert>
      </div>
      <br />
      <h1>Bài 10</h1>
      <div>
        <BaseCart
          content="Áo phông nam mát mẻ"
          title="Áo phông nam"
          image="https://img.lovepik.com/free-png/20210923/lovepik-t-shirt-png-image_401190055_wh1200.png"
        />
      </div>
      <br />
      <h1>Bài 11</h1>
      <Select
        options={options}
        value={selectedValue}
        handleChange={handleChange}
      />
      <br />
      <h1>Bài 12</h1>
      <Date/>
    </div>
  );
}

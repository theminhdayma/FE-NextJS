import React from "react";
import Home from "./home/page";
import Navbar from "./navbar/page";
import User from "./users/page";

export default function page() {
  return (
    <div className="ml-[250px] mt-[30px]">
      <h1>Bài 1</h1>
      <Home />
      <br />
      <h1>Bài 2</h1>
      <h1>Định tuyến trang contact</h1>
      <br />
      <h1>Bài 3 + 4</h1>
      <h1>Lấy giá trị trên thanh URL</h1>
      <br />
      <h1>Bài 5 + 6</h1>
      <h1>Định hướng và active các trang home contact about và login</h1>
      <br />
      <h1>Bài 7 + 8</h1>
      <User/>
      <br />
      <h1>Bài 9</h1>
    </div>
  );
}

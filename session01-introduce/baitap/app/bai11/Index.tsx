import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function Index() {
  return (
    <div className="w-[600px]">
      <Header />
      <div className="flex">
        <Menu />
        <div>
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
}

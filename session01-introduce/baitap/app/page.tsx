import "./globals.css";
import Image from "next/image";
import Bai3 from "./bai3/page";
import Bai4 from "./bai4/page";
import Bai5 from "./bai5/page";
import Bai6 from "./bai6/page";
import Header from "./bai7/Header";
import Footer from "./bai8/Footer";
import Bai9 from "./bai9/page";

import { Roboto } from "next/font/google";
import Bai10 from "./bai10/page";
import Index from "./bai11/Index";
import Bai12 from "./bai12/page";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className={roboto.className}>
      <div className="ml-[200px]">
        <h1> Bài 3</h1>
        <Bai3 />
        <br />
        <h1>Bài 4</h1>
        <Bai4 />
        <br />
        <h1>Bài 5</h1>
        <Bai5 />
        <br />
        <h1>Bài 6</h1>
        <Bai6 />
        <br />
        <h1>Bài 7</h1>
        <Header />
        <br />
        <h1>Bài 8</h1>
        <Footer />
        <br />
        <h1>Bài 9</h1>
        <Bai9 />
        <br />
        <h1>Bài 10</h1>
        <Bai10 />
        <br />
        <h1>Bài 11</h1>
        <Index/>
        <br />
        <br />
        <h1>Bài 12</h1>
        <Bai12/>
      </div>
    </div>
  );
}

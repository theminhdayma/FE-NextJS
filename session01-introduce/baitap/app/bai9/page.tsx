import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Bai9() {
  return (
    <div className={roboto.className}>
      <p>Thay đổi font chữ !!!</p>
    </div>
  );
}

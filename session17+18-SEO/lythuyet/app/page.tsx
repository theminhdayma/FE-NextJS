import Image from "next/image";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tiêu đề",
  description: "Mô tả",
};
export default function page() {
  return (
    <div>
      page
      <img
        src="https://st.quantrimang.com/photos/image/2021/09/02/co-viet-nam.png"
        alt=""
        width={500}
        height={500}
      />
      <br />
      <Image
        src="https://st.quantrimang.com/photos/image/2021/09/02/co-viet-nam.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <h1>Tôi yêu Việt Nam của tôi !!!</h1>
    </div>
  );
}

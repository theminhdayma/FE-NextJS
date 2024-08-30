import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="text-[30px]">Tôi yêu Việt Nam của tôi !!!</h1>
      <Image
        src="https://st.quantrimang.com/photos/image/2021/09/02/co-viet-nam.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  );
}

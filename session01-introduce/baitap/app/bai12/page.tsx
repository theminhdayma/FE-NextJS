import React from "react";
import Image from "next/image";
import profilePic from '../../public/0106_hinh-nen-Ronaldo94.jpg'

export default function Bai12() {
  return (
    <div>
      <h1>Hình ảnh</h1>
      <Image
        src={profilePic}
        alt="Rikkei Academy"
        width={600}
        height={300}
      />
      <br /><br /><br /><br />
    </div>
  );
}

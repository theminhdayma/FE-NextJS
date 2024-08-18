"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Home() {
    const pathName = usePathname()
    console.log("Gía trị của pathName: ", pathName);
    
  return (
    <div>
      <Link href={"/home"}>Trang chủ</Link>
      <br />
      <Link className={pathName === "/home/news" ? "active" : ""} href={"/home/news"}>News</Link>
      <br />
      <Link className={pathName === "/home/contact" ? "active" : ""} href={"/home/contact"}>Contact</Link>
    </div>
  );
}

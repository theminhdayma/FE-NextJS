"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className="flex gap-4">
      <Link
        className={pathName === "/navbar/home" ? "active" : ""}
        href={"/navbar/home"}
      >
        Home
      </Link>
      <Link
        className={pathName === "/navbar/contact" ? "active" : ""}
        href={"/navbar/contact"}
      >
        Contact
      </Link>
      <Link
        className={pathName === "/navbar/about" ? "active" : ""}
        href={"/navbar/about"}
      >
        About
      </Link>
      <Link
        className={pathName === "/navbar/login" ? "active" : ""}
        href={"/navbar/login"}
      >
        Login
      </Link>
    </div>
  );
}

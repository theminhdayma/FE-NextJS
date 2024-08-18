"use client"
import { useRouter } from "next/navigation";
import React from "react";

export default function Login() {
  const isCheckLogin = true;
  const router = useRouter();
  const loginUser = () => {
    if (isCheckLogin) {
      router.push("/home");
    }
  };
  return (
    <div>
      Trang đăng nhập
      <br />
      <button onClick={loginUser}>Login</button>
    </div>
  );
}

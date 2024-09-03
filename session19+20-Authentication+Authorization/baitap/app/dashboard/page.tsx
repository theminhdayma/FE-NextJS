"use client";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function page() {
  const auth = useAuth();
  console.log(auth);
  const { isSignedIn } = auth;
  const route = useRouter();

  useEffect(() => {
    isSignedIn ? null : route.push("/sign-in");
  }, []);

  return <div>page</div>;
}

"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

export default function HomePage() {
  const { isSignedIn, signOut } = useAuth();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Trang Chủ</h1>
      {isSignedIn ? (
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Đăng xuất
        </button>
      ) : (
        <Link href="/sign-in">
          <p className="bg-blue-500 text-white px-4 py-2 rounded">Đăng nhập</p>
        </Link>
      )}
    </div>
  );
}

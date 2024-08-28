// Tạo ra các phương thức

import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  // console.log("hello");
  const res = axios.get("https://jsonplaceholder.typicode.com/users");
  const data = (await res).data;
  return NextResponse.json(data);
}

import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  const res = axios.get("https://fakestoreapi.com/products ");
  const data = (await res).data;
  return NextResponse.json(data);
}

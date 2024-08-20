import React from "react";
import { NextResponse } from "next/server";

const users = [
  {
    id: 1,
    name: "Thế Minh",
    age: 19,
  },
  {
    id: 2,
    name: "Minh Sâm",
    age: 18,
  },
  {
    id: 3,
    name: "Nho Hà",
    age: 20,
  },
];

// Bài 2
export async function GET(req: any, res: any) {
  console.log(req);
  let find = users.find((item) => {
    return item.id == +res.params.id;
  });
  return NextResponse.json({ user: find ? find : "không tìm thấy" });
}

// Bài 4
export async function DELETE(req: any) {
  const data = await req.json();
  return NextResponse.json({ massage: "Xóa user thành công !!!", user: data });
}

// Bài 6
export async function PUT(req: any) {
  const data = await req.json();
  return NextResponse.json({
    message: "Cập nhật user thành công !!!",
    users: data,
  });
}

export async function PATCH(req: any) {
  const data = await req.json();
  return NextResponse.json({
    message: "Cập nhật user thành công !!!",
    users: data,
  });
}
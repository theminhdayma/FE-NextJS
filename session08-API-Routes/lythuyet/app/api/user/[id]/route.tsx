import { NextResponse } from "next/server";

// Lấy ở trong cơ sở dữ liệu
// Dùng api tương tác vào cơ sở dữ liệu
//==> TRả về data
const users = [
  {
    id: 1,
    name: "Thế Minh",
  },
  {
    id: 2,
    name: "Minh Sâm",
  },
];

export async function GET(req: any, res: any) {
  console.log(res);

  return NextResponse.json({ data: users });
}

export async function POST(req: any) {
  const data = await req.json();
  return NextResponse.json("Thêm user");
}

export async function PUT(req: any) {
  const data = await req.json();
  return NextResponse.json({ massage: "Cập nhật user thành công !!!", users: data });
}

export async function DELETE(req: any) {
  const data = await req.json();
  return NextResponse.json({ massage: "Xóa user thành công !!!", users: data });
}
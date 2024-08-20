import { NextResponse } from "next/server";

// Lấy ở trong cơ sở dữ liệu
// Dùng api tương tác vào cơ sở dữ liệu
//==> TRả về data
const users = [
  {
    id: 1,
    name: "Thế Minh",
    age: 19
  },
  {
    id: 2,
    name: "Minh Sâm",
    age: 18
  },
];

export async function GET(req: any, res: any) {
  console.log(res);

  return NextResponse.json({ data: users });
}

export async function POST(req: any) {
  const data = await req.json();
  return NextResponse.json({ massage: "Thêm user thành công !!!", user: data });
}

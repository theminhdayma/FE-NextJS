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

// Bài 1
// export async function GET() {
//   return NextResponse.json({ data: users });
// }

// Bài 3: tìm kiếm người dùng theo tên
export async function GET(req: any) {
  const { searchParams } = new URL(req.url);
  const nameQuery = searchParams.get("name");

  if (nameQuery) {
    // Tìm kiếm người dùng theo tên
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(nameQuery.toLowerCase())
    );
    return NextResponse.json({ data: filteredUsers });
  }

  // Trả về toàn bộ người dùng nếu không có query parameter
  return NextResponse.json({ data: users });
}

// Bài 5
export async function POST(req: any) {
  const data = await req.json();
  return NextResponse.json({
    message: "Thêm user thành công !!!",
    users: data,
  });
}

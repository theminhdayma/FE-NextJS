import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh sách bài viết",
  description: "Bài viết rất thú vị",
};

export default function page() {
  return (
    <div>
      <title>Danh sách bài viết</title>
    </div>
  );
}

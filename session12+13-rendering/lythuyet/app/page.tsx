import React from "react";

/**
   NextJS có 2 loại components
   1. client components
   2. server components
   - Khi tạo 1 cái component thì mặc định sẽ là 
    server component
     + Chạy môi trường server 
     + console (hiển thị trong terminal)
     + Khi muốn dùng alert thì gọi alert (react js)
     SSR(server side rendering): lấy dữ liệu ở phía server sau đó
     trả về kết quả cho bên client, tối ưu SEO (search  engliee )
 */

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

fetchData();
export default async function page() {
  const dataUser: any = await fetchData();
  return (
    <>
      {dataUser.map((item: any) => (
        <ul>
          <li>{item.id}</li>
          <li>{item.userId}</li>
          <li>{item.title}</li>
          <li>{item.body}</li>
        </ul>
      ))}
    </>
  );
}

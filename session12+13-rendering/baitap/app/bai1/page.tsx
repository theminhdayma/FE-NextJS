import React from "react";

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
    <h1>Danh sách bài viết</h1>
      {dataUser.map((item: any) => (
        <ul key={item.id}>
          <li>{item.title}</li>
          <li>{item.body}</li>
          <hr />
          <br />
        </ul>
      ))}
    </>
  );
}

"use client";
import axios from "axios";
import { log } from "console";
import React, { useEffect, useState } from "react";

export default function page() {
  const [users, setUsers] = useState<any[]>([]);
  useEffect(() => {
    let data = axios.get("http://localhost:3000/api/user");
    data
      .then((res) => {
        console.log(1111111, res.data.data);
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.error("error: ", err);
      });
  }, []);
  return (
    <>
      <div>Danh sách User</div>
      {users.map((item: any) => (
        <div>
          <p>id: {item.id}</p>
          <p>Name: {item.name}</p>
        </div>
      ))}
    </>
  );
}

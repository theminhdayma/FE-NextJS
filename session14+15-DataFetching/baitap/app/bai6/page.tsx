"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function page() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (err: any) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  if (users.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-[40px]">Danh sách người dùng</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            <p>
              <strong>Tên:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Địa chỉ:</strong>
              {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
            </p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

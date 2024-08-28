import axios from "axios";
import React from "react";

async function fetchData() {
  try {
    const response = await axios.get("https://example.com/invalid-endpoint"); // => 505
    // const response = await axios.get("https://jsonplaceholder.typicode.com/users"); => 404
    // const response = await axios.get("https://jsonplaceholder.typicode.com/usersfrewthgrfwed"); => Ok
    return { data: response.data, error: null };
  } catch (error: any) {
    if (error.response) {
      return { data: null, error: error.response.status };
    } else if (error.request) {
      return { data: null, error: 500 };
    } else {
      return { data: null, error: 500 };
    }
  }
}

export default async function ErrorHandlingPage() {
  const { data, error } = await fetchData();

  if (error) {
    if (error === 404) {
      return <div>404: Trang không tồn tại.</div>;
    } else if (error === 500) {
      return <div>500: Lỗi máy chủ.</div>;
    } else {
      return <div>Lỗi khác</div>;
    }
  }

  return (
    <div>
      <p>{JSON.stringify(data, null, 2)}</p>
    </div>
  );
}

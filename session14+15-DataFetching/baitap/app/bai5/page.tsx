"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function page() {
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <h1 className="text-[40px]">Trang danh sách sản phẩm</h1>
      {products.map((item: any) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

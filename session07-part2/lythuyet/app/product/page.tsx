"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function ListProduct() {
  const searchParam = useSearchParams();
  const nameProduct = searchParam.get("name");
  const idProduct = searchParam.get("id");
  console.log(idProduct);
  console.log(nameProduct);

  return (
    <div>
      Trang danh sách sản phẩm
      <p>Sản phẩm cần tìm kiếm có id là: {idProduct}</p>
      <p>Sản phẩm cần tìm kiếm có tên là: {nameProduct}</p>
    </div>
  );
}

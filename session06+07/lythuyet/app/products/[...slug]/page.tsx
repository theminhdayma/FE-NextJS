"use client";
import React from "react";

interface Product {
  slug: string;
}

interface Props {
  params: Product;
}

export default function ProductDetail(props: Props) {
  console.log(111111111, props);
  const { params } = props;

  return <div>Trang chi tiết sản phẩm có id là: {params.slug}</div>;
}

"use client";
import React from "react";

export default function ProductDetail({ params }: { params: { productId: string } }) {
  console.log(params);

  return (
    <div>
      Product id: {params.productId}
    </div>
  );
}

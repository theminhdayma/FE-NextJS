"use client";
import React from "react";

export default function Id({ params }: { params: { id: number } }) {
  console.log(params);

  return (
    <div>
      Product id: {params.id}
    </div>
  );
}

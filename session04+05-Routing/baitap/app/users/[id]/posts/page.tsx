"use client";
import React from "react";

export default function Post({ params }: { params: { id: string } }) {
  console.log(params);

  return (
    <div>
      Danh sách bài viết của User id: {params.id}
    </div>
  );
}

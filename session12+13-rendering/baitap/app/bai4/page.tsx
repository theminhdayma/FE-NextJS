"use client";
import React, { useState, useEffect } from "react";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

export default function page() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetchPosts().then(setPosts).catch(console.error);
  }, []);

  const handleRefresh = async () => {
    try {
      const data = await fetchPosts();
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Danh sách Bài viết với Refresh</h1>
      <button
        className="border border-black p-2 bg-green-700 text-white"
        onClick={handleRefresh}
      >
        Refresh
      </button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}...</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

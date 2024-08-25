export default async function page() {
  let posts = null;
  let error = null;

  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/nonexistent-url"
    );
    posts = await res.json();
  } catch (err: any) {
    error = err.message;
  }

  if (error) {
    return (
      <div>
        <h1>Xử lý Lỗi với SSR</h1>
        <p>Đã xảy ra lỗi: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <ul>
        {posts && posts.map((post: any) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
}

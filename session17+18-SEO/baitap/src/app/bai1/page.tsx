export default function Posts() {
  const posts = [
    {
      id: 1,
      title: "Accusamus beatae ad facilis",
      thumbnailUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Reprehenderit est deserunt",
      thumbnailUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Officia porro iure quia",
      thumbnailUrl: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Qui eius qui autem sed",
      thumbnailUrl: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Epudiandae iusto deleniti",
      thumbnailUrl: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      title: "Iusto sunt nobis quasi veritatis",
      thumbnailUrl: "https://via.placeholder.com/600",
    },
  ];

  return (
    <div className="w-[1000px] p-5">
      <h1 className="text-2xl font-bold mb-5">Danh sách bài viết</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-300 p-4 rounded-lg shadow-md"
          >
            <img
              src={post.thumbnailUrl}
              alt={post.title}
              className="w-full rounded-lg"
            />
            <h3 className="mt-3 text-lg font-semibold">{post.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

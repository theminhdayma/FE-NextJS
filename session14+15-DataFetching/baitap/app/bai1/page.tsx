
async function getData() {
  const res: any = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function page() {
  const posts = await getData();

  return (
    <div>
      <h1 className="text-[24px]">List of Posts</h1>
      {posts.map((item: any) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </div>
  );
}

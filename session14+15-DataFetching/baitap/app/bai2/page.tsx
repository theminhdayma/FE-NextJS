async function getData() {
  const res: any = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default async function page() {
  const products = await getData();

  return (
    <div>
      <h1 className="text-[40px] flex justify-center items-center">
        Danh sách sản phẩm
      </h1>
      {products.map((item: any) => (
        <ul className="flex flex-col gap-4">
          <li className="flex flex-col justify-center items-center">
            <img width={100} height={100} src={item.image} alt={item.title} />
            <div>
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          </li>
          <hr />
        </ul>
      ))}
    </div>
  );
}

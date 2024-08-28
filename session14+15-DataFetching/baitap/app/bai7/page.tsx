"use client";
import React, { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface Props {
  products: Product[];
  minPrice: number;
  maxPrice: number;
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
  onFilter: () => void;
  filteredProducts: Product[];
}

export default function page() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data: Product[] = await res.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleFilter = async () => {
    try {
      const response = await fetch(
        `/api/filter-products?minPrice=${minPrice}&maxPrice=${maxPrice}`
      );
      const filtered = await response.json();
      setFilteredProducts(filtered);
    } catch (error) {
      console.error("Error filtering products:", error);
    }
  };

  useEffect(() => {
    handleFilter();
  }, [minPrice, maxPrice]);

  return (
    <div>
      <h1>Product List</h1>
      <ProductFilter
        products={products}
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        onFilter={handleFilter}
        filteredProducts={filteredProducts}
      />
    </div>
  );
}

const ProductFilter: React.FC<Props> = ({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  onFilter,
  filteredProducts,
}) => {
  return (
    <div>
      <div>
        <label>
          Min Price:
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </label>
        <button onClick={onFilter}>Filter</button>
      </div>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} width={100} />
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

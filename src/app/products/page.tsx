"use client";

import React, { useEffect, useState } from "react";
import Button from "../component/Button";
import Product from "../Product/page";
import Cartitems from "../Cartitems/page";
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categoryId: number;
  categoryName: string;
  quantity: number;
};

export default function ProductsPage({}) {
  const [products, setProducts] = useState<Product[]>([]);

  const [loading, setIsloading] = useState(true);

  useEffect(() => {
    fetch("https://localhost:7172/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("🚀 Received from API:", data);
        if (Array.isArray(data?.$values)) {
          setProducts(data.$values);
        } else {
          console.error("Unexpected API format:", data);
        }
        setIsloading(false);
      })
      .catch((error) => {
        console.error("حدث خطأ أثناء جلب المنتجات:", error);
        setIsloading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10">loading.....</p>;
  }

  {
    !loading && products && <p>{JSON.stringify(products)}</p>;
  }
  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products 🍞</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

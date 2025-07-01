"use client";
import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Shoppingcartcontext } from "../context/page";

type producttype = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categoryId: number;
  categoryName: string;
  quantity: number;
};

const Product = ({ product }: { product: producttype }) => {
  const { setcartitems } = useContext(Shoppingcartcontext);

  const handelClick = (pro: producttype) => {
    toast("Added to Cart");
    setcartitems((prev) => {
      const existing = prev.find((item) => item.id === pro.id);
      if (existing) {
        return prev.map((item) =>
          item.id === pro.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...prev, { ...pro, quantity: 1 }];
      }
    });
  };
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4 flex-1">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p className="text-lg font-bold">{product.price} ج.م</p>
      </div>
      <div className=" mb-2 flex justify-center items-center  ">
        <button
          onClick={() => handelClick(product)}
          style={{ backgroundColor: "#d49f68" }}
          className="px-4 py-2  text-white rounded "
        >
          Add to Card
          <Toaster />
        </button>
      </div>
    </div>
  );
};

export default Product;

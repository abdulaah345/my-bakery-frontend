"use client";

import React, { useContext } from "react";
import { Shoppingcartcontext } from "../context/page";
type producttypess = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categoryId: number;
  categoryName: string;
  quantity: number;
};
const Cartitem = ({ item }: { item: producttypess }) => {
  const { removeitem, decrease, increasei } = useContext(Shoppingcartcontext);
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4 flex-1">
        <h2 className="text-xl font-semibold mb-2 text-[#d49f68]">
          {item.name}
        </h2>
        <p className=" mb-2 text-[#d49f68] truncate">{item.description}</p>
        <p className="text-lg font-bold text-[#d49f68]">{item.price} ج.م</p>
        <p className="text-lg font-bold text-[#d49f68]">
          quantity:{item.quantity}
        </p>
        <p className="text-lg font-bold text-[#d49f68]">
          Total Price:{item.quantity * item.price}
        </p>
        <div className="flex items-center justify-center gap-4 mt-2">
          <button
            onClick={() => decrease(item.id)}
            className="text-gray-200 px-3 py-1 rounded-full"
          >
            ➖
          </button>

          <span className="font-bold text-[#d49f68]">{item.quantity}</span>

          <button
            onClick={() => increasei(item.id)}
            className="text-gray-200 px-3 py-1 rounded-full"
          >
            ➕
          </button>
          <button onClick={() => removeitem(item.id)}>🗑️</button>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;

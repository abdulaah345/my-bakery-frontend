"use client";
import React, { Children, ReactNode } from "react";
import { createContext, useState, useEffect } from "react";
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
type ShoppingCartContextType = {
  cartitems: Product[];
  setcartitems: React.Dispatch<React.SetStateAction<Product[]>>;
  removeitem: (id: number) => void;
  increasei: (id: number) => void;
  decrease: (id: number) => void;
};

export const Shoppingcartcontext = createContext<ShoppingCartContextType>({
  cartitems: [],
  setcartitems: () => {},
  removeitem: () => {},
  increasei: () => {},
  decrease: () => {},
});
interface ProviderProps {
  children: ReactNode;
}

const ShoppingcartcontextProvider = ({ children }: ProviderProps) => {
  const [cartitems, setcartitems] = useState<Product[]>([]);
  useEffect(() => {
    const initialcartitems = localStorage.getItem("cartitems");
    if (initialcartitems) {
      const parsed = JSON.parse(initialcartitems);
      setcartitems(parsed);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cartitems", JSON.stringify(cartitems));
  }, [cartitems]);
  const removeitem = (id: number) => {
    setcartitems((prev) => prev.filter((item) => item.id !== id));
  };
  const increasei = (id: number) => {
    setcartitems((prev) => {
      return prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };
  const decrease = (id: number) => {
    setcartitems((prev) => {
      return prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };
  return (
    <Shoppingcartcontext.Provider
      value={{ cartitems, setcartitems, removeitem, increasei, decrease }}
    >
      {children}
    </Shoppingcartcontext.Provider>
  );
};

export default ShoppingcartcontextProvider;

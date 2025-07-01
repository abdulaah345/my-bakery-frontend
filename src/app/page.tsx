"use client";
import Image from "next/image";
import { useState } from "react";
import Homebakery from "./Homebakery/page";
import Shopingcontexts, { Shoppingcartcontext } from "./context/page";
import ShoppingcartcontextProvider from "./context/page";
import Navbar from "./Navbar/page";
export default function Home() {
  return (
    <>
      <ShoppingcartcontextProvider>
        <Homebakery />
      </ShoppingcartcontextProvider>
    </>
  );
}

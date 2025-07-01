"use client";
import React, { useContext, useState } from "react";
import { Shoppingcartcontext } from "../context/page";
import Link from "next/link";

const Navbar = () => {
  const { cartitems } = useContext(Shoppingcartcontext);
  const [menue, setmenue] = useState(false);
  return (
    <nav className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">🍞 My Bakery</h1>
      <div className="sm:hidden">
        <button onClick={() => setmenue(!menue)}>
          <span className="text-2xl text-[var(--foreground)]">☰</span>
        </button>
      </div>
      <ul
        className={`flex flex-col sm:flex-row gap-4 text-[var(--foreground)] absolute sm:static bg-[var(--accent)] sm:bg-transparent top-16 left-0 w-full sm:w-auto px-4 sm:px-0 py-4 sm:py-0 transition-all duration-300 z-50 ${
          menue ? "block" : "hidden sm:flex"
        }`}
      >
        <li>
          <a
            href="/"
            style={{ color: "var(--foreground)" }}
            className="hover:underline"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/products"
            style={{ color: "var(--foreground)" }}
            className="hover:underline"
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="/about"
            style={{ color: "var(--foreground)" }}
            className="hover:underline"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/contact"
            style={{ color: "var(--foreground)" }}
            className="hover:underline"
          >
            Contact
          </a>
        </li>
        <li className="relative">
          <Link href="/Cartitems" className="hover:underline">
            🛒
            {cartitems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartitems.length}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../component/Button";

const images = ["/images/b.jpeg", "/images/e.jpeg", "/images/f.jpeg"];

const Homebakery = () => {
  const [currentindex, setcurrentindex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentindex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-center py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Bakery 🍰</h2>
        <p className="text-lg text-gray-700 mb-6">
          We offer you the most delicious and fresh baked goods daily ✨
        </p>

        <div className="mx-auto rounded-lg shadow-lg w-full max-w-xl h-[400px] relative overflow-hidden">
          <Image
            src={images[currentindex]}
            alt="Bakery hero"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="mt-8">
          <Button href="/products">Browse Our Products</Button>
        </div>
      </div>
    </section>
  );
};

export default Homebakery;

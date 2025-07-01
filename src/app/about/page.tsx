"use client";

import React from "react";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-[#d49f68]">
      <h1 className="text-3xl font-bold mb-6">🍪 About Us</h1>

      <p className="mb-4 leading-relaxed">
        Welcome to <strong>My Bakery</strong> – your cozy spot for fresh,
        delicious baked goods made with love and care.
      </p>

      <p className="mb-4 leading-relaxed">
        We started our journey in 2020 with one simple goal: to bring joy to
        people’s lives through the magic of baking. From warm bread and buttery
        croissants to rich cakes and custom pastries, we bake everything from
        scratch using the finest ingredients.
      </p>

      <p className="mb-4 leading-relaxed">
        Our bakery is more than just a place to grab a treat — it's a community.
        We’re proud to be part of your everyday celebrations and special
        moments.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">🎯 Our Mission</h2>
        <p className="leading-relaxed">
          To create unforgettable baking experiences that spread happiness and
          warmth to every customer.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">👨‍🍳 Meet the Team</h2>
        <p className="leading-relaxed">
          Our team includes passionate bakers, designers, and coffee lovers who
          put their hearts into every product. Every cookie, cake, and loaf has
          a story.
        </p>
      </div>
    </div>
  );
};

export default About;

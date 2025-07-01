"use client";
import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("تم إرسال رسالتك بنجاح ✅");
    // هنا ممكن تبعت الداتا لـ API أو سيرفر
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 text-[#d49f68]">
      <h1 className="text-3xl font-bold mb-6">📞 Contact Us</h1>

      <div className="mb-6 space-y-2">
        <p>
          <strong>📍 Address:</strong> 123 Bakery Street, Cairo
        </p>
        <p>
          <strong>📱 Phone:</strong> +20 123 456 789
        </p>
        <p>
          <strong>✉️ Email:</strong> info@mybakery.com
        </p>
        <p>
          <strong>⏰ Working Hours:</strong> Daily 9am - 10pm
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 mb-10">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={4}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="bg-[#d49f68] text-white py-2 px-4 rounded hover:bg-[#c08850]"
        >
          Send Message
        </button>
      </form>

      {/* 🗺️ Embedded Map */}
      <div className="rounded overflow-hidden shadow-md border">
        <iframe
          title="Bakery Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0960753045974!2d31.23571131511528!3d30.04441998187909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458410f2f7777f7%3A0x6e9f2e6e5e51c8ba!2sTahrir%20Square%2C%20Cairo%2C%20Egypt!5e0!3m2!1sen!2seg!4v1718523000000!5m2!1sen!2seg"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;

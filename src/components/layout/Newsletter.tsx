"use client";

import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Subscribed");
    setEmail("");
  };
  return (
    <section className="bg-secondary px-6 py-10 md:px-16">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
        <h2 className="heading max-w-sm text-white">
          Stay in touch with us with our valuable newsletters
        </h2>

        <form onSubmit={handleSubmit} className="flex w-full gap-3 md:w-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="YOUR EMAIL ADDRESS"
            className="flex-1 rounded-md border border-white/70 bg-transparent px-4 py-3 text-xs tracking-wide text-white uppercase placeholder:text-white/70 focus:border-white focus:outline-none md:w-72"
          />
          <button
            type="submit"
            className="rounded-md bg-white px-6 py-3 font-medium whitespace-nowrap text-[#5b4fc4] transition-colors hover:bg-gray-100"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;

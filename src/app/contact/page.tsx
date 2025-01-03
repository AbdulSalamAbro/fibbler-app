"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Header from "../components/common/Header/Header";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (result.success) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <main>
      <Header />
      <section className="xl:pt-[106px] md:pt-[70px] pt-[50px] pb-10">
        <div className="container mx-auto px-4">
          <h1 className="text-[#181127] font-[600] text-[25px] lg:text-[44px] leading-[109.7%] tracking-[0.44px] text-center lg:max-w-[863px] max-w-[500px] mx-auto mb-[35px]">
            Contact Us
          </h1>
          <form
            onSubmit={handleSubmit}
            className="max-w-[763px] mx-auto p-[20px] rounded-[16px] border-[4px] border-[#181127] bg-[#fcfbfd]"
          >
            <div className="mb-[20px]">
              <label
                htmlFor="name"
                className="block text-[#181127] text-[16px] lg:text-[18px] font-[500] mb-[10px]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-[15px] py-[10px] border border-[#181127] rounded-[8px] text-[#181127]"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-[20px]">
              <label
                htmlFor="email"
                className="block text-[#181127] text-[16px] lg:text-[18px] font-[500] mb-[10px]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-[15px] py-[10px] border border-[#181127] rounded-[8px] text-[#181127]"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-[20px]">
              <label
                htmlFor="message"
                className="block text-[#181127] text-[16px] lg:text-[18px] font-[500] mb-[10px]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-[15px] py-[10px] border border-[#181127] rounded-[8px] text-[#181127]"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-[12px] text-[16px] lg:text-[18px] font-[600] text-[#fff] bg-[#181127] rounded-[8px] hover:bg-[#111]"
            >
              {status === "sending" ? "Sending..." : "Submit"}
            </button>
            {status === "success" && (
              <p className="text-[#28a745] mt-[20px] text-center">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-[#dc3545] mt-[20px] text-center">
                Error sending message. Please try again.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import bg from "@/assets/images/form-bg.webp";

export default function DemoBookingPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    machine: "",
  });

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const machines = [
    "RK1201 (Butterfly Model) – 1000 SPM",
    "RK1201 (Advance Pro) – 1200 SPM",
    "RK1201 (Top End Model) – Auto Converter",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelectMachine = (value: string) => {
    setForm({ ...form, machine: value });
    setOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Form submitted successfully!");
      setForm({
        name: "",
        phone: "",
        email: "",
        machine: "",
      });
    }
  };

  return (
    <section className="relative min-h-screen w-screen max-w-full flex items-center justify-center py-16 overflow-hidden">
      
      {/* Background */}
      <Image
        src={bg}
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md sm:max-w-lg bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden"
      >
        <h2 className="text-2xl sm:text-3xl font-black text-[#2B237C] text-center mb-2">
          Book Free Demo
        </h2>

        <p className="text-gray-600 text-sm text-center mb-6">
          Fill your details. Our team will contact you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full min-w-0 mt-1 px-4 py-3 rounded-xl bg-gray-200 text-sm border border-transparent focus:border-[#2B237C] focus:bg-white outline-none box-border"
            />
          </div>


          {/* Phone */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Enter phone number"
              className="w-full min-w-0 mt-1 px-4 py-3 rounded-xl bg-gray-200 text-sm border border-transparent focus:border-[#2B237C] focus:bg-white outline-none box-border"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full min-w-0 mt-1 px-4 py-3 rounded-xl bg-gray-200 text-sm border border-transparent focus:border-[#2B237C] focus:bg-white outline-none box-border"
            />
          </div>

          {/* Custom Dropdown */}
          <div ref={dropdownRef}>
            <label className="text-sm font-semibold text-gray-700">
              Select Machine
            </label>

            <div className="relative mt-1">
              {/* Trigger */}
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="w-full px-4 py-3 rounded-xl bg-gray-200 text-left text-sm border border-transparent focus:border-[#2B237C] focus:bg-white flex justify-between items-center"
              >
                <span className="text-gray-700">
                  {form.machine || "Select a machine"}
                </span>
                <span className="text-gray-500">▼</span>
              </button>

              {/* Dropdown */}
              {open && (
                <div className="absolute z-50 mt-2 w-full bg-white border rounded-xl shadow-lg max-h-48 overflow-y-auto">
                  {machines.map((item) => (
                    <div
                      key={item}
                      onClick={() => handleSelectMachine(item)}
                      className="px-4 py-3 text-sm hover:bg-gray-100 cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-3 bg-[#2B237C] text-white py-3 rounded-xl font-bold hover:bg-[#1f1959] transition"
          >
            Submit Booking
          </button>

          <p className="text-xs text-gray-400 text-center">
            We will contact you within 24 hours
          </p>
        </form>
      </motion.div>
    </section>
  );
}
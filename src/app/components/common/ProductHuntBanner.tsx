"use client";
import React from "react";
import Link from "next/link";
import { usePlausible } from "next-plausible";

export default function ProductHuntBanner() {
  const plausible = usePlausible();

  return (
    <div className="bg-[#181127] py-2">
      <div className="container">
        <div className="flex justify-center items-center gap-2 text-white text-center">
          <span>🎉 We&apos;re live on Product Hunt!</span>
          <Link
            href="https://www.producthunt.com/posts/fibbler"
            target="_blank"
            onClick={() => {
              plausible("product_hunt_click", {
                props: {
                  location: "banner",
                },
              });
            }}
            className="text-[#FB5DA5] hover:text-[#f84f9b] font-semibold flex items-center group"
          >
            <span className="block">Check it out</span>
            <span className="inline-block ml-[10px] group-hover:ml-[20px] transition-all duration-100 ease-in-out">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

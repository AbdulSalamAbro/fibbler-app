import React from "react";
import { ArrowRight, ArrowSmDown } from "../../Icon";
import Link from "next/link";

export default function DocsMenu() {
  return (
    <div className="relative group">
      <button
        className="text-white text-[18px] leading-normal font-[600] uppercase tracking-[0.9px] flex items-center gap-[5px] hover:text-[#FB5DA5] transition-all duration-300 "
        type="button"
      >
        RESOURCES <ArrowSmDown />
      </button>

      <div className="absolute  z-10 left-1/2 transform -translate-x-1/2 hidden  w-[250px] group-hover:block">
        <div className="flex justify-center mx-auto rounded-[10px] bg-[#181127] py-[10px] px-[20px] border border-[#ffffff2f]">
          <ul className="flex flex-col gap-[12px]">
            <li>
              <Link
                href="/docs"
                className="flex gap-[10px] items-center text-[#fff] text-[16px] font-[500] satoshifont-500 leading-[138%] hover:text-[#FB5DA5] transition-all duration-300"
              >
                Technical Docs <ArrowRight />
              </Link>
            </li>
            <li>
              <Link
                href="/expert-guides"
                className="flex gap-[10px] items-center text-[#fff] text-[16px] font-[500] satoshifont-500 leading-[138%] hover:text-[#FB5DA5] transition-all duration-300"
              >
                Expert Guides <ArrowRight />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

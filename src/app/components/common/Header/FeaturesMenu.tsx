import React from "react";
import { ArrowRight, ArrowSmDown } from "../../Icon";
import Link from "next/link";

export default function FeaturesMenu() {
  return (
    <div className="relative group">
      <button
        className="text-white text-[18px] leading-normal font-[600] uppercase tracking-[0.9px] flex items-center gap-[5px] hover:text-[#FB5DA5] transition-all duration-300 "
        type="button"
      >
        Features <ArrowSmDown />
      </button>

      <div className="absolute z-10 left-1/2 transform -translate-x-1/2 hidden w-[420px] group-hover:block top-[100%] pt-[10px]">
        <div className="flex justify-center mx-auto rounded-[10px] bg-[#181127] py-[10px] px-[45px] border border-[#ffffff2f]">
          <ul className="flex flex-col gap-[12px]">
            <li>
              <Link
                href="/#plug-and-watch"
                className="flex gap-[10px] items-center text-[#fff] text-[16px] font-[500] satoshifont-500 leading-[138%] hover:text-[#FB5DA5] transition-all duration-300"
              >
                LinkedIn Ads Company Insights <ArrowRight />
              </Link>
            </li>
            <li>
              <Link
                href="/#crm-sync"
                className="flex gap-[10px] items-center text-[#fff] text-[16px] font-[500] satoshifont-500 leading-[138%] hover:text-[#FB5DA5] transition-all duration-300"
              >
                LinkedIn Ads CRM Sync <ArrowRight />
              </Link>
            </li>
            <li>
              <Link
                href="/#schedule"
                className="flex gap-[10px] items-center text-[#fff] text-[16px] font-[500] satoshifont-500 leading-[138%] hover:text-[#FB5DA5] transition-all duration-300 relative"
              >
                {/* <span
                  className="py-[6px] px-[8px] rotate-[-11deg] rounded-[5px] bg-[#FCFBFD] ml-2 inline-block left-[-21%] absolute -top-3 leading-none"
                  style={{ boxShadow: "-3px 3px 0px 0px #000" }}
                >
                  <span className="clash-bold text-[#111827] font-bold text-center text-[14px] leading-none">
                    New
                  </span>
                </span> */}
                LinkedIn Ads Scheduling <ArrowRight />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

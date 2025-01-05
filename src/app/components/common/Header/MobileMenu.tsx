"use client";
import React from "react";
import { ArrowRight } from "../../Icon";
import Link from "next/link";
import { usePlausible } from "next-plausible";
import FeaturesMenu from "./FeaturesMenu";

interface MyComponentProps {
  // isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MyComponentProps> = ({ setIsOpen }) => {
  const plausible = usePlausible();

  return (
    <div className="transition-all duration-300 ease-linear">
      <div className="mb-[66px]">
        <h3 className="text-[31px] text-[#fff] uppercase font-[600] tracking-[1.55px] ">
          FEATURES
        </h3>
        <ul className="flex flex-col gap-[12px]">
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              href="#plug-and-watch"
              className="flex gap-[10px] items-center text-[#fff] text-[16px] font-[500] satoshifont-500 leading-[138%] hover:gap-[20px] hover:pr-[28px]  transition-all duration-100 ease-in-out hover:text-[#FB5DA5] "
            >
              LinkedIn Ads Company Insights <ArrowRight />
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              href="#zaps"
              className="flex gap-[10px] items-center text-[#fff] text-[16px] font-[500] satoshifont-500 leading-[138%] hover:gap-[20px] hover:pr-[28px]  transition-all duration-100 ease-in-out hover:text-[#FB5DA5] "
            >
              LinkedIn Ads CRM Sync <ArrowRight />
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              href="#zaps"
              className="flex gap-[10px] items-center text-[#fff] text-[16px] font-[500] satoshifont-500 leading-[138%] hover:gap-[20px] hover:pr-[28px]  transition-all duration-100 ease-in-out hover:text-[#FB5DA5] "
            >
              LinkedIn Ads Webhooks <ArrowRight />
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              href="#schedule"
              className="flex gap-[10px] items-center text-[#fff] text-[16px] font-[500] satoshifont-500 leading-[138%] hover:gap-[20px] hover:pr-[28px] transition-all duration-100 ease-in-out hover:text-[#FB5DA5]"
            >
              LinkedIn Ads Scheduling <ArrowRight />
            </Link>
          </li>
        </ul>
      </div>
      <Link
        href="/#pricing"
        className="text-[31px] text-[#fff] uppercase font-[600] tracking-[1.55px] mb-[42px] block hover:text-[#FB5DA5] transition-all duration-300"
        onClick={() => setIsOpen(false)}
      >
        Pricing
      </Link>
      <div className="mb-[66px]">
        <h3 className="text-[31px] text-[#fff] uppercase font-[600] tracking-[1.55px] ">
          RESOURCES
        </h3>
        <ul className="flex flex-col gap-[12px]">
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              href="/docs"
              className="flex gap-[10px] items-center text-[#fff] text-[16px] font-[500] satoshifont-500 leading-[138%] hover:gap-[20px] hover:pr-[28px]  transition-all duration-100 ease-in-out hover:text-[#FB5DA5] "
            >
              Technical Docs <ArrowRight />
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              href="/expert-guides"
              className="flex gap-[10px] items-center text-[#fff] text-[16px] font-[500] satoshifont-500 leading-[138%] hover:gap-[20px] hover:pr-[28px]  transition-all duration-100 ease-in-out hover:text-[#FB5DA5] "
            >
              Expert Guides <ArrowRight />
            </Link>
          </li>
        </ul>
      </div>
      <h3 className="text-[31px] text-[#fff] uppercase font-[600] tracking-[1.55px] mb-[35px] hover:text-[#FB5DA5] transition-all duration-300">
        <Link href="https://app.fibbler.co/login">LOGin</Link>
      </h3>

      <Link
        href="https://app.fibbler.co/signup"
        onClick={() => {
          plausible("signup_click", {
            props: {
              location: "mobile_menu",
              button: "start_today",
            },
          });
          setIsOpen(false);
        }}
        className="text-[#FB5DA5] bg-[#fff] rounded-[7px] border-[6px] border-[#fee6e1] px-[38px] py-[13px] text-[18px] leading-normal font-[900]  tracking-normal  items-center gap-[10px] xl:ml-[18px] ml-[6] inter-font w-full flex justify-center hover:gap-[20px] hover:pr-[28px]  transition-all duration-100 ease-in-out"
      >
        <span className="block w-[95px] whitespace-nowrap">Start today</span>{" "}
        <ArrowRight />
      </Link>
    </div>
  );
};

export default MobileMenu;

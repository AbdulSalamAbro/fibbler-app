"use client";
import React, { useState } from "react";
import { ArrowRight, CloseMenu, MenuBar } from "../../Icon";
import DocsMenu from "./DocsMenu";
import Link from "next/link";
import { usePlausible } from "next-plausible";

import MobileMenu from "./MobileMenu";
import FeaturesMenu from "./FeaturesMenu";

export default function Header() {
  const [isOpen, setIsopen] = useState(false);
  const plausible = usePlausible();

  return (
    <header className="sm:pt-[33px] pt-[10px] ">
      <div className="container ">
        <div
          className={`bg-[#181127] lg:py-[14px] py-[20px] pl-[27px] pr-[22px] lg:rounded-[20px] rounded-[8px] `}
        >
          <div className="flex justify-between items-center">
            <Link href={"/"}>
              <img
                className="w-[108px] sm:w-[160px] xl:w-[194px]"
                src="/assets/img/Fibbler_logo_white.svg"
                alt="Fibbler logo"
              />
            </Link>

            <nav className="hidden lg:block">
              <ul className="flex items-center gap-[37px]">
                <li>
                  <FeaturesMenu />
                </li>
                <li>
                  <a
                    href="/#pricing"
                    className="text-white text-[18px] leading-normal font-[600] uppercase tracking-[0.9px] hover:text-[#FB5DA5] transition-all duration-300"
                  >
                    Pricing
                  </a>
                </li>

                <li>
                  <DocsMenu />
                </li>

                <li>
                  <Link
                    href="https://app.fibbler.co/login"
                    onClick={() => {
                      plausible("navigation_click", {
                        props: {
                          location: "header",
                          target: "login",
                        },
                      });
                    }}
                    className="text-white text-[18px] leading-normal font-[600] uppercase tracking-[0.9px] hover:text-[#FB5DA5] transition-all duration-300"
                  >
                    LOGin
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://app.fibbler.co/signup"
                    onClick={() => {
                      plausible("signup_click", {
                        props: {
                          location: "header",
                          button: "start_today",
                        },
                      });
                    }}
                    className=" text-[#FB5DA5] bg-[#fff] rounded-[7px] border-[6px] border-[#FEE6F1] xl:px-[38px] px-[13px] py-[13px] text-[18px] leading-normal font-[900]  tracking-normal flex items-center gap-[10px] xl:ml-[18px] ml-[6] inter-font hover:gap-[20px] hover:xl:pr-[28px] hover:pr-[3px] transition-all duration-100 ease-in-out"
                  >
                    <span className="block w-[95px] whitespace-nowrap">
                      Start today
                    </span>{" "}
                    <ArrowRight />
                  </Link>
                </li>
              </ul>
            </nav>

            <button className="lg:hidden" onClick={() => setIsopen(!isOpen)}>
              {isOpen ? <CloseMenu /> : <MenuBar />}
            </button>
          </div>

          <div
            className={`transition-all duration-500 ease-in-out lg:hidden bg-[#181127] overflow-hidden ${
              isOpen ? "max-h-screen pt-[57px] pb-[30px]" : "max-h-0"
            }`}
          >
            <MobileMenu setIsOpen={setIsopen} />
          </div>
        </div>
      </div>
    </header>
  );
}

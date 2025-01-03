"use client";
import React from "react";
import { WhiteRightArrow } from "../Icon";
import Link from "next/link";
import { usePlausible } from "next-plausible";

export default function Hero() {
  const plausible = usePlausible();

  return (
    <section className="xl:mt-[149px] sm:mt-[79px] mt-[48px]  ">
      <div className="container">
        <h1 className="text-[#181127] text-center leading-[109.7%] font-[600] sm:tracking-[0.66px] text-[27px] lg:text-[66px] sm:text-[42px] tracking-[0.27px] xl:mb-[29px] md:mb-[36px] mb-[22px] ">
          Identify{" "}
          <span className=" bg-[url('/assets/img/line-shape-1.svg')] bg-no-repeat bg-bottom bg-contain">
            influenced deals
          </span>{" "}
          from your LinkedIn Ads impression data
        </h1>
        <p className="text-[#181127] text-center sm:leading-[31px] leading-[146%] font-[500] sm:text-[22px] text-[16px] max-w-[634px] mx-auto satoshifont-500 xl:mb-[80px] md:mb-[77px] mb-[48px] px-[20px] sm:px-[0]">
          Fibbler helps you understand how LinkedIn Ads impressions influence
          your pipeline and revenue, while turning engagement data into
          actionable intent signals for your ABM program.
        </p>
        <div className="flex justify-center ">
          <Link
            href="https://app.fibbler.co/signup"
            onClick={() => {
              plausible("signup_click", {
                props: {
                  location: "hero",
                  button: "try_free",
                },
              });
            }}
            className="text-[#fff] bg-[#FB5DA5] rounded-[18px] border-[8px] border-[#FDBEDB] px-[40px] py-[20px] sm:text-[18px] text-[16px] leading-normal font-[900] tracking-normal flex items-center gap-[10px] xl:ml-[18px] ml-[6] inter-font justify-center hover:gap-[20px] hover:pr-[30px] transition-all duration-100 ease-in-out"
          >
            <span className="block  whitespace-nowrap">
              Try 30 days for free
            </span>
            <WhiteRightArrow />
          </Link>
        </div>
        <p className="text-center text-[#181127] font-[500] leading-[31px] satoshifont-500 sm:text-[14px] text-[12px]">
          Test all features. No credit card required.
        </p>
      </div>
    </section>
  );
}

"use client";
import React, { useState } from "react";
import { BlackRightMark, TargetArrow, WhiteRightArrow } from "../Icon";
import Link from "next/link";
import { usePlausible } from "next-plausible";
import * as Tooltip from "@radix-ui/react-tooltip";

export default function Pricing() {
  const [time, setTime] = useState("monthly");
  const plausible = usePlausible();

  return (
    <Tooltip.Provider delayDuration={0}>
      <section id="pricing" className="xl:pb-[161px] md:pb-[130px] pb-[86px]">
        <div className="container">
          <h1 className="text-center text-[#171127] md:text-[44px] text-[25px] leading-[127%] xl:max-w-[1071px] sm:max-w-[737px] max-w-[313px] mx-auto font-[600] ">
            Skip expensive enterprise features and complex setups. Fibbler is{" "}
            <span className="bg-[url('/assets/img/plug-and-paly-line-shape.svg')] bg-no-repeat xl:bg-[center_top_101%] md:bg-[center_top_94%] bg-[center_top_50%] inline-block h-[60px] bg-contain ">
              a plug-and-play solution.
            </span>{" "}
          </h1>

          <p className="text-center text-[16px] md:text-[20px] text-[#000] leading-[150%] font-[500] satoshifont-500 xl:mt-[10px]  mt-0">
            Transparent pricing. Pause or cancel anytime.
          </p>

          <div className="max-w-[200px]  rounded-[10px] bg-[#fcfbfd] border-[3px] border-[#181127] xl:ml-auto xl:mr-0 mx-auto xl:mt-[30px] sm:mt-[65px] mt-[92px] px-[6px] py-[7px] grid grid-cols-2 gap-[10px] relative">
            <button
              className={`text-[#181127] satoshifont-500 font-[700] leading-[150%] text-[16px] rounded-[8px] px-[15px] py-[4px] hover:bg-[#E5E0F1] transition-all duration-150 ${
                time === "monthly" && "bg-[#E5E0F1]"
              }`}
              onClick={() => setTime("monthly")}
            >
              Monthly
            </button>
            <button
              className={`text-[#181127] satoshifont-500 font-[700] leading-[150%] text-[16px] rounded-[8px] px-[15px] py-[4px]  hover:bg-[#E5E0F1] transition-all duration-150 ${
                time === "annual" && "bg-[#E5E0F1]"
              }`}
              onClick={() => setTime("annual")}
            >
              Annual
            </button>

            <div className="absolute right-[-80px] top-[-40px]">
              <span className="satoshifont-500 ml-[-5px] block rotate-[6.835deg] text-[14px] font-[900] leading-[150%]">
                Save up to 22%
              </span>
              <TargetArrow />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 xl:gap-[15px] md:grid-cols-3 lg:gap-[11px] gap-[26px] xl:mt-[34px] lg:mt-[54px] mt-[20px] clash-bold">
            <div className="md:border-[5px] border-[4px] border-[#181127] rounded-[20px] bg-[#fcfbfd] xl:px-[32px] lg:px-[20px] px-[25px] lg:pb-[20px] pb-[25px] xl:pt-[34px] lg:pt-[24px] pt-[30px] flex flex-col h-full">
              <div className="min-h-[120px]">
                <button className="cursor-default w-fit text-[19px] text-[#181127] font-[600] bg-[#e5e0f1] px-[17px] py-[14px] rounded-[10px]">
                  Growth
                </button>
                <p className="xl:text-[16px] sm:text-[14px] text-[16px] satoshifont-500 font-[500] leading-[150%] text-[#000] mt-[14px] mb-[80px]">
                  Perfect for individual marketers.
                </p>
              </div>

              <div className="mb-[43px]">
                <h1
                  className={`text-[50px] text-[#181127] font-[700] leading-[62px] ${
                    time === "monthly" ? "mb-[20px]" : ""
                  }`}
                >
                  ${time === "monthly" ? "69" : "60"}
                  <span className="text-[20px]">/month</span>
                </h1>

                {time === "monthly" ? (
                  ""
                ) : (
                  <div className="text-[16px] mb-[20px]">billed annually</div>
                )}

                <Link
                  href="https://app.fibbler.co/signup"
                  onClick={() => {
                    plausible("signup_click", {
                      props: {
                        location: "pricing",
                        button: "try_free",
                        plan: "growth",
                      },
                    });
                  }}
                  className="text-[#fff] bg-[#FB5DA5] rounded-[18px] border-[8px] border-[#FDBEDB] xl:py-[20px] py-[15px] md:py-[10px] xl:text-[18px] text-[18px] md:text-[15px] leading-normal font-[900] tracking-normal flex items-center gap-[10px] inter-font justify-center w-full hover:gap-[20px] hover:pl-[10px] transition-all duration-100 ease-in-out try-btn-340px"
                >
                  <span className="block  whitespace-nowrap">
                    Try 30 days for free
                  </span>
                  <WhiteRightArrow />
                </Link>
              </div>

              <ul className="flex-1 flex flex-col gap-[8px]">
                <li className="text-[16px] font-[700] leading-[134%] satoshifont-500 text-[#181127] flex items-center gap-[8px]">
                  <div className="w-[14px]">
                    <BlackRightMark />
                  </div>{" "}
                  Unlimited Company Insights
                </li>
                {/* <li className="text-[16px] font-[700] leading-[134%] satoshifont-500 text-[#181127] flex items-center gap-[8px]">
                  <div className="w-[14px]">
                    <BlackRightMark />
                  </div>{" "}
                  Export data to CSV
                </li> */}
                <li className="text-[16px] font-[700] leading-[134%] satoshifont-500 text-[#181127] flex items-center gap-[8px]">
                  <div className="w-[14px]">
                    <BlackRightMark />
                  </div>{" "}
                  HubSpot integration
                </li>
                <li className="text-[16px] font-[700] leading-[134%] satoshifont-500 text-[#181127] flex items-center gap-[8px]">
                  <div className="w-[14px]">
                    <BlackRightMark />
                  </div>{" "}
                  Copper CRM integration
                </li>
                <li className="text-[16px] font-[700] leading-[134%] satoshifont-500 text-[#181127] flex items-center gap-[8px]">
                  <div className="w-[14px]">
                    <BlackRightMark />
                  </div>{" "}
                  Custom webhooks to Clay
                  <Tooltip.Provider>
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-[#181127] ml-1 cursor-help">
                          <span className="text-xs">i</span>
                        </span>
                      </Tooltip.Trigger>
                      <Tooltip.Portal>
                        <Tooltip.Content
                          className="bg-white px-2 py-1 rounded shadow-lg border text-sm z-50"
                          sideOffset={5}
                        >
                          Maximum 3 webhooks can be active at the same time
                          <Tooltip.Arrow />
                        </Tooltip.Content>
                      </Tooltip.Portal>
                    </Tooltip.Root>
                  </Tooltip.Provider>
                </li>
                <li className="text-[16px] font-[700] leading-[134%] satoshifont-500 text-[#181127] flex items-center gap-[8px]">
                  <div className="w-[14px]">
                    <BlackRightMark />
                  </div>{" "}
                  Campaign scheduling
                  <Tooltip.Provider>
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-[#181127] ml-1 cursor-help">
                          <span className="text-xs">i</span>
                        </span>
                      </Tooltip.Trigger>
                      <Tooltip.Portal>
                        <Tooltip.Content
                          className="bg-white px-2 py-1 rounded shadow-lg border text-sm z-50"
                          sideOffset={5}
                        >
                          Maximum 3 campaign schedules can be active at the same
                          time
                          <Tooltip.Arrow />
                        </Tooltip.Content>
                      </Tooltip.Portal>
                    </Tooltip.Root>
                  </Tooltip.Provider>
                </li>
                <li className="text-[16px] font-[700] leading-[134%] satoshifont-500 text-[#181127] flex items-center gap-[8px]">
                  <div className="w-[14px]">
                    <BlackRightMark />
                  </div>
                  1 user
                </li>
              </ul>

              {/* <div className="bg-[#FEE6F1] rounded-[12px] xl:mx-[-20px] lg:mx-[-12px] mx-[-15px] px-6 py-6 mt-5">
                <h3 className="text-[#FB5DA5] text-[24px] font-[700] mb-4">
                  Extras
                </h3>

                <ul className="flex flex-col gap-[12px]">
                  <li className="text-[16px] font-[700] leading-[134%] satoshifont-500 text-[#181127] flex items-start gap-[8px]">
                    <div className="w-[14px] mt-[5px]">
                      <BlackRightMark />
                    </div>
                    Add an extra user for $29
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="relative md:border-[5px] border-[4px] border-[#181127] rounded-[20px] bg-[#fcfbfd] xl:px-[32px] lg:px-[20px] px-[25px] lg:pb-[20px] pb-[25px] xl:pt-[34px] lg:pt-[24px] pt-[30px] flex flex-col h-full">
              <div className="absolute text-[13px] font-[700] text-[#181127] text-center xl:px-[26px] sm:px-[5px] px-[17px] xl:py-[13px] sm:py-[3px] py-[6px] rotate-[3deg] rounded-[5px] border-[1px] border-[#181127] bg-[#fcfbfd] xl:right-[50px] right-[30px] top-[-16px] shadow-[-3px_3px_0px_0px_#000] clash-bold">
                Most popular
              </div>
              <div className="min-h-[100px]">
                <button className="cursor-default w-fit text-[19px] text-[#FB5DA5] font-[600] bg-[#FEE6F1] px-[17px] py-[14px] rounded-[10px]">
                  Unlimited
                </button>
                <p className="xl:text-[16px] sm:text-[14px] text-[16px] satoshifont-500 font-[500] leading-[150%] text-[#000] mt-[14px] mb-[60px]">
                  Perfect for teams looking to take their LinkedIn Ads efforts
                  to the next level.
                </p>
              </div>

              <div className="mb-[30px]">
                <h1
                  className={`text-[50px] text-[#181127] font-[700] leading-[62px] ${
                    time === "monthly" ? "mb-[20px]" : ""
                  }`}
                >
                  ${time === "monthly" ? "129" : "100"}
                  <span className="text-[20px]">/month</span>
                </h1>

                {time === "monthly" ? (
                  ""
                ) : (
                  <div className="text-[16px] mb-[20px]">billed annually</div>
                )}

                <Link
                  href="https://app.fibbler.co/signup"
                  onClick={() => {
                    plausible("signup_click", {
                      props: {
                        location: "pricing",
                        button: "try_free",
                        plan: "unlimited",
                      },
                    });
                  }}
                  className="text-[#fff] bg-[#FB5DA5] rounded-[18px] border-[8px] border-[#FDBEDB] xl:py-[20px] py-[15px] md:py-[10px] xl:text-[18px] text-[18px] md:text-[15px] leading-normal font-[900] tracking-normal flex items-center gap-[10px] inter-font justify-center w-full hover:gap-[20px] hover:pl-[10px] transition-all duration-100 ease-in-out try-btn-340px"
                >
                  <span className="block  whitespace-nowrap">
                    Try 30 days for free
                  </span>
                  <WhiteRightArrow />
                </Link>
              </div>

              <ul className="flex-1 flex flex-col gap-[8px]">
                <li className="text-[16px] font-[700] leading-[134%] satoshifont-500 text-[#FB5DA5] flex items-center gap-[8px]">
                  {/* <div className="w-[14px]">
                    <BlackRightMark />
                  </div>{" "} */}
                  Everything in Growth, plus:
                </li>
                <li className="text-[16px] font-[700] leading-[134%] satoshifont-500 text-[#181127] flex items-center gap-[8px]">
                  <div className="w-[14px]">
                    <BlackRightMark />
                  </div>{" "}
                  <div className="">
                    Salesforce integration
                    {/* <span
                      className="py-[4px] px-[12px] rotate-[3deg] rounded-[5px] bg-[#181127] ml-2 inline-block"
                      style={{ boxShadow: "-3px 3px 0px 0px #C7BCE1" }}
                    >
                      <span className="clash-bold text-white font-bold text-center md:text-[14px] leading-[5px] text-[11px] md:leading-[16px]">
                        New
                      </span>
                    </span> */}
                  </div>
                </li>
                <li className="text-[16px] font-[700] leading-[134%] satoshifont-500 text-[#181127] flex items-center gap-[8px]">
                  <div className="w-[14px]">
                    <BlackRightMark />
                  </div>{" "}
                  <div className="">Unlimited custom webhooks to Clay</div>
                </li>
                <li className="text-[16px] font-[700] leading-[134%] satoshifont-500 text-[#181127] flex items-center gap-[8px]">
                  <div className="w-[14px]">
                    <BlackRightMark />
                  </div>{" "}
                  <div className="">Unlimited campaign scheduling</div>
                </li>
                <li className="text-[16px] font-[700] leading-[134%] satoshifont-500 text-[#181127] flex items-center gap-[8px]">
                  <div className="w-[14px]">
                    <BlackRightMark />
                  </div>
                  Unlimited users
                </li>
              </ul>
            </div>
            <div className="relative md:border-[5px] border-[4px] border-[#181127] rounded-[20px] bg-[#fcfbfd] xl:px-[32px] lg:px-[20px] px-[25px] lg:pb-[20px] pb-[25px] xl:pt-[34px] lg:pt-[24px] pt-[30px] flex flex-col h-full">
              <div className="min-h-[100px]">
                <button className="cursor-default w-fit text-[19px] text-[#181127] font-[600] bg-[#e5e0f1] px-[17px] py-[14px] rounded-[10px]">
                  Agency
                </button>

                <p className="xl:text-[16px] sm:text-[14px] text-[16px] satoshifont-500 font-[500] leading-[150%] text-[#000] mt-[14px] mb-[60px]">
                  For agencies or freelancers working with multiple clients on
                  LinkedIn Ads.
                </p>
              </div>

              <div className="mb-[43px]">
                <h1
                  className={`text-[50px] text-[#181127] font-[700] leading-[62px] ${
                    time === "monthly" ? "mb-[20px]" : ""
                  }`}
                >
                  <span className="text-[20px] mr-1">From</span>$
                  {time === "monthly" ? "129" : "116"}
                  <span className="text-[20px]">/month</span>
                  {/* <p className="text-sm italic font-[600] text-[19px] satoshifont-500">
                    Depending on whether you want our growth or unlimited
                    features.
                  </p> */}
                </h1>

                {time === "monthly" ? (
                  ""
                ) : (
                  <div className="text-[16px] mb-[20px]">billed annually</div>
                )}

                <Link
                  href="/contact"
                  onClick={() => {
                    plausible("signup_click", {
                      props: {
                        location: "pricing",
                        button: "try_free",
                        plan: "agency",
                      },
                    });
                  }}
                  className="text-[#fff] bg-[#111827] rounded-[18px] border-[8px] border-[#606673] xl:py-[20px] py-[15px] md:py-[10px] xl:text-[18px] text-[18px] md:text-[15px] leading-normal font-[900] tracking-normal flex items-center gap-[10px] inter-font justify-center w-full hover:gap-[20px] hover:pl-[10px] transition-all duration-100 ease-in-out try-btn-340px"
                >
                  <span className="block whitespace-nowrap">Talk to us</span>
                  <WhiteRightArrow />
                </Link>
              </div>

              <ul className="flex-1 flex flex-col gap-[8px]">
                <li className="text-[16px] font-[700] leading-[134%] satoshifont-500 text-[#FB5DA5] flex items-center gap-[8px]">
                  {/* <div className="w-[14px]">
                    <BlackRightMark />
                  </div> */}
                  Everything in Growth & Unlimited, plus:
                </li>
                <li className="text-[16px] font-[700] leading-[134%] satoshifont-500 text-[#181127] flex items-center gap-[8px]">
                  <div className="w-[14px]">
                    <BlackRightMark />
                  </div>
                  2 accounts included
                </li>
                <li className="text-[16px] font-[700] leading-[134%] satoshifont-500 text-[#181127] flex items-center gap-[8px]">
                  <div className="w-[14px]">
                    <BlackRightMark />
                  </div>
                  Unlimited users
                </li>
                <li className="text-[16px] font-[700] leading-[134%] satoshifont-500 text-[#181127] flex items-center gap-[8px]">
                  <div className="w-[14px]">
                    <BlackRightMark />
                  </div>
                  Client view to switch between accounts
                </li>
              </ul>

              {/* <div className="bg-[#FEE6F1] rounded-[12px] xl:mx-[-20px] lg:mx-[-12px] mx-[-15px] px-6 py-6 mt-5">
                <h3 className="text-[#FB5DA5] text-[24px] font-[700] mb-4">
                  Extras
                </h3>

                <ul className="flex flex-col gap-[12px]">
                  <li className="text-[16px] font-[700] leading-[134%] satoshifont-500 text-[#181127] flex items-start gap-[8px]">
                    <div className="w-[14px] mt-[5px]">
                      <BlackRightMark />
                    </div>
                    <div>
                      Add an extra client account for{" "}
                      {time === "monthly" ? "$60-$99" : "$54-$89"}
                      <br />
                      (from 3-10 accounts)
                    </div>
                  </li>

                  <li className="text-[16px] font-[700] leading-[134%] satoshifont-500 text-[#181127] flex items-start gap-[8px]">
                    <div className="w-[14px] mt-[5px]">
                      <BlackRightMark />
                    </div>
                    <div>
                      Add an extra client account for{" "}
                      {time === "monthly" ? "$55-$89" : "$50-$79"}
                      <br />
                      (10+ accounts)
                    </div>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </Tooltip.Provider>
  );
}

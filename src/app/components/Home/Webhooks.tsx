import React from "react";
import { WhiteRightArrow } from "../Icon";
import Link from "next/link";

export default function Webhooks() {
  return (
    <section
      id="crm-sync"
      className="mb-[66px] sm:mb-[99px] xl:mb-[209px] overflow-hidden"
    >
      <div className="container">
        <div className="relative w-fit mx-auto">
          <h1 className="text-center text-[#171127] md:text-[44px] text-[25px] leading-[127%] md:max-w-[888px] sm:max-w-[339px] max-w-[330px] mx-auto font-[600] lg:mb-[82px] mb-[120px]">
            Fibbler zaps your{" "}
            <span className="bg-[url('/assets/img/plug-and-paly-line-shape.svg')] bg-no-repeat xl:bg-[center_top_101%] md:bg-[center_top_94%] bg-[center_top_95%] inline-block  bg-contain ">
              LinkedIn Ads data
            </span>{" "}
            straight to HubSpot or Salesforce
          </h1>
          <div className=" absolute flex flex-col xl:items-start xl:left-[88%] md:left-[85%] md:top-[70%] top-[100%] left-[65%] gap-2 items-center">
            <img
              src="/assets/img/arrow-down.svg"
              className="xl:hidden "
              alt=""
            />
            <span className="text-black sm:text-[14px] text-[12px] font-bold leading-none sm:w-[119px] w-[102px] xl:ml-12 rotate-[18deg]">
              Or Clay using webhooks!
            </span>
            <img
              className="hidden xl:block"
              src="/assets/img/arrow-up-right.svg"
              alt=""
            />
          </div>
        </div>

        <div className="bg-[#181127] rounded-[20px] border-[5px] border-[#181127] overflow-hidden satoshi-bold ">
          <div className="bg-[#FCFBFD] lg:pt-[78px] pt-[37px] xl:px-[73px] px-[40px] pb-[28px] rounded-b-[20px]">
            <h4 className="text-[#111827] text-[22px] clash-semibold font-semibold leading-[127%] text-center lg:text-start">
              CRM reporting using our native CRM integrations
            </h4>

            <div className="flex lg:items-start gap-y-6 items-center flex-col lg:flex-row justify-between  mt-[57px] lg:mb-[107px] mb-[126px]">
              <img src="/assets/img/linkedin.svg" alt="" />

              <div className="sm:w-[43px] w-[32px] sm:h-[43px] h-[32px]  flex justify-center items-center">
                <img
                  src="/assets/img/arrow-right.svg"
                  className="rotate-[90deg] lg:rotate-0"
                  alt=""
                />
              </div>
              <div className="lg:w-[17%] w-full flex  lg:block justify-center flex-col items-center">
                <div className="rounded-[3px] bg-[#181127] sm:w-[43px] w-[32px] aspect-square sm:p-[6px] p-[4px]">
                  <img src="assets/img/fibbler.svg" alt="" />
                </div>
                <h6 className="text-[#111827] leading-[123%] text-[16px]  mt-3 text-center lg:text-start">
                  Fetch companies that have viewed or interacted with your ads
                </h6>
              </div>
              <div className="sm:w-[43px] w-[32px] sm:h-[43px] h-[32px]  flex justify-center items-center">
                <img
                  src="/assets/img/arrow-right.svg"
                  className="rotate-[90deg] lg:rotate-0"
                  alt=""
                />
              </div>
              <div className="lg:w-[20%] w-full flex  lg:block justify-center flex-col items-center">
                <div className="flex items-center ">
                  <img src="assets/img/logos_hubspot-icon.svg" alt="" />
                  <img
                    src="assets/img/logos_salesforce.svg"
                    className="w-[52px]"
                    alt=""
                  />
                </div>
                <h6 className="text-[#111827] leading-[123%] text-[16px]  mt-3 text-center lg:text-start">
                  Match these with companies in the CRM and sync data
                </h6>
              </div>
              <div className="sm:w-[43px] w-[32px] sm:h-[43px] h-[32px]  flex justify-center items-center">
                <img
                  src="/assets/img/arrow-right.svg"
                  className="rotate-[90deg] lg:rotate-0"
                  alt=""
                />
              </div>
              <div className="lg:w-[21%]  w-full flex  lg:block justify-center flex-col items-center relative">
                <div className="sm:w-[43px]  sm:h-[43px]   flex justify-center items-center ">
                  <img
                    src="/assets/img/chart.svg"
                    className="lg:absolute left-0 -top-12"
                    alt=""
                  />
                </div>

                <h6 className="text-[#111827] leading-[123%] text-[16px]  mt-3 text-center lg:text-start">
                  Create reporting to visualize the real impact of LinkedIn Ads
                </h6>
              </div>
            </div>

            <h4 className="text-[#111827] text-[22px] clash-semibold font-semibold leading-[127%] text-center lg:text-start">
              Outbound workflows using our native CRM integrations
            </h4>

            <div className="flex lg:items-start gap-y-6 items-center flex-col lg:flex-row justify-between  mt-[57px] lg:mb-[107px] mb-[126px]">
              <img src="/assets/img/linkedin.svg" alt="" />

              <div className="sm:w-[43px] w-[32px] sm:h-[43px] h-[32px]  flex justify-center items-center">
                <img
                  src="/assets/img/arrow-right.svg"
                  className="rotate-[90deg] lg:rotate-0"
                  alt=""
                />
              </div>
              <div className="lg:w-[17%] w-full flex  lg:block justify-center flex-col items-center">
                <div className="rounded-[3px] bg-[#181127] sm:w-[43px] w-[32px] aspect-square sm:p-[6px] p-[4px]">
                  <img src="assets/img/fibbler.svg" alt="" />
                </div>
                <h6 className="text-[#111827] leading-[123%] text-[16px]  mt-3 text-center lg:text-start">
                  Fetch companies that have viewed or interacted with your ads
                </h6>
              </div>
              <div className="sm:w-[43px] w-[32px] sm:h-[43px] h-[32px]  flex justify-center items-center">
                <img
                  src="/assets/img/arrow-right.svg"
                  className="rotate-[90deg] lg:rotate-0"
                  alt=""
                />
              </div>
              <div className="lg:w-[20%] w-full flex  lg:block justify-center flex-col items-center">
                <div className="flex items-center ">
                  <img src="assets/img/logos_hubspot-icon.svg" alt="" />
                  <img
                    src="assets/img/logos_salesforce.svg"
                    className="w-[52px]"
                    alt=""
                  />
                </div>
                <h6 className="text-[#111827] leading-[123%] text-[16px]  mt-3 text-center lg:text-start">
                  Create workflows that send companies engaging X+ times with
                  your ads in the last 7 days to your BDR team.
                </h6>
              </div>
              {/* <div className="sm:w-[43px] w-[32px] sm:h-[43px] h-[32px]  flex justify-center items-center">
                <img
                  src="/assets/img/arrow-right.svg"
                  className="rotate-[90deg] lg:rotate-0"
                  alt=""
                />
              </div> */}
              {/* <div className="lg:w-[21%]  w-full flex  lg:block justify-center flex-col items-center relative">
                <div className="sm:w-[43px]  sm:h-[43px]   flex justify-center items-center ">
                  <img
                    src="/assets/img/chart.svg"
                    className="lg:absolute left-0 -top-12"
                    alt=""
                  />
                </div>

                <h6 className="text-[#111827] leading-[123%] text-[16px]  mt-3 text-center lg:text-start">
                  Create reporting to visualize the real impact of LinkedIn Ads
                </h6>
              </div> */}
            </div>

            <h4 className="text-[#111827] text-[22px] clash-semibold font-semibold leading-[127%] text-center lg:text-start flex items-center gap-3">
              Outbound workflows using webhooks
              {/* <span
                className="py-[4px] px-[12px] rotate-[3deg] rounded-[5px] bg-[#181127] inline-block"
                style={{ boxShadow: "-3px 3px 0px 0px #C7BCE1" }}
              >
                <span className="clash-bold text-white font-bold text-center md:text-[14px] leading-[5px] text-[11px] md:leading-[16px]">
                  Coming Soon
                </span>
              </span> */}
            </h4>

            <div className="flex lg:items-start gap-y-6 items-center flex-col lg:flex-row justify-between  mt-[57px] lg:mb-[107px] mb-[81px]">
              <img src="/assets/img/linkedin.svg" alt="" />

              <div className="sm:w-[43px] w-[32px] sm:h-[43px] h-[32px]  flex justify-center items-center">
                <img
                  src="/assets/img/arrow-right.svg"
                  className="rotate-[90deg] lg:rotate-0"
                  alt=""
                />
              </div>
              <div className="lg:w-[17%] w-full flex  lg:block justify-center flex-col items-center">
                <div className="rounded-[3px] bg-[#181127] sm:w-[43px] w-[32px] aspect-square sm:p-[6px] p-[4px]">
                  <img src="assets/img/fibbler.svg" alt="" />
                </div>
                <h6 className="text-[#111827] leading-[123%] text-[16px]  mt-3 text-center lg:text-start">
                  Fetch companies that have engaged X times with your ads
                </h6>
              </div>
              <div className="sm:w-[43px] w-[32px] sm:h-[43px] h-[32px]  flex justify-center items-center">
                <img
                  src="/assets/img/arrow-right.svg"
                  className="rotate-[90deg] lg:rotate-0"
                  alt=""
                />
              </div>
              <div className="lg:w-[20%] w-full flex  lg:block justify-center flex-col items-center">
                <div className="flex items-center ">
                  <img src="assets/img/clay.svg" alt="" />
                </div>
                <h6 className="text-[#111827] leading-[123%] text-[16px]  mt-3 text-center lg:text-start">
                  Enrich companies with ICP contacts using tools like Clay
                </h6>
              </div>
              <div className="sm:w-[43px] w-[32px] sm:h-[43px] h-[32px]  flex justify-center items-center">
                <img
                  src="/assets/img/arrow-right.svg"
                  className="rotate-[90deg] lg:rotate-0"
                  alt=""
                />
              </div>
              <div className="lg:w-[22%]  w-full flex  lg:block justify-center flex-col items-center relative">
                <div className=" ">
                  <img
                    src="/assets/img/smartlead.svg"
                    className="lg:asolute left-0 -top-12"
                    alt=""
                  />
                </div>

                <h6 className="text-[#111827] leading-[123%] text-[16px]  mt-3 text-center lg:text-start">
                  Outreach via email or LinkedIn using tools like Smartlead and
                  HeyReach
                </h6>
              </div>
            </div>

            {/* <p className="text-center text-[#111827] text-xs font-normal sm:text-[16px] leading-[123%] satoshi-regular">
              <span className="font-bold text-black">Note:</span>{" "}
              <span className="italic">
                You can also send data from your CRM directly to tools like
                Clay, Smartlead, and Heyreach. You don’t have to use webhooks.
              </span>
            </p> */}
          </div>

          <div className="py-[40px] md:px-[55px] px-[40px] flex flex-col md:flex-row md:items-center justify-between gap-9">
            <div>
              <h4 className="text-white clash-regular leading-[114%] text-[22px] text-center md:text-start">
                Expert guides to kickstart your Fibbler journey
              </h4>
              <p className="text-white font-medium satoshi-regular mt-3 text-center md:text-start">
                Here, our community shares how they have built CRM reporting and
                workflows step-by-step.
              </p>
            </div>

            <Link
              className=" text-[#fff] bg-[#FB5DA5] rounded-[28px] border-[5px] border-[#FDBEDB] px-[33px]  py-[13px] sm:text-[18px] text-[16px] leading-normal font-[900]  tracking-normal flex items-center gap-[10px] xl:ml-[18px] ml-[6] inter-font  justify-center  transition-all duration-100 ease-in-out hover:gap-[20px] hover:pr-[23px]"
              href="/expert-guides"
            >
              <span className="block  whitespace-nowrap">
                Read Expert Guides
              </span>
              <WhiteRightArrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

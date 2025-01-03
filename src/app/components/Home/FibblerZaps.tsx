import React from "react";
import { ArrowRight } from "../Icon";
import LottieYourAds from "../Animation/YourAds";
import LottieAutomaticallySend from "../Animation/AutomaticallySend";
import Link from "next/link";

export default function FibblerZaps() {
  return (
    <section className="xl:pb-[151px] md:pb-[130px] pb-[86px]">
      <div className="container">
        <h1 className="text-center text-[#181127] sm:text-[44px] text-[25px] leading-[127%] max-w-[886px] mx-auto font-[600] ">
          Fibbler zaps{" "}
          <span className="bg-[url('/assets/img/line-shape-2.svg')] bg-no-repeat bg-bottom bg-contain">
            your LinkedIn Ads data
          </span>{" "}
          straight to HubSpot or Salesforce
        </h1>
        <p className="text-center text-[#181127] sm:text-[20px] xl:text-[20px] text-[16px] sm:leading-[150%] leading-[138%] font-[500] satoshifont-500 xl:mt-[21px] md:mt-[21px] mt-[15px] xl:mb-[53px] md:mb-[50px] mb-[47px] max-w-[298px] sm:max-w-full mx-auto">
          With our CRM data sync, we will automatically sync impressions,
          clicks, and ad engagement from LinkedIn Ads directly into custom
          parameters at the company level on a weekly basis.
        </p>

        <div className="border-[5px] bg-[#fcfbfd] border-[#181127] rounded-[20px] sm:pt-[70px] pt-[49px] sm:pb-[49px] pb-[20px] xl:px-[79px] sm:px-[45px] px-[21px]">
          <div className=" grid grid-cols-1 lg:grid-cols-2 md:gap-[83px] xl:gap-[91px] gap-[39px]">
            <div>
              <div className="flex sm:gap-[11px] gap-[5px] items-center">
                <LottieYourAds />
                <h5 className="text-[#181127] font-[600] sm:text-[22px] text-[19px] sm:leading-[29px] leading-[119%] lg:max-w-[301px] sm:max-w-full max-w-[301px]">
                  Your ads work harder than you thought
                </h5>
              </div>

              <p className="text-[#181127] satoshifont-500 font-[500] sm:text-[18px] text-[16px] leading-[150%] sm:mt-[35px] mt-[29px] max-w-[466px] lg:max-w-[466px] sm:max-w-full ">
                Create advanced CRM reporting to uncover how the average number
                of ad impressions correlates with your inbound pipeline.
              </p>
            </div>
            <div>
              <div className="flex sm:gap-[11px] gap-[5px] items-center">
                <LottieAutomaticallySend />
                <h5 className="text-[#181127] font-[600] sm:text-[22px] text-[17px] sm:leading-[29px] leading-[119%] max-w-[311px] lg:max-w-[311px] sm:max-w-full">
                  Automatically send the most engaged companies to sales for
                  prospecting
                </h5>
              </div>

              <p className="text-[#181127] satoshifont-500 font-[500] sm:text-[18px] text-[16px] leading-[150%] sm:mt-[35px] mt-[29px] max-w-[466px]  lg:max-w-[475px] sm:max-w-full">
                Create workflows that automatically send the most engaged
                companies from your campaigns to your sales team for
                prospecting.
              </p>
            </div>
          </div>
          <div className="flex justify-center sm:mt-[38px] mt-[24px]">
            <Link
              href="/expert-guides"
              className=" text-[#FB5DA5] lg:text-[18px] md:text-[17px] text-[12px] leading-normal font-[800]  tracking-normal flex items-center gap-[10px]  inter-font hover:text-[#181127] transition-all duration-300"
            >
              Read how in our expert guides
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

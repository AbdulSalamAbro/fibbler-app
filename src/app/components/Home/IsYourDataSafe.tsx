import React from "react";
import LottieRealTimeRevenue from "../Animation/RealTimeRevenue";
import LottieWhatAbout from "../Animation/WhatAbout";
import Link from "next/link";
import { ArrowRight } from "../Icon";

export default function IsYourDataSafe() {
  return (
    <section className="xl:pb-[131px] md:pb-[206px] pb-[52px]">
      <div className="container">
        <h1 className="text-center text-[#171127] md:text-[44px] text-[24px] leading-[127%] xl:max-w-[1071px] sm:max-w-[600px] max-w-[332px] mx-auto font-[600] mb-[46px] md:mb-[66px]">
          The biggest question:{" "}
          <span className="bg-[url('/assets/img/is-your-data-line-shape.svg')] bg-no-repeat bg-bottom inline-block  bg-contain ">
            {" "}
            Is your data safe with us?
          </span>
        </h1>

        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-[10px] md:gap-[19px] xl:gap-[25px]">
          <div className="border-[4px] sm:border-[5px] rounded-[20px] bg-[#fcfbfd] border-[#181127] xl:pt-[52px] sm:pt-[41px] pt-[39px] xl:px-[54px] sm:px-[40px] px-[29px] xl:pb-[47px] sm:pb-[47pxpx] pb-[30px]">
            <div className="flex items-center gap-[14px]">
              <div>
                <LottieRealTimeRevenue />
              </div>
              <h1 className="text-[#181127] md:text-[19px] xl:text-[22px] text-[18px] xl:leading-[29px] md:leading-[25px] leading-[23px] font-[600] xl:max-w-[340px] md:max-w-[300px]">
                Real-Time Revenue Attribution with No Data Storage
              </h1>
            </div>
            <p className="text-[16px] sm:text-[18px] leading-[138%] sm:leading-[150%] font-[500] satoshifont-500 text-[#181127] mt-[20px] xl:mt-[32px] xl:max-w-[466px] lg:max-w-[351px]">
              We don’t store any data from your LinkedIn Ads account or your
              HubSpot/Salesforce instance.
            </p>
            <p className="text-[16px] sm:text-[18px] leading-[138%] sm:leading-[150%] font-[500] satoshifont-500 text-[#181127] mt-[20px] xl:max-w-[466px] lg:max-w-[351px]">
              Instead, we call their respective APIs in real-time and mirror the
              results to you. Loading times might be slightly longer, but it
              doesn’t get more secure than that.
            </p>
          </div>
          <div className="border-[4px] sm:border-[5px] rounded-[20px] bg-[#fcfbfd] border-[#181127] xl:pt-[52px] sm:pt-[41px] pt-[39px] xl:px-[54px] sm:px-[40px] px-[29px] xl:pb-[47px] sm:pb-[47pxpx] pb-[30px]">
            <div className="flex items-center gap-[14px]">
              <div>
                <LottieWhatAbout />
              </div>
              <h1 className="text-[#181127] md:text-[19px] xl:text-[22px] text-[18px] xl:leading-[29px] md:leading-[25px] leading-[23px] font-[600] xl:max-w-[340px] lg:max-w-[300px]">
                What about your CRM integrations?
              </h1>
            </div>
            <p className="text-[16px] sm:text-[18px] leading-[138%] sm:leading-[150%] font-[500] satoshifont-500 text-[#181127] mt-[20px] xl:mt-[32px] xl:max-w-[475px] lg:max-w-[358px]">
              With our HubSpot integration, we have read-level access to
              companies and deals, meaning we don’t have access to any
              personally identifiable information (PII).
            </p>
            <p className="text-[16px] sm:text-[18px] leading-[138%] sm:leading-[150%] font-[500] satoshifont-500 text-[#181127] mt-[20px] xl:max-w-[475px] lg:max-w-[358px]">
              To sync data from LinkedIn Ads to HubSpot, we also have
              read/write-level access to company properties.
            </p>
            <p className="text-[16px] sm:text-[18px] leading-[138%] sm:leading-[150%] font-[500] satoshifont-500 text-[#181127] mt-[20px] xl:mt-[32px] xl:max-w-[475px] lg:max-w-[358px]">
              With our Salesforce integration, we have access to accounts,
              ensuring we don’t have access to any personally identifiable
              information (PII).
            </p>
            <p className="text-[16px] sm:text-[18px] leading-[138%] sm:leading-[150%] font-[500] satoshifont-500 text-[#181127] mt-[20px] xl:max-w-[475px] lg:max-w-[358px]">
              To sync data from LinkedIn Ads to Salesforce, we leverage the
              Salesforce API, which allows access to the current, logged-in
              user’s account using APIs.
            </p>
            <p className="text-[16px] sm:text-[18px] leading-[138%] sm:leading-[150%] font-[500] satoshifont-500 text-[#181127] mt-[20px] xl:mt-[32px] xl:max-w-[475px] lg:max-w-[358px]">
              We also have access to the ‘offline_access’ scope because we
              require a refresh_token for a more secure way to handle your data.
              Note that we don’t use ‘offline_access’ in any other way.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center sm:mt-[38px] mt-[24px]">
        <Link
          href="/docs"
          className="text-[#FB5DA5] lg:text-[18px] md:text-[17px] text-[12px] leading-normal font-[800]  tracking-normal flex items-center gap-[10px]  inter-font hover:text-[#181127] transition-all duration-300"
        >
          Read more in our technical documentation
          <ArrowRight />
        </Link>
      </div>
    </section>
  );
}

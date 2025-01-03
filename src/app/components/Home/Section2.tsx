import React from "react";
import Image from "next/image";

export default function Section2() {
  return (
    <section className="xl:pb-[252px] sm:pb-[130px] pb-[85px] xl:pt-[143px] md:pt-[87px] pt-[438px] bg-[url('/assets/img/linkdlin-fibbler-sm.svg')] bg-no-repeat bg-[right_top_105px] sm:bg-none">
      <div className="max-w-[1434px] mx-auto sm:px-[24px] px-[15.5px]">
        <div className="flex">
          <div>
            <img
              className="max-w-[100%] mt-[171px] hidden sm:block"
              src="/assets/img/linkdlin-fibbler.svg"
              alt="Linkedin to Fibbler vizualization"
            />
          </div>
          <div>
            <Image
              width={938}
              height={601}
              className="max-w-[100%] mt-[-10px] sm:mt-[0px]"
              src="/assets/img/salesforce_account_details.png"
              alt="Salesforce account details"
            />
            <div className="flex sm:gap-[21px] gap-[12px] items-center mt-[11px] justify-end sm:justify-start">
              <img
                className="w-[58px] sm:w-[83px]"
                src="/assets/img/logos_salesforce.svg"
                alt="Salesforce logo"
              />
              <p className="xl:max-w-[553px] sm:max-w-[395px] max-w-[237px] text-[#111827] font-[500] sm:leading-[150%] leading-[138%] sm:text-[18px] text-[16px] satoshifont-500 rotate-[1deg]">
                With our Salesforce data sync, we will automatically sync
                impressions, clicks, and ad engagement from LinkedIn Ads
                directly into custom fields within account details in
                Salesforce.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[105px] sm:mt-0 xl:mt-[-20px]">
          <div className="relative">
            <Image
              width={1191}
              height={364}
              className="w-full"
              src="/assets/img/hubspot_companies.png"
              alt="Multiple companies view in HubSpot"
            />
            <Image
              width={396}
              height={551}
              className="absolute top-[13.28%] sm:right-[11.3%] right-[15%] w-[27%]"
              src="/assets/img/revgenius.png"
              alt="Single company view in HubSpot"
            />
          </div>
          <div className="lg:mt-[36px] sm:mt-[44px] mt-[51px]">
            <div>
              <div className="flex flex-col xl:flex-row sm:gap-[19px] gap-[4px] xl:items-center pl-[10px]">
                <img
                  className="w-[91px] sm:w-[107px]"
                  src="/assets/img/logos_hubspot.svg"
                  alt="HubSpot icon"
                />
                <p className="xl:max-w-[518px] sm:max-w-[460px] max-w-[293px] text-[#111827] font-[500] sm:leading-[150%] leading-[138%] sm:text-[18px] text-[16px] satoshifont-500 rotate-[-1.32deg]">
                  With our HubSpot data sync, we will automatically sync
                  impressions, clicks, and ad engagement from LinkedIn Ads
                  directly into custom parameters at the company level in
                  HubSpot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Linkedin } from "../../Icon";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="lg:pt-[75px] pt-[60px] xl:pb-[59px sm:pb-[36px] pb-[29px]">
      <div className="container">
        <div className="pb-[83px] flex justify-between flex-col lg:flex-row">
          <div>
            <Link href={"/"}>
              <img
                className="max-w-[148px]"
                src="/assets/img/Fibbler_logo_white.svg"
                alt="Fibbler logo"
              />
            </Link>

            <p className="text-[16px] font-[500] satoshi-regular leading-[23px] text-[#fcfbfd] xl:max-w-[341px] max-w-[279px] pt-[19px] pb-[28px]">
              Identify influenced deals from your LinkedIn Ads impression data
            </p>
            <Link href="https://se.linkedin.com/company/fibbler">
              <Linkedin />
            </Link>
          </div>
          <div className="flex gap-y-[37px] items-start justify-between mt-[25px] flex-wrap lg:flex-nowrap">
            <div className="flex sm:gap-[7px] gap-[4px] items-center flex-wrap sm:flex-nowrap">
              <a
                className="rotate-[1deg] text-[14px] xl:text-[20px] font-[700] text-[#000] sm:px-[24px] px-[10px] sm:py-[16px] py-[7px] bg-[#fcfbfd] rounded-[5px] hover:text-[#FB5DA5] transition-all duration-300"
                href="/#pricing"
              >
                Pricing
              </a>
              <Link
                className="rotate-[1deg] text-[14px] xl:text-[20px] font-[700] text-[#000] sm:px-[24px] px-[10px] sm:py-[16px] py-[7px] bg-[#fcfbfd] rounded-[5px] whitespace-nowrap hover:text-[#FB5DA5] transition-all duration-300"
                href="/docs"
              >
                Technical Docs
              </Link>
              <Link
                className="rotate-[-1deg] text-[14px] xl:text-[20px] font-[700] text-[#000] sm:px-[24px] px-[10px] sm:py-[16px] py-[7px] bg-[#fcfbfd] rounded-[5px] hover:text-[#FB5DA5] transition-all duration-300"
                href="/expert-guides"
              >
                Guides
              </Link>
              <Link
                className="rotate-[1deg] text-[14px] xl:text-[20px] font-[700] text-[#000] sm:px-[24px] px-[10px] sm:py-[16px] py-[7px] bg-[#fcfbfd] rounded-[5px] hover:text-[#FB5DA5] transition-all duration-300"
                href="/contact"
              >
                Contact
              </Link>
            </div>
            <div className="flex items-center xl:gap-[32px]  lg:gap-[18px] gap-[32px] xl:ml-[70px] lg:ml-[30px]">
              <Link href={"/docs"}>
                <img
                  className="xl:w-[53px] lg:w-[31px] w-[53px]"
                  src="/assets/img/gdpr.svg"
                  alt="GDRP logo"
                />
              </Link>
              <Link
                href={
                  "https://ecosystem.hubspot.com/marketplace/apps/fibbler-1804701"
                }
              >
                <img
                  className="xl:w-[110px] lg:w-[65px] w-[110px]"
                  src="/assets/img/hubspot-partner.svg"
                  alt="HubSpot partner logo"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between flex-col-reverse sm:flex-row flex-wrap lg:flex-nowrap gap-y-[55px]">
          <p className="text-[12px] inter-font font-[400] leading-[12px] text-[#fff]">
            © 2024 All rights reserved
          </p>
          <ul className="flex sm:flex-row flex-col xl:gap-[48px] gap-[30px] gap-y-[8px]">
            <li>
              <Link
                href="/terms-of-service"
                className="text-[12px] inter-font font-[400] leading-[12px] text-[#fff] hover:text-[#FB5DA5] transition-all duration-300"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="text-[12px] inter-font font-[400] leading-[12px] text-[#fff] hover:text-[#FB5DA5] transition-all duration-300"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="https://kiwikiwi.se/"
                className="text-[12px] inter-font font-[400] leading-[12px] text-[#fff] hover:text-[#FB5DA5] transition-all duration-300"
              >
                Designed by <span className=" font-[700]">kiwikiwi</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

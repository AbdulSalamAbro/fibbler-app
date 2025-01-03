import React from "react";

export default function PlugAndWatch() {
  return (
    <section
      id="plug-and-watch"
      className="xl:py-[151px] md:py-[130px] py-[86px]"
    >
      <div className="container">
        <h1 className="text-center text-[#181127] md:text-[44px] text-[25px] leading-[127%] md:max-w-[733px] sm:max-w-[339px] max-w-[330px] mx-auto font-[600]">
          <span className="bg-[url('/assets/img/line-shape-2.svg')] bg-no-repeat bg-bottom bg-contain xl:pl-[15px]">
            Plug in and watch your data
          </span>{" "}
          light up in under 30 seconds
        </h1>
        <p className="text-center text-[#000] sm:text-[20px]  text-[16px] sm:leading-[150%] leading-[138%] font-[500] satoshifont-500 xl:mt-[23px] md:mt-[20px] mt-[17px]  md:mb-[71px] mb-[42px] max-w-full sm:max-w-[698px] mx-auto">
          Fibbler allows you to see all companies that have viewed your ads,
          filter by specific campaigns, export all data into a CSV, view a
          timeline for each company, and match impressions with CRM data to
          uncover influenced pipeline and revenue.
        </p>

        <div className="xl:pr-[32px] md:pr-[23px] pr-[16px]">
          <div className="relative ">
            <div className="bg-[#E2DCEF] md:border-[5px] border-[4px] border-[#181127] rounded-[20px] absolute w-full h-full xl:top-[-32px] md:top-[-23px] top-[-16px] xl:right-[-32px] md:right-[-23px] right-[-16px] z-[1]"></div>
            <div className=" z-10 relative">
              <img
                className="w-full  md:border-[5px] border-[4px] border-[#181127] rounded-[20px]"
                src="/assets/img/dashboard.png"
                alt="Picture of our dashboard"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

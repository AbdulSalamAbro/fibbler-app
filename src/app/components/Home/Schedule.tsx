import React from "react";

export default function Schedule() {
  return (
    <section id="schedule" className="xl:pb-[200px] pb-[100px]">
      <div className="container">
        <div className="flex flex-col items-center xl:flex-row xl:gap-[63px] gap-[45px]">
          <div className="xl:w-[411px] ">
            <h1 className="text-center xl:text-start text-[#171127] md:text-[44px] text-[25px] leading-[127%] md:max-w-[742px] sm:max-w-[339px] max-w-[330px] mx-auto font-[600] pb-[37px]">
              Schedule ad campaigns with Fibbler and stop{" "}
              <span className="bg-[url('/assets/img/plug-and-paly-line-shape.svg')] bg-no-repeat xl:bg-[center_top_101%] md:bg-[center_top_94%] bg-[center_top_95%] inline-block  bg-contain">
                wasting ad spend
              </span>{" "}
            </h1>
            <p className="text-[#111827] sm:text-[18px] text-[16px] satoshifont-500 text-center xl:text-start max-w-[726px] xl:max-w-[401px] ">
              By default, your LinkedIn Ads are set to show all the time. When
              scheduling campaigns through Fibbler, you can ensure your budget
              is used wisely by activating them when your target audience is
              most active.
            </p>
          </div>

          <div className="flex-1 w-full">
            <div className="xl:pr-[32px] md:pr-[23px] pr-[16px]">
              <div className="relative ">
                <div className="bg-[#E2DCEF] md:border-[5px] border-[4px] border-[#181127] rounded-[20px] absolute w-full h-full xl:top-[-32px] md:top-[-23px] top-[-16px] xl:right-[-32px] md:right-[-23px] right-[-16px] z-[1]"></div>
                <div className=" z-10 relative">
                  <div className="w-full  md:border-[5px] border-[4px] border-[#181127] rounded-[20px] bg-[#FCFBFD] overflow-hidden">
                    <img
                      className="w-full"
                      src="/assets/img/schedule.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

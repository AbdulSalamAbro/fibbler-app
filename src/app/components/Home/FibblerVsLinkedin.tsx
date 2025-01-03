import React from "react";

export default function FibblerVsLinkedin() {
  return (
    <section className="xl:pb-[151px] md:pb-[130px] pb-[86px]">
      <div className="container">
        <h1 className="text-center text-[#171127] md:text-[44px] text-[25px] leading-[127%] mx-auto font-[600] pb-[82px]">
          Fibbler{" "}
          <span className="bg-[url('/assets/img/vs-line-shape.svg')] bg-no-repeat bg-bottom bg-contain ">
            vs.
          </span>{" "}
          LinkedIn&apos;s Ads Platform
        </h1>

        <div className="xl:pr-[32px] md:pr-[23px] pr-[16px]">
          <div className="relative ">
            <div className="bg-[#E2DCEF] md:border-[5px] border-[4px] border-[#181127] rounded-[20px] absolute w-full h-full xl:top-[-32px] md:top-[-23px] top-[-16px] xl:right-[-32px] md:right-[-23px] right-[-16px] z-[1]"></div>
            <div className=" z-10 relative">
              <div className="w-full  md:border-[5px] border-[4px] border-[#181127] rounded-[20px] bg-[#FCFBFD] md:pt-[70px] pt-[26px] md:pb-[51px]  lg:px-[100px] md:px-[46px]  px-[10px]">
                <table className="table-auto w-full">
                  <thead className=" ">
                    <tr>
                      <th className="text-start pb-[30px]">
                        <span className="text-[#181127] sm:text-[36px] text-[18px] clash-bold leading-[110.6%]">
                          Features
                        </span>
                      </th>
                      <th className="pb-[30px]">
                        <div className="flex gap-[11px] items-center justify-center">
                          <div className="rounded-[3px] bg-[#181127] sm:w-[43px] w-[32px] aspect-square sm:p-[6px] p-[4px]">
                            <img src="assets/img/fibbler.svg" alt="" />
                          </div>
                          <span className="text-[#181127] leading-[110.6%]  text-[12px] sm:text-[16px] text-start hidden sm:block">
                            Using <br className="hidden sm:block" />
                            Fibbler
                          </span>
                        </div>
                      </th>
                      <th className="pb-[30px] w-[92px] sm:w-[135px]">
                        <div className="flex gap-[11px] items-center justify-center">
                          <img
                            className="rounded-[3px] w-[35px] sm:w-[41px]"
                            src="assets/img/linkedin.svg"
                            alt=""
                          />

                          <span className="text-[#181127] leading-[110.6%]  text-[12px] sm:text-[16px] text-start hidden sm:block">
                            Using <br className="hidden sm:block" />
                            LinkedIn
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#B8CEDC] ">
                      <td>
                        <span className="text-[#181127] text-[12px] sm:text-[20px] leading-[125.6%] satoshifont-500 font-[500] py-[11px] sm:py-[20px] block sm:pl-[10px]">
                          See which companies view and{" "}
                          <br className="hidden sm:block" />
                          interact with your ads
                        </span>
                      </td>
                      <td>
                        <div className="flex justify-center items-center">
                          <img
                            src="assets/img/right-mark.svg"
                            className="w-[22px] md:w-[48px]"
                            alt=""
                          />
                        </div>
                      </td>
                      <td>
                        <div className="flex justify-center items-center">
                          <img
                            src="assets/img/right-mark.svg"
                            className="w-[22px] md:w-[48px]"
                            alt=""
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-[#B8CEDC] ">
                      <td>
                        <span className="text-[#181127] text-[12px] sm:text-[20px] leading-[125.6%] satoshifont-500 font-[500] py-[11px] sm:py-[20px] block sm:pl-[10px]">
                          Export Linkedin Ads data to CSV
                        </span>
                      </td>
                      <td>
                        <div className="flex justify-center items-center">
                          <img
                            src="assets/img/right-mark.svg"
                            className="w-[22px] md:w-[48px]"
                            alt=""
                          />
                        </div>
                      </td>
                      <td>
                        <div className="flex justify-center">
                          <span className="text-[#181127]  text-[12px] sm:text-[16px] leading-[125.6%] satoshifont-500 font-[500]  ">
                            Yes, but only using{" "}
                            {/* <br className="hidden sm:block" /> */}
                            matched audience
                          </span>
                        </div>
                      </td>
                    </tr>

                    <tr className="border-b border-[#B8CEDC] ">
                      <td>
                        <span className="text-[#181127] text-[12px] sm:text-[20px] leading-[125.6%] satoshifont-500 font-[500] py-[11px] sm:py-[20px] block sm:pl-[10px]">
                          See a timeline for each company
                        </span>
                      </td>
                      <td>
                        <div className="flex justify-center items-center">
                          <img
                            src="assets/img/right-mark.svg"
                            className="w-[22px] md:w-[48px]"
                            alt=""
                          />
                        </div>
                      </td>
                      <td>
                        <div className="flex justify-center">
                          <img
                            src="assets/img/dashicons_no.svg"
                            className="w-[22px] md:w-[48px]"
                            alt=""
                          />
                        </div>
                      </td>
                    </tr>

                    <tr className="border-b border-[#B8CEDC] ">
                      <td>
                        <span className="text-[#181127]  text-[12px] sm:text-[20px] leading-[125.6%] satoshifont-500 font-[500] py-[11px] sm:py-[20px] block sm:pl-[10px]">
                          Identify which companies have pipeline{" "}
                          <br className="hidden sm:block" />
                          and revenue influenced by Linkedin Ads
                        </span>
                      </td>
                      <td>
                        <div className="flex justify-center items-center">
                          <img
                            src="assets/img/right-mark.svg"
                            className="w-[22px] md:w-[48px]"
                            alt=""
                          />
                        </div>
                      </td>
                      <td>
                        <div className="flex justify-center">
                          <img
                            src="assets/img/dashicons_no.svg"
                            className="w-[22px] md:w-[48px]"
                            alt=""
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-[#B8CEDC]">
                      <td>
                        <span className="text-[#181127]  text-[12px] sm:text-[20px] leading-[125.6%] satoshifont-500 font-[500] py-[11px] sm:py-[20px] block sm:pl-[10px]">
                          Automatically sync impressions, Ad engagements{" "}
                          <br className="hidden sm:block" />
                          and clicks from LinkedIn Ads to HubSpot or Salesforce
                        </span>
                      </td>
                      <td>
                        <div className="flex justify-center items-center">
                          <img
                            src="assets/img/right-mark.svg"
                            className="w-[22px] md:w-[48px]"
                            alt=""
                          />
                        </div>
                      </td>
                      <td>
                        <div className="flex justify-center">
                          <img
                            src="assets/img/dashicons_no.svg"
                            className="w-[22px] md:w-[48px]"
                            alt=""
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-[#B8CEDC]">
                      <td className="relative py-[11px] sm:py-[20px] block sm:pl-[10px] ">
                        <div className="flex items-center gap-2">
                          <span className="text-[#181127] text-[12px] sm:text-[20px] leading-[125.6%] satoshifont-500 font-[500]">
                            Automatically sync LinkedIn Ads engagement data with
                            Clay using webhooks.
                          </span>
                          {/* <span
                            className="py-[6px] px-[12px] rotate-[3deg] rounded-[5px] bg-[#181127] inline-block leading-none"
                            style={{ boxShadow: "-3px 3px 0px 0px #C7BCE1" }}
                          >
                            <span className="clash-bold text-white font-bold text-center md:text-[14px] leading-[5px] text-[11px] md:leading-[16px]">
                              Coming soon
                            </span>
                          </span> */}
                        </div>
                      </td>
                      <td>
                        <div className="flex justify-center items-center">
                          <img
                            src="assets/img/right-mark.svg"
                            className="w-[22px] md:w-[48px]"
                            alt=""
                          />
                        </div>
                      </td>
                      <td>
                        <div className="flex justify-center">
                          <img
                            src="assets/img/dashicons_no.svg"
                            className="w-[22px] md:w-[48px]"
                            alt=""
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className=" py-[11px] sm:py-[20px] block sm:pl-[10px] relative">
                        <div className="flex items-center gap-2">
                          <span className="text-[#181127]  text-[12px] sm:text-[20px] leading-[125.6%] satoshifont-500 font-[500]">
                            Schedule ad campaigns and stop wasting ad spend
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className="flex justify-center items-center">
                          <img
                            src="assets/img/right-mark.svg"
                            className="w-[22px] md:w-[48px]"
                            alt=""
                          />
                        </div>
                      </td>
                      <td>
                        <div className="flex justify-center">
                          <img
                            src="assets/img/dashicons_no.svg"
                            className="w-[22px] md:w-[48px]"
                            alt=""
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

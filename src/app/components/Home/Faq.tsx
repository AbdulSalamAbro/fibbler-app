"use client";

import React, { useState } from "react";
import { AccordionArrow } from "../Icon";

export default function Faq() {
  const [accordionActive, setAccordionActive] = useState<number[]>([]);

  const faq: any[] = [
    {
      question: "How do you handle data security?",
      answer: [
        "We don’t store any data. Each time you update a filter or load data in Fibbler, we make a real-time request to LinkedIn’s API and mirror the results to you. Learn more about how Fibbler works in our <a href='https://fibbler.co/docs/tech-doc' class='text-[#FB5DA5] underline'>technical documentation</a>.",
      ],
    },
    {
      question:
        "How do you match companies between LinkedIn Ads and HubSpot/Salesforce?",
      answer: [
        "We match companies by comparing their website domain from LinkedIn with the one entered in the CRM. Additionally, we perform some backend magic to correct common URL errors.",
      ],
    },
    {
      question:
        "What’s the difference between a free trial and a paid package?",
      answer: [
        "Our free trial includes all available features for 30 days, giving you ample time to try everything out. After the 30-day period, you can choose to continue using Fibbler by subscribing to one of our packages.",
      ],
    },
    {
      question:
        "What’s the difference between your growth, unlimited and agency package?",
      answer: [
        "Our Growth Package is designed for individual marketers. You can connect your HubSpot or Copper CRM to LinkedIn Ads, use our webhook to integrate with outbound tools (limited to three active webhooks), or take advantage of our campaign scheduling feature (limited to three active schedules).",
        "Our Unlimited Package is designed for teams. In addition to the CRMs mentioned above, you can also integrate with Salesforce. The package includes unlimited webhooks and campaign schedules, as well as unlimited users, allowing you to assign different roles within Fibbler.",
        "Our Agency Package includes a view that allows you to seamlessly switch between different clients. It starts at $129 if you only need our growth features (which we call Agency Lite) and $229 if you need our unlimited features (which we simply call Agency).",
        "You can add extra client accounts for $99 each (for 3–10 accounts) and $89 each (for 10+ accounts) in our regular Agency package.",
        "In the Agency Lite package, you can add extra client accounts for $60 each (for 3–10 accounts) and $55 each (for 10+ accounts).",
        "Contact us to hear more. ",
      ],
    },
    {
      question: "How does billing work? Which payment methods do you support?",
      answer: [
        "Whether you choose monthly or annual subscriptions, we will send you a subscription invoice via Stripe.",
      ],
    },
    {
      question: "I have other questions",
      answer: [
        "We’re happy to answer any questions – send us an email on <a href='mailto:support@fibbler.co' class='text-[#FB5DA5] underline'>support@fibbler.co</a> and we’ll get back to you ASAP.",
      ],
    },
  ];

  const handleAccordion = (num: number) => {
    const isActive = accordionActive.includes(num);

    if (isActive) {
      // Remove the active accordion section
      setAccordionActive((prev) => prev.filter((it) => it !== num));
    } else {
      // Add the new active accordion section
      setAccordionActive((prev) => [...prev, num]);
    }
  };

  return (
    <section className="xl:pb-[167px] md:pb-[145px] pb-[114px]">
      <div className="container">
        <h1 className="text-center text-[#171127] md:text-[44px] text-[25px] leading-[127%] xl:max-w-[1071px] sm:max-w-[784px] max-w-[313px] mx-auto font-[600] mb-[27px] md:mb-[74px]">
          <span className="bg-[url('/assets/img/a-few-question-liine-shape.svg')] bg-no-repeat bg-bottom inline-block bg-contain xl:pl-[15px] xl:pr-[12px]">
            A few questions&nbsp;
          </span>
          that you might have
        </h1>

        <div className="flex flex-col sm:gap-[22px] gap-[7px] max-w-[899px] mx-auto">
          {faq.map((fq, i) => (
            <div
              key={i}
              className={`bg-[#fcfbfd] sm:border-[5px] border-[4px] rounded-[16px] border-[#181127] sm:px-[55px] px-[30px] py-[18px] cursor-pointer transition-all duration-300 ease-linear ${
                i % 2 === 0 ? "sm:mr-[22px] mr-[9px]" : "sm:ml-[22px] ml-[9px]"
              } ${
                accordionActive.find((it) => it === i + 1) &&
                "md:py-[45px] py-[26px] sm:ml-[0px] ml-[0px] sm:mr-[0px] mr-[0px]"
              }`}
              onClick={() => handleAccordion(i + 1)}
            >
              <div className="flex justify-between items-center gap-[10px]">
                <h3 className="text-[#181127] sm:text-[20px] text-[18px] sm:leading-[150%] leading-[129%] font-[600]">
                  {fq.question}
                </h3>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    accordionActive.find((it) => it === i + 1)
                      ? "rotate-[180deg]"
                      : ""
                  }`}
                >
                  <AccordionArrow />
                </div>
              </div>
              <div
                className={`transition-all duration-1000 ease-linear mt-[22px] max-w-[645px] ${
                  accordionActive.find((it) => it === i + 1)
                    ? "block"
                    : "hidden"
                }`}
              >
                {fq.answer.map(
                  (sentence: any, index: React.Key | null | undefined) => (
                    <p
                      key={index}
                      className="text-[#181127] sm:text-[18px] text-[16px] font-[500] satoshifont-500 sm:leading-[150%] leading-[138%] mb-4"
                      dangerouslySetInnerHTML={{ __html: sentence }}
                    ></p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { TargetArrow } from "../Icon";
import Link from "next/link";

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Automating Outbound Using Ad Engagement Data",
  author: {
    "@type": "Person",
    name: "Tarek Reda",
    jobTitle: "Growth @adam.ai | Founder @BluePencil | B2B Growth Advisor",
  },
  description:
    "A comprehensive guide on turning LinkedIn ad impressions and engagements into outbound leads using automation tools.",
  articleBody:
    "Turning LinkedIn ad impressions and engagements into outbound leads can seem like alchemy. But with the right tools and a sprinkle of automation magic, it's entirely achievable...",
  datePublished: new Date().toISOString(),
  publisher: {
    "@type": "Organization",
    name: "Fibbler",
  },
};

export default function Outbound() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      <section className="xl:pt-[106px] md:pt-[70px] pt-[50px] pb-10">
        <div className="container mx-auto px-4">
          <h1 className="text-[#181127] font-[600] text-[25px] lg:text-[44px] leading-[109.7%] tracking-[0.44px] text-center lg:max-w-[863px] max-w-[500px] mx-auto mb-[35px]">
            Automating Outbound Using Ad Engagement Data
          </h1>
          <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] text-center mx-auto max-w-[641px] italic mb-[35px]">
            Turning LinkedIn ad impressions and engagements into outbound leads
            can seem like alchemy. But with the right tools and a sprinkle of
            automation magic, it&apos;s entirely achievable - and dare I say,
            fun? I&apos;m excited to share my process with you. It&apos;s
            straightforward, and you&apos;ll be up and running in no time.
            Let&apos;s dive in!
          </p>

          <section className="max-w-[763px] mx-auto mb-[35px]">
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              Table of Contents
            </h2>
            <ul className="list-none text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              <li className="mb-[10px]">
                <a href="#context" className="underline hover:text-[#FB5DA5]">
                  Context
                </a>
              </li>
              <li className="mb-[10px]">
                <a
                  href="#setting-up"
                  className="underline hover:text-[#FB5DA5]"
                >
                  Setting Up LinkedIn Ads
                </a>
              </li>
              <li className="mb-[10px]">
                <a
                  href="#fetching-data"
                  className="underline hover:text-[#FB5DA5]"
                >
                  Fetching Engagement Data with Fibbler.co
                </a>
              </li>
              <li className="mb-[10px]">
                <a
                  href="#creating-list"
                  className="underline hover:text-[#FB5DA5]"
                >
                  Creating a List in HubSpot
                </a>
              </li>
              <li className="mb-[10px]">
                <a
                  href="#sending-data"
                  className="underline hover:text-[#FB5DA5]"
                >
                  Send data from HubSpot to Clay using Make.com
                </a>
              </li>
              <li className="mb-[10px]">
                <a
                  href="#enriching-data"
                  className="underline hover:text-[#FB5DA5]"
                >
                  Enriching and Filtering Data in Clay
                </a>
              </li>
              <li className="mb-[10px]">
                <a
                  href="#reaching-out"
                  className="underline hover:text-[#FB5DA5]"
                >
                  Reaching Out Through Email and LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#wrapping-up"
                  className="underline hover:text-[#FB5DA5]"
                >
                  Wrapping It Up
                </a>
              </li>
            </ul>
          </section>

          <section id="context" className="max-w-[763px] mx-auto mt-[30px]">
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              Context
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              At{" "}
              <Link
                href="https://www.adam.ai"
                rel="noopener noreferrer"
                target="_blank"
                className="text-[#FB5DA5] inter-font hover:text-[#181127] transition-all duration-300 underline"
              >
                adam.ai
              </Link>{" "}
              we had LinkedIn campaigns running successfully for a couple of
              months generating a pipeline of $300K. We wanted to capitalize on
              this with an added layer of outbound campaigns.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Instead of starting from scratch and looking at outbound as a
              separate activity, we decided to use Fibbler&apos;s ad engagement
              data as a trigger for our outbound. This way we&apos;re squeezing
              more out of these ad dollars.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Of course, you&apos;d want to run other outbound campaigns besides
              this. This of this as one of your trigger based campaigns.
            </p>
          </section>

          <section id="setting-up" className="max-w-[763px] mx-auto mt-[30px]">
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              1. Setting Up LinkedIn Ads
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              We started by running Text Ads and Lead Gen Ads on LinkedIn to
              reach professionals who might be interested in what we offer. But
              honestly, you can apply this method to any ad format, like Thought
              Leader Ads. The key is to get your brand in front of the right
              audience. This is important because it can save you some time (and
              credits 😉) in step 5 of this exercise.
            </p>
          </section>

          <section
            id="fetching-data"
            className="max-w-[763px] mx-auto mt-[30px]"
          >
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              2. Fetching Engagement Data with Fibbler
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              Once the ads were running, I wanted to know which companies were
              engaging with them. This is where{" "}
              <Link
                href="https://www.fibbler.co"
                rel="noopener noreferrer"
                target="_blank"
                className="text-[#FB5DA5] inter-font hover:text-[#181127] transition-all duration-300 underline"
              >
                Fibbler.co
              </Link>{" "}
              comes into play. It allowed us to fetch ad impressions and
              engagement data at the company level over the past 90 days and
              send it directly to HubSpot. Refer to{" "}
              <Link
                href="https://www.fibbler.co/expert-guides/crm-guide#step-1"
                rel="noopener noreferrer"
                target="_blank"
                className="text-[#FB5DA5] inter-font hover:text-[#181127] transition-all duration-300 underline"
              >
                this guide
              </Link>{" "}
              on this.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Ideally you&apos;d want to run this on a shorter time frame since
              this is an outbound trigger and you want to be more top of mind
              when you do the outreach.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              At the time of setting this up, we were running a small campaign
              on LinkedIn so I opted for a longer time frame to fetch a bigger
              pool of prospects.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              If you&apos;re running tons of campaigns and accumulating lots of
              impression and engagement data with your ads, try adjusting your
              Fibbler account to collect data for the past 7 or 30 days, this
              way you&apos;re gathering more recent prospects. The more recent,
              the more top of mind, the more likely your outbound will get
              replies.
            </p>
          </section>

          <section
            id="creating-list"
            className="max-w-[763px] mx-auto mt-[30px]"
          >
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              3. Creating a List in HubSpot
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              With the engagement data flowing into HubSpot, I created a dynamic
              list (aka Active list) of companies that showed relatively
              significant interest. Focusing on companies with 100+ impressions
              and 5+ engagements ensured we were zeroing in on prospects who
              were already somewhat familiar with our brand.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Keep in mind you&apos;ll need to adjust these minimum thresholds
              depending on your timeframe and volume of data.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Steps I followed:
            </p>
            <ul className="ml-[20px] list-disc text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              <li>Navigate to lists in HubSpot.</li>
              <li>
                Create a new company-based active list. Make sure it&apos;s
                &quot;Active&quot; so new companies that match can get added
                automatically.
              </li>
              <li>
                Set the criteria using Fibbler&apos;s new properties in HubSpot:
                <ul className="ml-[20px] list-disc mt-[10px]">
                  <li>Ad Impressions greater than or equal to 100.</li>
                  <li>Ad Engagements greater than or equal to 5.</li>
                </ul>
              </li>
            </ul>
            <div className="rounded-[16px] border-[4px] sm:border-[5px] border-[#181127] bg-[#fcfbfd] max-w-[899px] aspect-[2/1] mx-auto my-[30px] sm:my-[40px] lg:my-[81px]">
              <img
                src="/assets/img/expert-guides/hubspot-list.png"
                alt="HubSpot List Setup"
                className="w-full h-full object-contain rounded-[16px]"
              />
            </div>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Exclude companies already in the pipeline. This is important, you
              don&apos;t want your sales team coming at you all guns blazing
              that you&apos;re reaching out to their precious pipeline
              opportunities :).
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              You can either do this step here if you have a clear way of
              identifying companies in the pipeline in{" "}
              <Link
                href="https://www.hubspot.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="text-[#FB5DA5] inter-font hover:text-[#181127] transition-all duration-300 underline"
              >
                HubSpot
              </Link>
              . Otherwise you can do this step later in{" "}
              <Link
                href="https://www.clay.com"
                rel="noopener noreferrer"
                target="_blank"
                className="text-[#FB5DA5] inter-font hover:text-[#181127] transition-all duration-300 underline"
              >
                Clay
              </Link>
              .
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Save and name the list something like &quot;LinkedIn Engagement
              (Fibbler)&quot;.
            </p>
          </section>

          <section
            id="sending-data"
            className="max-w-[763px] mx-auto mt-[30px]"
          >
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              4. Send data from HubSpot to Clay using Make.com
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              To streamline the process, I used Make to automate data transfer
              from HubSpot to Clay.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Now here&apos;s a little tricky part. Clay has a native
              integration with HubSpot where you can easily fetch companies.
              However that integration is only available on the Pro plan which
              costs $800/month. We only have access to the Explorer plan for
              $349/month. As a workaround here&apos;s what I did.
            </p>
            <ul className="ml-[20px] list-disc text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              <li>
                Create a workflow inside HubSpot that sends companies in the
                list created in step 3 of this exercise to a Google spreadsheet.
              </li>
            </ul>
            <div className="rounded-[16px] border-[4px] sm:border-[5px] border-[#181127] bg-[#fcfbfd] max-w-[899px] aspect-[2/1] mx-auto my-[30px] sm:my-[40px] lg:my-[81px]">
              <img
                src="/assets/img/expert-guides/hubspot-workflow.png"
                alt="HubSpot Workflow"
                className="w-full h-full object-contain rounded-[16px]"
              />
            </div>
            <ul className="ml-[20px] list-disc text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              <li>
                Create a scenario in Make that fetches companies from the Google
                spreadsheet and send it to Clay via HTTP request. You might
                think why didn&apos;t I just fetch the companies from HubSpot
                directly using Make. What I&apos;ve found is that the HubSpot
                module inside Make can only fetch contact lists, not company
                lists. That&apos;s why we need that Google spreadsheets step.
              </li>
            </ul>
            <div className="rounded-[16px] border-[4px] sm:border-[5px] border-[#181127] bg-[#fcfbfd] max-w-[899px] aspect-[2/1] mx-auto my-[30px] sm:my-[40px] lg:my-[81px]">
              <img
                src="/assets/img/expert-guides/make-scenario.png"
                alt="Make.com Scenario"
                className="w-full h-full object-contain rounded-[16px]"
              />
            </div>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              By setting this up, every time a company was fetched by Fibbler
              and sent to HubSpot, it was added to a HubSpot list then sent to a
              Google spreadsheet then sent to a Clay table automatically.
            </p>
          </section>

          <section
            id="enriching-data"
            className="max-w-[763px] mx-auto mt-[30px]"
          >
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              5. Enriching and Filtering Data in Clay
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              With the data automatically populating in Clay, I moved on to
              enriching it. Clay allowed us to fetch any details we need e.g.
              domain, company LinkedIn URL, Industry, Employee headcount, tech
              stack, etc.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              I was then able to find decision-makers in these companies and
              fetch their contact info; emails and LinkedIn profiles.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              You can filter to your ICP. Keep in mind, most if not all leads in
              this table should be relevant assuming your LinkedIn ads targeting
              was on point.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              If you haven&apos;t excluded companies already in the pipeline,
              you can do that here in this step. For that to work automatically,
              you want to first pull companies in the pipeline from HubSpot in
              another Clay table named &quot;Active Pipeline&quot; (via Make)
              then use the Lookup feature to check if any company exists in the
              &quot;Active Pipeline&quot; Clay table.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Clay is also great at personalizing your outreach message e.g. we
              personalized a PS line mentioning that our tool can integrate
              seamlessly with their [insert tech stack name].
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Make sure to keep the auto-update feature in this Clay table
              turned on as you want this to be a streaming table, updating as
              data comes in.
            </p>
          </section>

          <section
            id="reaching-out"
            className="max-w-[763px] mx-auto mt-[30px]"
          >
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              6. Reaching out through Email and LinkedIn
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              With a refined list of decision makers, you are ready to reach
              out. I used Smartlead for email campaigns and HeyReach for
              LinkedIn outreach. You can use any sending tool of your choice as
              long as it can connect seamlessly with Clay.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Let&apos;s recap the context here. These are prospects that could
              have potentially seen and/or engaged with your ad in the past x
              number of days. However, this might not apply to all prospects
              you&apos;re reaching out to because remember Fibbler only gets you
              company-level data. The decision makers you&apos;ve fetched from
              Clay might include people that have not seen your ads.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              So you don&apos;t want to necessarily mention your ad or the fact
              that they might have seen or engaged with your ad. You want it to
              be a delightful serendipity :)
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Similar to most other outbound triggers, you don&apos;t want to
              necessarily mention the trigger.
            </p>
          </section>

          <section id="wrapping-up" className="max-w-[763px] mx-auto mt-[30px]">
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              7. Wrapping It Up
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              By automating this workflow, we&apos;ve transformed ad engagement
              data into a steady stream of high-quality outbound leads. The
              combination of LinkedIn Ads, Fibbler.co, HubSpot, Make, Clay,
              Smartlead, and HeyReach makes the process scalable. Once you have
              the setup in place, this workflow can run seamlessly in the
              background.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              As you accumulate more ad engagement data, your outbound lists
              will grow giving you more room for message testing and all that
              good stuff.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Happy prospecting!
            </p>
          </section>

          {/* Author section at the bottom */}
          <div className="max-w-[763px] mx-auto xl:py-[172px] py-[60px] sm:py-[100px]">
            <div>
              <h5 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] flex gap-[10px]">
                Written by
                <div className="mt-[10px] rotate-[-47.833deg]">
                  <TargetArrow />
                </div>
              </h5>

              <div className="mt-[15px] flex gap-[12px] items-center">
                <img
                  src="/assets/img/tarek_reda.jpeg"
                  className="border-[2px] border-[#fff] rounded-[100%] w-[48px] h-[48px]"
                  alt="Tarek Reda"
                />
                <div className="flex flex-col gap-[3px]">
                  <h6 className="text-[#111827] font-[700] text-[16px]">
                    Tarek Reda
                  </h6>
                  <p className="text-[#111827] satoshifont-500 font-[500] text-[14px]">
                    Growth @adam.ai | Founder @BluePencil | B2B Growth Advisor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

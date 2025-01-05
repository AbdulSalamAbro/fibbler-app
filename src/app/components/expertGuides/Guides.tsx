import React from "react";
import { TargetArrow } from "../Icon";
import Link from "next/link";

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline:
    "Practical Guide to Tracking LinkedIn Ad Influence in CRM with Fibbler",
  author: {
    "@type": "Person",
    name: "Freddie Hammond",
    jobTitle: "Sr. Director of RevOps @ Pinpoint",
  },
  description:
    "A comprehensive guide to setting up LinkedIn ad tracking in your CRM using Fibbler, including custom objects, workflows, and reporting.",
  articleBody:
    "Understanding the influence of your LinkedIn ads is a well established challenge. Prospect journeys are rarely linear, and the prevalence of non-conversion driving ads can make assessing the impact of your ad spend and creatives over time very difficult...",
  datePublished: new Date().toISOString(),
  publisher: {
    "@type": "Organization",
    name: "Fibbler",
  },
  about: {
    "@type": "Thing",
    name: "CRM Integration",
  },
  articleSection: "Technical Guide",
  audience: {
    "@type": "Audience",
    audienceType: "Revenue Operations Professionals",
  },
};

export default function Guides() {
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
            Practical Guide to Tracking LinkedIn Ad Influence in your CRM with
            Fibbler
          </h1>
          <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] text-center mx-auto max-w-[641px] italic mb-[35px]">
            Freddie Hammond, Sr. Director of RevOps @ Pinpoint
          </p>

          <section className="max-w-[763px] mx-auto mb-[35px]">
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              Quick Links
            </h2>
            <ul className="list-none text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              <li className="mb-[10px]">
                <Link
                  href="#getting-started"
                  className="underline hover:text-[#FB5DA5]"
                >
                  Getting Started
                </Link>
              </li>
              <li className="mb-[10px]">
                <Link href="#step-1" className="underline hover:text-[#FB5DA5]">
                  Step 1 - Fibbler CRM sync
                </Link>
              </li>
              <li className="mb-[10px]">
                <Link href="#step-2" className="underline hover:text-[#FB5DA5]">
                  Step 2 - Signals custom object
                </Link>
              </li>
              <li className="mb-[10px]">
                <Link href="#step-3" className="underline hover:text-[#FB5DA5]">
                  Step 3 - LinkedIn ad signal workflow
                </Link>
              </li>
              <li className="mb-[10px]">
                <Link href="#step-4" className="underline hover:text-[#FB5DA5]">
                  Step 4 - Setting up contact and company level views
                </Link>
              </li>
              <li className="mb-[10px]">
                <Link href="#step-5" className="underline hover:text-[#FB5DA5]">
                  Step 5 - Building scoring and notifications from signals and
                  the Fibbler properties
                </Link>
              </li>
              <li className="mb-[10px]">
                <Link href="#step-6" className="underline hover:text-[#FB5DA5]">
                  Step 6 - Signal-based reporting
                </Link>
              </li>
              <li>
                <Link
                  href="#final-notes"
                  className="underline hover:text-[#FB5DA5]"
                >
                  Final Notes
                </Link>
              </li>
            </ul>
          </section>
          <section className="max-w-[763px] mx-auto mt-[30px]">
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              Introduction
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              Understanding the influence of your LinkedIn ads is a well
              established challenge. Prospect journeys are rarely linear, and
              the prevalence of non-conversion driving ads can make assessing
              the impact of your ad spend and creatives over time very
              difficult.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              If you believe that company-level impression data like the example
              below can enhance your ABM efforts, then this guide is for you.
            </p>
            <div className="rounded-[16px] border-[4px] sm:border-[5px] border-[#181127] bg-[#fcfbfd] max-w-[899px] aspect-[2/1] mx-auto my-[30px] sm:my-[40px] lg:my-[81px]">
              <img
                src="/assets/img/expert-guides/image1.png"
                alt="Description of image"
                className="w-full h-full object-contain rounded-[16px]"
              />
            </div>
          </section>

          <section className="max-w-[763px] mx-auto mt-[30px]">
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              Some Context
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              At Pinpoint in late 2023, we launched a new approach to the way we
              think about our target audience and how we can measure our
              marketing influence.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Faced with declining success in outbound efforts and gearing up
              for a more targeted approach to our chosen segments, we knew we
              needed a more effective method of tracking and identifying
              opportunity among our target accounts.
            </p>
          </section>

          <section
            id="getting-started"
            className="max-w-[763px] mx-auto mt-[30px]"
          >
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              Getting Started
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              Fibbler’s own in-app dashboard provides useful spend and
              influenced pipeline measures for any date range chosen, along with
              the ability to export company level data.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              The real sauce, however, lies in the weekly CRM syncs for both
              HubSpot and Salesforce; these are the main subjects of this guide.
            </p>
          </section>
          <section className="max-w-[763px] mx-auto mt-[30px]">
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              Steps
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              The steps I have laid out here are all HubSpot-led, but very
              similar can be replicated by Salesforce users. As a pre-step to
              all of this, I recommend checking out the notes section below for
              details on creating and maintaining a target account list in your
              CRM.
            </p>
          </section>
          {/* hej */}

          <section className="max-w-[763px] mx-auto mt-[30px]">
            <h2
              id="step-1"
              className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]"
            >
              Step 1 - Fibbler CRM sync
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Once you have connected your LinkedIn ad account and chosen CRM in
              the{" "}
              <Link
                href="https://app.fibbler.co/app/sources"
                className="text-[#FB5DA5] inter-font hover:text-[#181127] transition-all duration-300 underline"
              >
                data sources tab
              </Link>{" "}
              , you’re ready to enable your data syncs.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              In the{" "}
              <Link
                href="https://app.fibbler.co/app/crm-sync"
                className="text-[#FB5DA5] inter-font hover:text-[#181127] transition-all duration-300 underline"
              >
                data sync tab
              </Link>{" "}
              , select to enable all three of the last 90, 30 and 7 day options.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Once enabled, you should have 9 new properties/fields in your
              company object. These will include clicks, engagements and
              impressions for each of the time period syncs.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Every 7 days, data from matched accounts will be synced into these
              properties.
            </p>
            <div className="rounded-[16px] border-[4px] sm:border-[5px] border-[#181127] bg-[#fcfbfd] max-w-[899px] aspect-[2/1] mx-auto my-[30px] sm:my-[40px] lg:my-[81px]">
              <img
                src="/assets/img/expert-guides/image9.png"
                alt="Description of image"
                className="w-full h-full object-contain rounded-[16px]"
              />
            </div>
            <h3
              id="step-2"
              className="mt-[30px] text-[16px] lg:text-[18px] font-[600]"
            >
              Step 2 - Signals custom object
            </h3>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              To set up your custom object, head to the objects dropdown in
              HubSpot settings and navigate to the Custom Objects page. Create a
              new object here, making sure to set a friendly object name and
              description.
            </p>
            <div className="rounded-[16px] border-[4px] sm:border-[5px] border-[#181127] bg-[#fcfbfd] max-w-[899px] aspect-[2/1] mx-auto my-[30px] sm:my-[40px] lg:my-[81px]">
              <img
                src="/assets/img/expert-guides/image3.png"
                alt="Description of image"
                className="w-full h-full object-contain rounded-[16px]"
              />
            </div>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              In this view, set up your primary display property as ‘Signal’, a
              single-line text property to act as a simple title for each
              record.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Properties to create:
            </p>
            <ul className="ml-[20px] list-disc text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              <li>
                Signal (single-line text): Your signal name to be easily
                interpreted across HubSpot (e.g., the name of an event)
              </li>
              <li>
                Signal Type (dropdown): The category of signal (e.g., LinkedIn
                ad impression)
              </li>
              <li>
                Signal Date (date): The date of the recorded signal. While the
                create date is always applied by default on any object in
                HubSpot, if you ever need to backdate some signals, it’s
                essential you have a field you can update.
              </li>
              <li>
                For LinkedIn signals, set up three new numeric properties: Last
                7 Days - LinkedIn Ad Clicks, Last 7 Days - LinkedIn Ad
                Engagements, Last 7 Days - LinkedIn Ad Impressions
              </li>
            </ul>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              A little dropdown field tip to spice things up: Add relevant
              emojis to your type field. This makes the whole experience more
              visual in your CRM, particularly at the contact/company level.
            </p>
            <div className="rounded-[16px] border-[4px] sm:border-[5px] border-[#181127] bg-[#fcfbfd] max-w-[899px] aspect-[2/1] mx-auto my-[30px] sm:my-[40px] lg:my-[81px]">
              <img
                src="/assets/img/expert-guides/image10.png"
                alt="Description of image"
                className="w-full h-full object-contain rounded-[16px]"
              />
            </div>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Associations are key to the successful configuration of a new
              custom object. In this case, we need to set up associations with
              contacts and companies. In the case of LinkedIn ad signals, we
              will only use the companies association, but many of your other
              signals will be at the contact level.
            </p>
            <ul className="ml-[20px] list-disc text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              <li>
                Contacts Association: Set 1-to-Many association and your
                association label to ‘Signals’
              </li>
            </ul>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Once the above is complete, you’re ready to start configuring
              signal creation flows.
            </p>
            <h3
              id="step-3"
              className="mt-[30px] text-[16px] lg:text-[18px] font-[600]"
            >
              Step 3 - LinkedIn ad signal workflow
            </h3>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              For your LinkedIn ad signals, the workflow is incredibly simple.
              This may not be the case for all signals you may wish to track,
              but the Fibbler sync makes this process easy.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              As Fibbler’s sync pushes data to the company level only, the
              workflow has a company enrollment trigger. We’re going to use the
              7 day sync fields for impressions, engagements and clicks to
              create three types of signal that refresh each 7 days with newly
              synced Fibbler data.
            </p>{" "}
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              For all three, the logic is the same, with enrollment criteria
              being ‘LinkedIn Ad [Impressions/Clicks/Engagements] 7 Days’ is
              greater than 0. Re-enrollment should be switched on and the box
              ticked to re-enroll companies each time the field is updated to a
              value greater than 0.
            </p>{" "}
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Below you can see the simple logic for the signal creation. Here
              we set the signal name with the following structure; LinkedIn Ads
              - L7D - [Impressions/Clicks/Engagements] - [Count].
            </p>
            <div className="rounded-[16px] border-[4px] sm:border-[5px] border-[#181127] bg-[#fcfbfd] max-w-[899px] aspect-[2/1] mx-auto my-[30px] sm:my-[40px] lg:my-[81px]">
              <img
                src="/assets/img/expert-guides/image4.png"
                alt="Description of image"
                className="w-full h-full object-contain rounded-[16px]"
              />
            </div>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Using a similar naming convention for all of your signals makes
              things easy to digest when viewing at contact/company level.
            </p>
            <ul className="ml-[20px] list-disc text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              <li>Set your signal date as 0 days after action running</li>
              <li>Your correct signal type</li>
              <li>
                Copy the corresponding LinkedIn impression/click/engagement
                count from the company record to your signal level versions of
                the fields
              </li>
            </ul>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Once you have created your first workflow, clone it twice to then
              configure it for the remaining two engagement types.
            </p>
            {/* <div className="rounded-[16px] border-[4px] sm:border-[5px] border-[#181127] bg-[#fcfbfd] max-w-[899px] aspect-[2/1] mx-auto my-[30px] sm:my-[40px] lg:my-[81px]">
              <img
                src="/assets/img/expert-guides/image4.png"
                alt="Description of image"
                className="w-full h-full object-contain rounded-[16px]"
              />
            </div> */}
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              You’re now ready to go. Every 7 days, if Fibbler records any
              impressions, clicks, and engagements from matched companies, each
              of your corresponding workflows will trigger to create a new
              signal against that company.
            </p>
            <h3
              id="step-4"
              className="mt-[30px] text-[16px] lg:text-[18px] font-[600]"
            >
              Step 4 - Setting up contact and company level views
            </h3>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Visualizing touchpoints and engagements at contact and company
              level has historically been painful in HubSpot and Salesforce.
              With Hubspot’s flexible new view creation, you can customize the
              way your CRM users interact with your data in all sorts of
              powerful ways.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              On both contact and company level we have created an Enrichment &
              Signals tab, playing host to all of the core data points we are
              enriching for, along with a log of associated signals. This means
              reps are equipped with all of the relevant details on that
              contact/company’s current context and engagement level without
              navigating to multiple places.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              I’d recommend trying out the data highlights, property list and
              report cards here. Report cards here work on single-object
              reports, perfect for presenting your signals data.
            </p>
            <div className="rounded-[16px] border-[4px] sm:border-[5px] border-[#181127] bg-[#fcfbfd] max-w-[899px] aspect-[2/1] mx-auto my-[30px] sm:my-[40px] lg:my-[81px]">
              <img
                src="/assets/img/expert-guides/image8.png"
                alt="Description of image"
                className="w-full h-full object-contain rounded-[16px]"
              />
            </div>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              As a sample, the below shows one approach you could take to
              looking at LinkedIn ad impression data over time at company level.
            </p>
            <div className="rounded-[16px] border-[4px] sm:border-[5px] border-[#181127] bg-[#fcfbfd] max-w-[899px] aspect-[2/1] mx-auto my-[30px] sm:my-[40px] lg:my-[81px]">
              <img
                src="/assets/img/expert-guides/image1.png"
                alt="Description of image"
                className="w-full h-full object-contain rounded-[16px]"
              />
            </div>
            <h3
              id="step-5"
              className="mt-[30px] text-[16px] lg:text-[18px] font-[600]"
            >
              Step 5 - Building scoring and notifications from signals and the
              Fibbler properties
            </h3>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              To get real value from this signal-based approach, it is going to
              take time to build up the dataset with each weekly sync. Before
              that dataset is ready to go for reporting, there is still a lot of
              value in setting up some simpler reports, scoring, and
              notifications.
            </p>
            <ul className="ml-[20px] list-disc text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              <li>
                Create your own LinkedIn engagement score field using Fibbler’s
                90 day sync (or your new signal events). Take impressions and/or
                engagements, along with your company size information, to build
                a scoring model like that you will find in Fibbler’s application
                or in the LinkedIn company engagement report.
              </li>
              <li>
                Set up lead routing, a task and slack notifications via HubSpot
                workflows once certain target accounts reach a chosen threshold
                of linkedin engagement.
              </li>
              <li>
                Build a quick custom report based on Fibbler’s 90 day
                impressions property to get an early eye on the current scope of
                deal influence after your first sync.
              </li>
              <li>
                You’ll want Companies as your primary source, and deals as a
                secondary source. Set your filter to ad impressions greater than
                x (start with 0), and then number of open deals {">"} 0 (or
                leave this to see all companies + deals). If you have renewal
                deals you’ll likely want to filter these out using a deal
                pipeline filter. You can then choose to view this by company in
                a table, or as counts, viewing the number of influenced records.
              </li>
            </ul>
            <h3
              id="step-6"
              className="mt-[30px] text-[16px] lg:text-[18px] font-[600]"
            >
              Step 6 - Signal-based reporting
            </h3>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Once you have a few weeks worth of syncs, you’ll be ready to take
              your reporting to the next level. As of early August 24, we’ve
              just started to test the waters with this reporting in HubSpot,
              but I have laid out a few of the useful reports we’re working with
              to date.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              To start with, try out the below pivot table in a couple of
              different orientations. This helps to show the trend in deal
              creation compared to the months in which impressions for those
              companies were registered. Using this we can start to see trends
              in engagement prior to deal creation as well as post.
            </p>
            <div className="rounded-[16px] border-[4px] sm:border-[5px] border-[#181127] bg-[#fcfbfd] max-w-[899px] aspect-[2/1] mx-auto my-[30px] sm:my-[40px] lg:my-[81px]">
              <img
                src="/assets/img/expert-guides/image7.png"
                alt="Description of image"
                className="w-full h-full object-contain rounded-[16px]"
              />
            </div>
            <ol className="ml-[20px] list-decimal text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              <li className="mb-[15px]">
                <span className="font-semibold">By Company Name</span>
                <ol className="ml-[20px] list-[lower-alpha] mt-[10px]">
                  <li>Chart type: Pivot table</li>
                  <li>Sources: Companies (primary), Deals, Signals</li>
                  <li>
                    Filters: Signal Type is any of LinkedIn Ad Impression,
                    pipeline is new business and deal create date is this
                    quarter (can always change this in the future)
                  </li>
                  <li>Rows: Deal Create Date - Monthly and Company Name</li>
                  <li>Columns: Signal Date - Monthly (rename for clarity)</li>
                  <li>
                    Values: Sum of your signal property for L7D LinkedIn ad
                    impressions
                  </li>
                </ol>
              </li>
              <li className="mb-[15px]">
                <span className="font-semibold">By Company/Deal Count</span>
                <ol className="ml-[20px] list-[lower-alpha] mt-[10px]">
                  <li>Chart type: Pivot table</li>
                  <li>Sources: Companies (primary), Deals, Signals</li>
                  <li>
                    Filters: Signal Type is any of LinkedIn Ad Impression,
                    pipeline is new business and deal create date is this
                    quarter (can always change this in the future)
                  </li>
                  <li>Rows: Deal Create Date - Monthly</li>
                  <li>Columns: Signal Date - Monthly (rename for clarity)</li>
                  <li>
                    Values: Deal count and sum of your signal property for L7D
                    LinkedIn ad impressions
                  </li>
                </ol>
              </li>
            </ol>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Once you have a working test here, try out the same logic using
              all of your different signal types to see how different signals
              (and combinations) might be contributing to deal influence.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Next up, let’s get a measure of the level of continual impressions
              registered among your companies week on week. The below examples
              display companies with a LinkedIn impression signal each week,
              with the first showing company count and average number of
              impressions per company and the second showing the same, but only
              for companies with more than 25 impressions in that week.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Where this gets far more interesting is in applying list-based
              filters to analyze impressions and engagement among specific
              segments. If you’re running ads to target segments, this is a key
              report to get set up.
            </p>
            <div className="ml-[20px] text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px] space-y-[10px]">
              <div>
                <strong>Chart type:</strong> Combination
              </div>
              <div>
                <strong>Sources:</strong> Companies (primary), Signals
              </div>
              <div>
                <strong>Filters:</strong> Signal Type is any of LinkedIn Ad
                Impression and signal level ad impressions property greater than
                x (or remove if for first chart)
              </div>
              <div>
                <strong>X-axis:</strong> Signal Date - Weekly
              </div>
              <div>
                <strong>Y-axis 1:</strong> Count of companies
              </div>
              <div>
                <strong>Y-axis 2:</strong> Apply an average to your L7D -
                LinkedIn Ad Impressions signal property
              </div>
              <div>
                <strong>Breakdown:</strong> Try using something like an account
                tier dropdown, company headcount range or industry here for
                deeper analysis
              </div>
            </div>
            <div className="rounded-[16px] border-[4px] sm:border-[5px] border-[#181127] bg-[#fcfbfd] max-w-[899px] aspect-[2/1] mx-auto my-[30px] sm:my-[40px] lg:my-[81px]">
              <img
                src="/assets/img/expert-guides/image6.png"
                alt="Description of image"
                className="w-full h-full object-contain rounded-[16px]"
              />
            </div>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              For a more basic report, the below example is proving useful to
              track our LinkedIn reach at large on a monthly basis. This shows
              companies and associated deals with a certain threshold of
              LinkedIn impressions by month. Just as above, an impressions
              average could be applied here also. The logic for creation is the
              same as above, but including the deals object as a secondary
              source.
            </p>
            <div className="rounded-[16px] border-[4px] sm:border-[5px] border-[#181127] bg-[#fcfbfd] max-w-[899px] aspect-[2/1] mx-auto my-[30px] sm:my-[40px] lg:my-[81px]">
              <img
                src="/assets/img/expert-guides/image2.png"
                alt="Description of image"
                className="w-full h-full object-contain rounded-[16px]"
              />
            </div>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              The real goal here is to pinpoint what it takes to get to the
              ideal level of regular impressions and engagement in an account /
              segment to meaningfully influence pipeline over the longer term.
            </p>
          </section>

          <section className="max-w-[763px] mx-auto mt-[30px]">
            <h2
              id="final-notes"
              className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]"
            >
              Final notes
            </h2>
            <h3 className="text-[16px] lg:text-[18px] font-[600] mt-[15px] mb-[10px]">
              Getting your TAM into the CRM
            </h3>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Remember, Fibbler is only going to sync to companies that already
              exist in your CRM, so make sure at the very least your targeted
              audiences on LinkedIn are well captured in your CRM.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              I would thoroughly recommend mapping out, creating and enriching
              your entire TAM in your CRM. This is a worthwhile exercise so you
              can start analyzing engagement across your target segments from a
              variety of angles.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              We like to use the
              <Link
                href="https://blog.hubspot.com/marketing/tam-sam-som"
                className="text-[#FB5DA5] inter-font hover:text-[#181127] transition-all duration-300 underline"
              >
                TAM/SAM/SOM model here
              </Link>
              , layering in lots of our historic sales and marketing data to
              create a model for tagging accounts as tier 1, 2, or 3 in relation
              to their suitability as a prospect/customer. Using tools like{" "}
              <Link
                href="https://www.clay.com/"
                className="text-[#FB5DA5] inter-font hover:text-[#181127] transition-all duration-300 underline"
              >
                Clay
              </Link>
              , you can keep your CRM properly enriched on any schedule you
              choose.
            </p>

            <h3 className="text-[16px] lg:text-[18px] font-[600] mt-[15px] mb-[10px]">
              Hubspot’s custom object limits
            </h3>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Note that in HubSpot there are limitations to Custom Object sizes.
              <Link
                href="https://legal.hubspot.com/hubspot-product-and-services-catalog"
                className="text-[#FB5DA5] inter-font hover:text-[#181127] transition-all duration-300 underline"
              >
                View the HubSpot product catalog
              </Link>{" "}
              to view most up to date information on technical limits. With
              upgrades to your package you can have a maximum capacity (as of
              2024), of 50 million custom object records.
            </p>

            <h3 className="text-[16px] lg:text-[18px] font-[600] mt-[15px] mb-[10px]">
              Tracking property changes in HubSpot
            </h3>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              If you’re a HubSpot user, you may have noticed an awesome new
              feature that allows you to track changes to up to 30 properties in
              your instance.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              We’re now using this across a range of different fields at deal
              and company level; from deal amounts, to close dates, renewal
              value and churn risk statuses, along with a number of our product
              usage metrics.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              While it could be valuable to set this up for Fibbler updates, the
              reporting flexibility and ability to host these ‘signals’ among
              your other types of touchpoint using the custom object pathway
              should give you a more powerful dataset to work with to inform
              decision making.
            </p>
            <div className="rounded-[16px] border-[4px] sm:border-[5px] border-[#181127] bg-[#fcfbfd] max-w-[899px] aspect-[2/1] mx-auto my-[30px] sm:my-[40px] lg:my-[81px]">
              <img
                src="/assets/img/expert-guides/image11.png"
                alt="Description of image"
                className="w-full h-full object-contain rounded-[16px]"
              />
            </div>
          </section>

          <div className="max-w-[763px] mx-auto xl:py-[172px] py-[60px] sm:py-[100px]">
            <div>
              <h5 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] flex gap-[10px]">
                Written by
                <div className="mt-[10px]  rotate-[-47.833deg]">
                  <TargetArrow />
                </div>
              </h5>

              <div className="mt-[15px] flex gap-[12px] items-center">
                <img
                  src="/assets/img/freddie.jpeg"
                  className="border-[2px] border-[#fff] rounded-[100%]"
                  alt=""
                />
                <div className="flex flex-col gap-[3px]">
                  <h6 className="text-[#111827] font-[700] text-[16px]">
                    Freddie Hammond
                  </h6>
                  <p className="text-[#111827] satoshifont-500 font-[500] text-[14px]">
                    Sr. Director of RevOps @ Pinpoint
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

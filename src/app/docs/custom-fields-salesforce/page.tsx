import React from "react";
import Header from "../../components/common/Header/Header";

export default function AccountCustomFieldsDocs() {
  return (
    <main>
      <Header />
      <section className="xl:pt-[106px] md:pt-[70px] pt-[50px] pb-10">
        <div className="container mx-auto px-4">
          <h1 className="text-[#181127] font-[600] text-[25px] lg:text-[44px] leading-[109.7%] tracking-[0.44px] text-center lg:max-w-[863px] max-w-[500px] mx-auto mb-[35px]">
            Account Custom Fields for LinkedIn Data
          </h1>
          <p className="font-light text-[#181127] text-[16px] lg:text-[18px] max-w-[763px] mx-auto mb-[35px]">
            This guide is for users who prefer to manually create custom fields
            in their CRM, instead of having Fibbler automatically set them up
            when enabling data sync.
          </p>
          {/* Quick Links */}
          <section className="max-w-[763px] mx-auto mb-[35px]">
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              Quick Links
            </h2>
            <ul className="list-none text-[#181127] text-[16px] lg:text-[18px] font-[500] xl:leading-[28px]">
              <li className="mb-[10px]">
                <a
                  href="#create-fields"
                  className="underline hover:text-[#FB5DA5]"
                >
                  Creating Custom Fields
                </a>
              </li>
              <li className="mb-[10px]">
                <a
                  href="#set-security"
                  className="underline hover:text-[#FB5DA5]"
                >
                  Setting Field-Level Security
                </a>
              </li>
              <li className="mb-[10px]">
                <a
                  href="#read-permission"
                  className="underline hover:text-[#FB5DA5]"
                >
                  Field Read Permission
                </a>
              </li>
              <li className="mb-[10px]">
                <a
                  href="#api-access"
                  className="underline hover:text-[#FB5DA5]"
                >
                  API Access to Account Object
                </a>
              </li>
            </ul>
          </section>

          {/* Creating Custom Fields */}
          <section id="create-fields" className="max-w-[763px] mx-auto">
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              Creating Custom Fields
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] xl:leading-[28px]">
              You will need to create custom fields for LinkedIn impressions,
              clicks, and engagements for different intervals (90, 30, and 7
              days).
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] xl:leading-[28px] mt-[20px]">
              Follow these steps:
            </p>
            <ol className="list-decimal ml-[20px] text-[#181127] text-[16px] lg:text-[18px] font-[500] xl:leading-[28px]">
              <li>
                Go to Salesforce Setup and navigate to{" "}
                <strong>Object Manager</strong> &gt; <strong>Account</strong>{" "}
                &gt; <strong>Fields & Relationships</strong> &gt;{" "}
                <strong>New</strong>.
              </li>
              <li>
                Select <strong>Number</strong> as the field type and configure
                the following details:
                <ul className="ml-[20px] list-disc">
                  <li>
                    <strong>Field Label:</strong> LinkedIn Clicks 30 Days
                  </li>
                  <li>
                    <strong>Field Name:</strong> fibbler_linkedin_clicks_30_days
                  </li>
                  <li>
                    <strong>API Name:</strong>{" "}
                    fibbler_linkedin_clicks_30_days__c
                  </li>
                  <li>
                    <strong>Data Type:</strong> Number(18, 0)
                  </li>
                </ul>
              </li>
              <li>
                Set the <strong>Field-Level Security</strong> to visible for the
                required profiles.
              </li>
              <li>
                Repeat the above steps for the following fields:
                <ul className="ml-[20px] list-disc">
                  <li>
                    <strong>LinkedIn Clicks (90, 30, 7 days)</strong>
                  </li>
                  <li>
                    <strong>LinkedIn Impressions (90, 30, 7 days)</strong>
                  </li>
                  <li>
                    <strong>LinkedIn Engagements (90, 30, 7 days)</strong>
                  </li>
                </ul>
              </li>
            </ol>
          </section>

          {/* Field-Level Security */}
          <section
            id="set-security"
            className="max-w-[763px] mx-auto mt-[30px]"
          >
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              Setting Field-Level Security
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] xl:leading-[28px]">
              After creating the custom fields, go to{" "}
              <strong>Set Field-Level Security</strong> and ensure that the
              fields are visible for the necessary profiles. This ensures users
              with specific profiles have access to these fields.
            </p>
            <div className="rounded-[16px] border-[4px] sm:border-[5px] border-[#181127] bg-[#fcfbfd]  mx-auto my-[30px] sm:my-[40px] lg:my-[81px]">
              <img
                src="/assets/img/salesforce-field-level.png"
                alt="Description of image"
                className="w-full h-full object-contain rounded-[16px]"
              />
            </div>
          </section>

          {/* Read Permission */}
          <section
            id="read-permission"
            className="max-w-[763px] mx-auto mt-[30px]"
          >
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              Field Read Permission
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] xl:leading-[28px]">
              Make sure the profiles have <strong>Read</strong> permissions for
              the custom fields. Navigate to the profile, go to{" "}
              <strong>Object Settings</strong> &gt; <strong>Account</strong>{" "}
              &gt; <strong>Field Permissions</strong> and enable read access.
            </p>
          </section>

          {/* API Access */}
          <section id="api-access" className="max-w-[763px] mx-auto mt-[30px]">
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              API Access to Account Object
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] xl:leading-[28px]">
              The Fibbler integration requires API access to the{" "}
              <strong>Account</strong> object to push LinkedIn ads data into
              these custom fields. Ensure that the profiles have API access to
              the Account object and are able to query and update it.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] xl:leading-[28px]">
              The endpoints used are:
              <ul className="ml-[20px] list-disc">
                <li>
                  <strong>sobjects/Account</strong>: To push data into the
                  custom fields.
                </li>
                <li>
                  <strong>query</strong>: To retrieve the Account details (like
                  the domain) to match with LinkedIn data.
                </li>
              </ul>
            </p>
          </section>

          {/* Further Questions */}
          <section className="max-w-[763px] mx-auto mt-[30px]">
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              Further Questions
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] xl:leading-[28px]">
              If you have further questions, feel free to contact us at{" "}
              <a
                href="mailto:support@fibbler.co"
                className="text-[#FB5DA5] underline hover:text-[#f7338b]"
              >
                support@fibbler.co
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}

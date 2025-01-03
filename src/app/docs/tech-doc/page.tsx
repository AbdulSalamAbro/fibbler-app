import React from "react";
import Header from "../../components/common/Header/Header";

export default function TechnicalDocs() {
  return (
    <main>
      <Header />
      <section className="xl:pt-[106px] md:pt-[70px] pt-[50px] pb-10">
        <div className="container mx-auto px-4">
          <h1 className="text-[#181127] font-[600] text-[25px] lg:text-[44px] leading-[109.7%] tracking-[0.44px] text-center lg:max-w-[863px] max-w-[500px] mx-auto mb-[35px]">
            Technical Documentation for Fibbler
          </h1>
          <section className="max-w-[763px] mx-auto mb-[35px]">
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              Quick Links
            </h2>
            <ul className="list-none text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              <li className="mb-[10px]">
                <a
                  href="#company-insights"
                  className="underline hover:text-[#FB5DA5]"
                >
                  Fibbler company insights
                </a>
              </li>
              <li className="mb-[10px]">
                <a href="#crm-sync" className="underline hover:text-[#FB5DA5]">
                  Fibbler CRM Data Sync
                </a>
              </li>
              <li className="mb-[10px]">
                <a
                  href="#permissions"
                  className="underline hover:text-[#FB5DA5]"
                >
                  Permissions Required
                </a>
              </li>
              <li className="mb-[10px]">
                <a href="#gdpr" className="underline hover:text-[#FB5DA5]">
                  Are you GDPR compliant?
                </a>
              </li>
            </ul>
          </section>
          <section className="max-w-[763px] mx-auto">
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              Overview
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              One of the most common questions we receive is, &apos;How does
              your tool Fibbler actually work, what kind of permissions do you
              need from our CRM, and why?&apos;
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Fibbler works in two different ways:
            </p>
          </section>

          <section className="max-w-[763px] mx-auto mt-[30px]">
            <h3
              id="company-insights"
              className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]"
            >
              Fibbler in-app Company Insights
            </h3>
            <ol className="list-decimal ml-[20px] text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              <li>
                <strong>Customer Connection:</strong>
                <ul className="ml-[20px] list-disc">
                  <li>
                    <strong>Step 1:</strong> The customer connects to LinkedIn
                    and HubSpot or Salesforce through Fibbler.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Data Retrieval:</strong>
                <ul className="ml-[20px] list-disc">
                  <li>
                    <strong>Step 2:</strong> Fibbler makes an API request to
                    LinkedIn to retrieve ads data.
                  </li>
                  <li>
                    <strong>Step 3:</strong> Simultaneously, Fibbler retrieves
                    all deals from HubSpot or Salesforce based on the date range
                    selected by the customer.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Data Matching:</strong>
                <ul className="ml-[20px] list-disc">
                  <li>
                    <strong>Step 4:</strong> Fibbler matches the LinkedIn ad
                    company data with the HubSpot or Salesforce company data
                    based on the domain.
                  </li>
                </ul>
              </li>
            </ol>
            <div className="rounded-[16px] border-[4px] sm:border-[5px] border-[#181127] bg-[#fcfbfd] max-w-[899px] aspect-[2/1] mx-auto my-[30px] sm:my-[40px] lg:my-[81px]">
              <img
                src="/assets/img/docs/insights_tech_docs.png"
                alt="How insights works"
                className="w-full h-full object-contain rounded-[16px]"
              />
            </div>
          </section>

          <section className="max-w-[763px] mx-auto mt-[30px]">
            <h3
              id="crm-sync"
              className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]"
            >
              Fibbler CRM Data Sync
            </h3>
            <ol className="list-decimal ml-[20px] text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              <li>
                <strong>Connect to LinkedIn:</strong> The customer connects to
                LinkedIn.
              </li>
              <li>
                <strong>Connect to CRM:</strong> The customer also connects to
                HubSpot or Salesforce.
              </li>
              <li>
                <strong>Choose Sync Duration:</strong> The user selects whether
                to sync data for 7, 30, or 90 days.
              </li>
              <li>
                <strong>Request LinkedIn Ads Data:</strong> Fibbler makes an API
                request to LinkedIn to retrieve ads data.
              </li>
              <li>
                <strong>Check CRM for Account:</strong> Fibbler searches for the
                account in Salesforce or HubSpot based on the domain from the
                LinkedIn data to check if the account exists.
              </li>
              <li>
                <strong>Push Data to Salesforce:</strong> If the account exists,
                Fibbler pushes LinkedIn ad clicks, impressions, and engagement
                data to the corresponding Salesforce or HubSpot account
                properties for the chosen duration.
              </li>
            </ol>
            <div className="rounded-[16px] border-[4px] sm:border-[5px] border-[#181127] bg-[#fcfbfd] max-w-[899px] aspect-[2/1] mx-auto my-[30px] sm:my-[40px] lg:my-[81px]">
              <img
                src="/assets/img/docs/datasync_tech_docs.png"
                alt="Graph on how to connect our datasource sync"
                className="w-full h-full object-contain rounded-[16px]"
              />
            </div>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              It will then continue to update data every Sunday until turned
              off.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Note: it will only update already existing companies/accounts and
              not create new ones.
            </p>
          </section>

          <section id="permissions" className="max-w-[763px] mx-auto mt-[30px]">
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              Permissions Required
            </h2>
            <h3 className="text-[16px] lg:text-[18px] font-[600] mt-[15px] mb-[10px]">
              LinkedIn Ads:
            </h3>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              The user needs to have read-only access to your ad account.
              Additionally, we have write access to your personal member profile
              solely for retrieving publicly available company logos from
              LinkedIn.
            </p>

            <h3 className="text-[16px] lg:text-[18px] font-[600] mt-[15px] mb-[10px]">
              HubSpot:
            </h3>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              <span className="font-bold underline">Insights view:</span> The
              user needs to have read-level access to companies and deals.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              <span className="font-bold underline">Data sync:</span> The user
              also need read/write-level access to company properties
            </p>

            <h3 className="text-[16px] lg:text-[18px] font-[600] mt-[15px] mb-[10px]">
              Salesforce:
            </h3>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              <span className="font-bold underline">Insights view:</span> The
              user needs to have access to Accounts, Opportunity.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              <span className="font-bold underline">Data sync:</span> The user
              needs to have read-level access to Accounts, Opportunity and
              read/write-level access to CustomField. To sync data from LinkedIn
              Ads to Salesforce, we leverage the Salesforce API, which allows
              access to the current, logged-in user’s account using APIs.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              We also have access to the ‘offline_access’ scope because we
              require a refresh_token for a more secure way to handle your data.
              Note that we don’t use ‘offline_access’ in any other way.
            </p>
          </section>

          <section id="gdpr" className="max-w-[763px] mx-auto mt-[30px]">
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              Are you GDPR compliant?
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Yes! We don’t store any information from your LinkedIn Ads account
              or your HubSpot/Salesforce instance. Instead, we call their
              respective APIs in real-time.
            </p>

            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Data transmitted during API requests between LinkedIn and
              HubSpot/Salesforce is encrypted using Transport Layer Security
              (TLS). This means that all API communications occur over HTTPS,
              ensuring that data in transit is securely encrypted and protected
              from unauthorized interception.
            </p>

            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Offline access tokens are protected and managed through several
              security measures. Firstly, tokens stored in our database are
              encrypted using Advanced Encryption Standard (AES), ensuring that
              even in the event of a data breach, the tokens remain secure.
              Access to these tokens is tightly controlled, with only authorized
              services having the ability to read or use them. Regarding your
              concern about data encryption in API requests: The data coming
              from an API is usually encrypted during transmission using TLS
              (HTTPS). While the data itself might not be encrypted once it is
              received.
            </p>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] mt-[20px]">
              Note. We don&apos;t have a DPA since there is no personal data
              being handled. Hence, GDPR does not apply to Fibbler.
            </p>
          </section>

          <section className="max-w-[763px] mx-auto mt-[30px]">
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              Further Questions
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              Do you have any other questions? Send us a message at{" "}
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

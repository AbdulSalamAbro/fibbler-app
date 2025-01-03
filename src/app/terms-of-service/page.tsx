import React from "react";
import { SUPPORT_EMAIL } from "../CONSTS/consts";
import Header from "../components/common/Header/Header";

export default function TermsOfService() {
  return (
    <main>
      <Header />
      <section className="xl:pt-[106px] md:pt-[70px] pt-[50px] pb-10">
        <div className="container mx-auto px-4">
          <h1 className="text-[#181127] font-[600] text-[25px] lg:text-[44px] leading-[109.7%] tracking-[0.44px] text-center lg:max-w-[863px] max-w-[500px] mx-auto mb-[35px]">
            Terms of Service for Fibbler
          </h1>

          <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] text-center mx-auto max-w-[641px] italic mb-[35px]">
            Effective Date: 26 December 2023
          </p>

          <section className="max-w-[763px] mx-auto">
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              Overview
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              Welcome to Fibbler. We provide a platform to connect LinkedIn Ads
              directly with your CRM, enabling you to sync data, including
              historical data, directly into our platform. These Terms of
              Service govern your use and access to our services and platform.
            </p>
          </section>

          <section className="max-w-[763px] mx-auto mt-[30px]">
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              Registration and Use
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              You can register for Fibbler on our website. Upon registration,
              you agree to provide accurate information and use our services in
              compliance with applicable laws and these terms.
            </p>
          </section>

          <section className="max-w-[763px] mx-auto mt-[30px]">
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              Payment Terms
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              Fibbler offers subscription services billed monthly or annually
              through Stripe. We do not offer refunds. Ensure your subscription
              aligns with your needs before purchasing.
            </p>
            <h3 className="mt-[20px] text-[16px] lg:text-[18px] font-[600]">
              Price Changes
            </h3>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              Fibbler reserves the right to implement annual price adjustments
              to reflect changes in our service offerings, market conditions,
              and operational costs. We will provide advance notice of any price
              changes to our customers.
            </p>
            <h3 className="mt-[20px] text-[16px] lg:text-[18px] font-[600]">
              Cancellation Policy
            </h3>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              We understand that your circumstances and preferences can change,
              which is why we&apos;ve made it easy for you to cancel your
              subscription at any time. Here&apos;s what you need to know about
              cancelling your subscription:
            </p>
            <ul className="ml-[20px] list-disc text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              <li>
                <strong>Monthly Subscriptions:</strong> If you decide to cancel
                your monthly subscription, your cancellation will take effect at
                the end of your current billing cycle. This means you can enjoy
                your subscription benefits until the end of the month
                you&apos;ve already paid for.
              </li>
              <li>
                <strong>Annual Subscriptions:</strong> For annual subscriptions,
                if you choose to cancel, your subscription will remain active
                until the end of your current annual billing period. This means
                you can enjoy your subscription until the annual period
                you&apos;ve paid for concludes.
              </li>
            </ul>
            <p className="mt-[20px] text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              To cancel your subscription, simply navigate to the &apos;Manage
              Subscription&apos; section in your account settings and follow the
              instructions for cancellation. If you have any questions or need
              assistance with the cancellation process, our support team is here
              to help.
            </p>
          </section>

          <section className="max-w-[763px] mx-auto mt-[30px]">
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              Intellectual Property Rights
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              Fibbler and its original content, features, and functionality are
              and will remain the exclusive property of Fibbler and its
              licensors.
            </p>
          </section>

          <section className="max-w-[763px] mx-auto mt-[30px]">
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              Termination of Service
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              You may discontinue using Fibbler at any time without notice. We
              reserve the right to suspend or terminate the service at our
              discretion. Termination may result in the loss of access to your
              account and its contents.
            </p>
          </section>

          <section className="max-w-[763px] mx-auto mt-[30px]">
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              LinkedIn Insights Tag
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              Our website uses the LinkedIn Insights Tag to help us understand
              the effectiveness of our advertising campaigns and to provide
              relevant advertising to our users. The LinkedIn Insights Tag may
              collect information such as your IP address, page views, and other
              browsing data.
            </p>
            <p className="mt-[20px] text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              By using our website, you consent to the use of the LinkedIn
              Insights Tag. If you do not wish to have this tag set on your
              device, you can adjust your browser settings to refuse cookies or
              indicate when a cookie is being sent. Please note that if you
              disable cookies, some features of our website may not function
              properly.
            </p>
          </section>

          <section className="max-w-[763px] mx-auto mt-[30px]">
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              Governing Law
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              These Terms of Service are governed by Swedish law. Any disputes
              arising from these terms will be subject to the jurisdiction of
              the courts of Sweden.
            </p>
          </section>

          <section className="max-w-[763px] mx-auto mt-[30px]">
            <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
              Contact Information
            </h2>
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
              If you have any questions about these Terms, please contact us at{" "}
              {SUPPORT_EMAIL}.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}

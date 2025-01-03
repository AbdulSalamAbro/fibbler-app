"use client";
import Header from "@/app/components/common/Header/Header";
import Link from "next/link";
import { usePlausible } from "next-plausible";

export default function HeroSection() {
  const plausible = usePlausible();

  return (
    <main>
      <Header />
      <section className="xl:pt-[106px] md:pt-[70px] pt-[50px] pb-10">
        <div className="container mx-auto px-4 max-w-[763px] text-center">
          <h1 className="text-[#181127] font-[600] text-[25px] lg:text-[44px] leading-[109.7%] tracking-[0.44px] mb-[35px]">
            To install HubSpot App you need to login or signup
          </h1>
          <div className="mt-[30px] flex items-center justify-center gap-x-6">
            <Link
              href="https://app.fibbler.co/login"
              className="rounded-[8px] bg-[#FB5DA5] border-[#FDBEDB] px-[15px] py-[10px] text-[16px] lg:text-[18px] font-[600] text-white hover:bg-[#f84f9b] focus:ring-4"
            >
              Login
            </Link>
            <Link
              href="https://app.fibbler.co/signup"
              onClick={() => {
                plausible("signup_click", {
                  props: {
                    location: "hubspot_app",
                    button: "signup",
                  },
                });
              }}
              className="rounded-[8px] bg-[#6D597A] px-[15px] py-[10px] text-[16px] lg:text-[18px] font-[600] text-white shadow-sm hover:bg-[#594b66] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#594b66]"
            >
              Signup
            </Link>
          </div>

          <p className="mt-6 text-[#181127] text-[16px] lg:text-[18px] font-[500] leading-[28px]">
            <Link
              href="/article/hubspot-integration"
              className="text-[#6D597A] underline hover:text-[#3B2C4A]"
            >
              Learn how to connect to the HubSpot app after you have registered
              an account.
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

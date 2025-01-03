'use client';

import { useState, useEffect } from 'react';
import useFetch from "../../useFetch";
import { useParams } from 'next/navigation';
import Header from '@/app/components/common/Header/Header';
import qs from "qs";
import ReactMarkdown from "react-markdown";
import '../../globals.css';

const PostPage = () => {
  const query = qs.stringify(
    {
      populate: {
        blog: {
          populate: "*",
        }
      }
    },
    { encodeValuesOnly: true }
  );

  const { data, error } = useFetch(`/api/docs?${query}`);
  
  const { link } = useParams();

  if (!data) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error}</p>;

  const currentData = Array.isArray(data) ? data : [];
  const currentArticle = currentData?.find((article: any) => article?.link === link);

  if (!currentArticle) {
    return <p className='text-white'>Article not found.</p>;
  }

  return (
    <div className='text-white'>
      <main>
        <Header />
        
        {/* Main Content Section */}
        <section className="xl:pt-[106px] md:pt-[70px] pt-[50px] pb-10">
          <div className="container mx-auto px-4">

            {/* Article Title */}
            <h1 className="text-[#181127] font-[600] text-[25px] lg:text-[44px] leading-[109.7%] tracking-[0.44px] text-center lg:max-w-[863px] max-w-[500px] mx-auto mb-[35px]">
              {currentArticle?.title ?? "Technical Documentation for Fibbler"}
            </h1>

            {/* Article Introduction */}
            <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] text-center mx-auto max-w-[641px] italic mb-[35px]">
              {currentArticle.blog.introduction ?? "Turning LinkedIn ad impressions and engagements into outbound leads..."}
            </p>

            {/* Quick Links Section */}
            <section className="max-w-[763px] mx-auto mb-[35px]">
              <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
                {currentArticle?.blog.heading1 ?? "Quick Links"}
              </h2>
              <ul className="list-none text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
                {currentArticle?.blog.quickLinks?.map((link: any, index: number) => (
                  <p key={index} className="mb-[10px]">
                    <a href={link.linkAnchor ?? "#"} className="underline hover:text-[#FB5DA5]">
                      {link.linkName ?? "Default Link Name"}
                    </a>
                  </p>
                ))}
              </ul>
            </section>

            {/* Overview Section */}
            <section className="max-w-[763px] mx-auto">
              <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
                {currentArticle.blog.heading2 ?? "Overview"}
              </h2>
              <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] pl-5">
                <ReactMarkdown>{currentArticle.blog.section1}</ReactMarkdown>
              </p>
            </section>

            {/* Fibbler in-app Company Insights Section */}
            <section className="max-w-[763px] mx-auto mt-[30px]">
              <h3 id="company-insights" className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
                {currentArticle.blog.heading3 ?? "Fibbler in-app Company Insights"}
              </h3>
              <ReactMarkdown className="pl-5">{currentArticle.blog.section2}</ReactMarkdown>
              <div className="rounded-[16px] border-[4px] sm:border-[5px] border-[#181127] bg-[#fcfbfd] max-w-[899px] aspect-[2/1] mx-auto my-[30px] sm:my-[40px] lg:my-[81px]">
                <img
                  src={`${currentArticle.blog.image1[0].url}` || "/assets/img/docs/insights_tech_docs.png"}
                  alt="How insights works"
                  className="w-full h-full object-contain rounded-[16px]"
                />
              </div>
            </section>

            {/* Fibbler CRM Data Sync Section */}
            <section className="max-w-[763px] mx-auto mt-[30px]">
              <h3 id="crm-sync" className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
                {currentArticle.blog.heading4 ?? "Fibbler CRM Data Sync"}
              </h3>
              <ol className="list-decimal ml-[20px] text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
                <ReactMarkdown>{currentArticle.blog.section3_part1}</ReactMarkdown>
              </ol>
              <div className="rounded-[16px] border-[4px] sm:border-[5px] border-[#181127] bg-[#fcfbfd] max-w-[899px] aspect-[2/1] mx-auto my-[30px] sm:my-[40px] lg:my-[81px]">
                <img
                  src={`${currentArticle?.blog.image2[0].url}` || "/assets/img/docs/datasync_tech_docs.png"}
                  alt="Graph on how to connect our datasource sync"
                  className="w-full h-full object-contain rounded-[16px]"
                />
              </div>
              <div className='pl-5'>
                <ReactMarkdown>{currentArticle.blog.section3_part2}</ReactMarkdown>
              </div>
            </section>

            {/* Permissions Required Section */}
            <section id="permissions" className="max-w-[763px] mx-auto mt-[30px]">
              <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
                {currentArticle.blog.heading5 ?? "Permissions Required"}
              </h2>
              <ReactMarkdown className="pl-5">{currentArticle.blog.section4}</ReactMarkdown>
            </section>

            {/* Contact Us Section */}
            <section className="max-w-[763px] mx-auto mt-[30px]">
              <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
                {"Do you have any other questions? Send us a message at"}{" "}
                <a href="mailto:support@fibbler.co" className="text-[#FB5DA5] underline hover:text-[#f7338b]">
                  {"support@fibbler.co"}
                </a>
                .
              </p>
            </section>

          </div>
        </section>
      </main>
    </div>
  );
};

export default PostPage;

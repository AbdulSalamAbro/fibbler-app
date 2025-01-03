"use client";
import React from "react";
import Header from "../components/common/Header/Header";
import Link from "next/link"; // Import Next.js Link
import useFetch from "../useFetch";
import qs from "qs";

const calculateDaysAgo = (publishedDate: string): number => {
  const currentDate = new Date();
  const published = new Date(publishedDate);

  // Ensure both dates are valid before performing calculations
  if (isNaN(published.getTime())) {
    throw new Error("Invalid date format");
  }

  const diffTime = Math.abs(currentDate.getTime() - published.getTime()); // Convert dates to timestamps
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

  return diffDays;
};

export default function DocsOverview() {
  const { data, baseUrl } = useFetch("/api/docs?populate=articles.author.avatar");

  return (
    <main>
      <Header />
      <section className="xl:pt-[106px] md:pt-[70px] pt-[50px] pb-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-[25px] lg:text-[44px] font-extrabold tracking-tight text-[#181127]">
              {"Documentation"}
            </h2>
            <p className="font-light text-[#181127] text-[16px] lg:text-[18px]">
              {"Everything you need to understand how Fibbler works."}
            </p>
          </div>

          {/* Blog Cards */}
          <div className="grid gap-8 lg:grid-cols-2">
            {Array.isArray(data) && data.length > 0 ? (
              data.map((item: any, index: number) => {
                const articleLink = item.link ? `/docs/${item.link}` : "/docs/default";
                const article = item.articles; // Access the articles object
                return (
                  <article
                    key={index}
                    className="p-6 bg-white rounded-lg border border-[#E5E7EB] shadow-md"
                  >
                    <div className="flex justify-between items-center mb-5 text-gray-500">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                        {/* Icon for type of article */}
                        <svg
                          className="mr-1 w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                        </svg>
                        {article.type}
                      </span>
                    </div>
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#181127]">
                      <Link href={articleLink}>{item.title}</Link>
                    </h2>
                    <p className="mb-5 font-light text-[#181127]">{article.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <img
                          className="w-7 h-7 rounded-full"
                          src={ article.author.avatar[0].url}
                          alt={`${article.author.name} avatar`}
                        />
                        <span className="font-medium text-[#181127]">{article.author.name}</span>
                      </div>
                      <Link
                        href={articleLink}
                        className="inline-flex items-center font-medium text-[#FB5DA5] hover:underline"
                      >
                        Read more
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </article>
                );
              })
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}

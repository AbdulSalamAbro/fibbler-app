import React from "react";
import Header from "../../components/common/Header/Header";
import Outbound from "../../components/expertGuides/Outbound";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automating Outbound Using Ad Engagement Data | Expert Guide",
  description:
    "Learn how to turn LinkedIn ad impressions into outbound leads using Fibbler, HubSpot, Clay and automation tools. A step-by-step guide to building an automated outbound pipeline.",
  openGraph: {
    title: "Automating Outbound Using Ad Engagement Data | Expert Guide",
    description:
      "Learn how to turn LinkedIn ad impressions into outbound leads using Fibbler, HubSpot, Clay and automation tools. A step-by-step guide to building an automated outbound pipeline.",
    type: "article",
    authors: ["Tarek Reda"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automating Outbound Using Ad Engagement Data | Expert Guide",
    description:
      "Learn how to turn LinkedIn ad impressions into outbound leads using Fibbler, HubSpot, Clay and automation tools. A step-by-step guide to building an automated outbound pipeline.",
  },
  keywords: [
    "outbound automation",
    "linkedin ads",
    "lead generation",
    "sales automation",
    "fibbler",
    "hubspot",
    "clay",
    "b2b sales",
    "outbound sales",
    "ad engagement",
  ],
};

const ExpertGuides = () => {
  return (
    <main>
      <Header />
      <Outbound />
    </main>
  );
};

export default ExpertGuides;

import React from "react";
import type { Metadata } from "next";
import Header from "../../components/common/Header/Header";
import Guides from "../../components/expertGuides/Guides";

export const metadata: Metadata = {
  title:
    "Practical Guide to Tracking LinkedIn Ad Influence in CRM | Expert Guide",
  description:
    "Learn how to track LinkedIn ad engagement in your CRM using Fibbler. A comprehensive guide to setting up custom objects, workflows, and reporting in HubSpot.",
  openGraph: {
    title:
      "Practical Guide to Tracking LinkedIn Ad Influence in CRM | Expert Guide",
    description:
      "Learn how to track LinkedIn ad engagement in your CRM using Fibbler. A comprehensive guide to setting up custom objects, workflows, and reporting in HubSpot.",
    type: "article",
    authors: ["Freddie Hammond"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Practical Guide to Tracking LinkedIn Ad Influence in CRM | Expert Guide",
    description:
      "Learn how to track LinkedIn ad engagement in your CRM using Fibbler. A comprehensive guide to setting up custom objects, workflows, and reporting in HubSpot.",
  },
  keywords: [
    "crm integration",
    "linkedin ads",
    "hubspot",
    "salesforce",
    "fibbler",
    "ad tracking",
    "custom objects",
    "workflows",
    "reporting",
    "revenue operations",
  ],
};

const ExpertGuides = () => {
  return (
    <main>
      <Header />
      <Guides />
    </main>
  );
};

export default ExpertGuides;

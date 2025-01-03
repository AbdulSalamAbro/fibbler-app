import { useEffect, useState } from "react";

// Define more specific types for all fields
interface Image {
  url: string;
}

interface Author {
  name: string;
  avatar: string;
  jobTitle?: string; // Optional if not always available
}

interface Article {
  type: string;
  publishedDate: string;
  title: string;
  description: string;
  link: string;
  author: Author;
}

interface ElementData {
  title: string;
  description: string;
  button: string;
  image: Image[];
  article: Article[];
  subtitle: string | null;
  section1: string | null;
  section2: string | null;
  introduction: string | null;
  links: string | null;
  header2: string | null;
  paragraph1: string | null;
  paragraph2: string | null;
  lists: string[] | null;
  section3: string | null;
  author: Author | null;
  authorAvatar: string | null;
  authorJobTitle: string | null;
  authorName: string | null;
  TableOfContents: string[] | null;
  articles: Article[] | null;
  data: [];
}

const useFetch = (url: string) => {
  const [data, setData] = useState<ElementData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || ""; // Ensure baseUrl is always a string
  const apiToken = process.env.NEXT_PUBLIC_API_TOKEN || ""; // Get the API token from environment variables

  useEffect(() => {
    const getData = async (): Promise<void> => {
      try {
        if (!baseUrl) {
          setError("Base URL is not defined");
          console.error("Base URL is not defined");
          return;
        }

        if (!apiToken) {
          setError("API token is not defined");
          console.error("API token is not defined");
          return;
        }

        // Add the Authorization header with Bearer token
        const response = await fetch(`${baseUrl}${url}`, {
          method: "GET", // or "POST" based on your needs
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiToken}`, // Add Bearer token here
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const fetchedData = await response.json();

        console.log(fetchedData);

        // Ensure the fetched data conforms to ElementData type
        if (fetchedData?.data) {
          setData(fetchedData.data as ElementData);
        } else {
          setError("Invalid response structure");
        }
      } catch (error) {
        console.error("Error fetching data", error);
        setError("Failed to fetch data");
      }
    };

    getData();
  }, [url, baseUrl, apiToken]);

  return { data, error, baseUrl };
};

export default useFetch;

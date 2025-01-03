"use client";
import { useState, useEffect } from "react";
import LinkedInTag from "react-linkedin-insight";
import Cookies from "js-cookie";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    const hostname = window.location.hostname;
    let domainOption;

    // Set the domain for the cookie in production only
    if (hostname !== "localhost" && !hostname.includes("127.0.0.1")) {
      domainOption = ".fibbler.co";
    }
    // Set a cookie that can be accessed across subdomains
    Cookies.set("cookieConsent", "true", {
      expires: 365, // 1 year
      ...(domainOption && { domain: domainOption }),
      secure: window.location.protocol === "https:",
    });
    Cookies.set("cookieConsentDate", new Date().toISOString(), {
      expires: 365, // 1 year
      ...(domainOption && { domain: domainOption }),
      secure: window.location.protocol === "https:",
    });
    setIsVisible(false);
    if (hostname !== "localhost" && !hostname.includes("127.0.0.1")) {
      loadLinkedInTag();
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
  };

  const loadLinkedInTag = () => {
    try {
      LinkedInTag.init("7051881");
    } catch (error) {
      console.error("Could not init Linkedin tag", error);
    }
  };

  const isConsentExpired = (consentDate: string) => {
    const now = new Date();
    const consentTime = new Date(consentDate);
    const oneYear = 365 * 24 * 60 * 60 * 1000; // 1 year in milliseconds
    return now.getTime() - consentTime.getTime() > oneYear;
  };

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    const consentDate = Cookies.get("cookieConsentDate");
    if (consent === "true" && consentDate && !isConsentExpired(consentDate)) {
      loadLinkedInTag();
    }
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="inter-font fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      {/* Rectangle 277 */}
      <div className="relative h-auto w-full max-w-[737px] rounded-[20px] border-[15px] border-solid border-[#C7BCE1] bg-[#E5E0F1] p-6 md:h-[375px] md:p-8">
        {/* Heading */}
        <div className="clash-bold mb-4 text-left text-[20px] capitalize leading-[114%] tracking-[0.01em] text-[#181127] md:text-[28px]">
          We use cookies to enhance your browsing experience, serve personalized
          ads or content, and analyze our traffic.
        </div>

        {/* Paragraph */}
        <div className="satoshifont-500 mb-8 text-left text-[16px] leading-[135%] tracking-[0.01em] text-[#181127] md:text-[18px]">
          By accepting all cookies, you help us to shape your user experience.
          To learn more, please view our privacy policy. If you decline, your
          information won’t be tracked when you visit this website.
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-end space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          {/* Accept Button */}
          <button
            onClick={handleAccept}
            className="h-[52px] w-full rounded-[18px] border-[8px] border-[#FDBEDB] bg-[#FB5DA5] font-[900] text-white hover:bg-pink-600 md:h-[62px] md:w-[144px]"
          >
            Accept
          </button>
          {/* Decline Button */}
          <button
            onClick={handleDismiss}
            className="h-[52px] w-full rounded-[18px] font-[900] text-black hover:bg-gray-200 md:h-[62px] md:w-[147px]"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

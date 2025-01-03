"use client";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import * as animationData from "../../animation/your-ads.json";

const LottieYourAds = () => {
  const animationContainer = useRef(null) as any;

  useEffect(() => {
    // Initialize Lottie animation
    const animation = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    });

    // Clean up the animation when the component is unmounted
    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div ref={animationContainer} style={{ width: 57, height: 55 }} />
    </div>
  );
};

export default LottieYourAds;

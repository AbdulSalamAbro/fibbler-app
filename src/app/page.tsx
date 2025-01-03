import Header from "./components/common/Header/Header";
import Faq from "./components/Home/Faq";
import FibblerVsLinkedin from "./components/Home/FibblerVsLinkedin";
import Hero from "./components/Home/Hero";
import PlugAndWatch from "./components/Home/PlugAndWatch";
import Pricing from "./components/Home/Pricing";
import Schedule from "./components/Home/Schedule";
// import Section2 from "./components/Home/Section2";
import Testimonials from "./components/Home/Testimonials";
import Video from "./components/Home/Video";
import Webhooks from "./components/Home/Webhooks";

export default function Home() {
  return (
    <main>
      {/* <ProductHuntBanner /> */}
      <div className="content">
        <Header />
        <Hero />
        <PlugAndWatch />

        <Testimonials />
        <FibblerVsLinkedin />
        {/* <Section2 /> */}
        {/* <FibblerZaps /> */}
        <Webhooks />
        <Schedule />
        <Pricing />
        <Faq />
        {/* <IsYourDataSafe /> */}
        <Video />
      </div>
    </main>
  );
}

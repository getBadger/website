import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import ToolsShowcase from "@/components/sections/ToolsShowcase";
import Benefits from "@/components/sections/Benefits";
import Integration from "@/components/sections/Integration";
import Testimonials from "@/components/sections/Testimonials";
import Newsletter from "@/components/sections/Newsletter";
import CTASection from "@/components/sections/CTASection";
import { Helmet } from "react-helmet";

const Affiliate = () => {
  return (
    <>
      <Helmet>
        <title>Get More Affiliate Commissions</title>
        <meta
          name="description"
          content="Discover open source tools for affiliate marketers and online shoppers at getBadger. Streamline your online shopping experience and boost your affiliate marketing strategies."
        />
      </Helmet>

      <Hero />
      <Features />
      {/* <ToolsShowcase /> */}
      <Benefits />
      <Integration />
      {/* <Testimonials /> */}
      <Newsletter />
      <CTASection />
    </>
  );
};

export default Affiliate;

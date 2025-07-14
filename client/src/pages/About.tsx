import AboutSection from "@/components/sections/AboutSection";
import CTASection from "@/components/sections/CTASection";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Our Mission & Story</title>
        <meta
          name="description"
          content="Learn about getBadger's mission to provide open source tools for affiliate marketers and online shoppers."
        />
      </Helmet>

      <AboutSection />
      {/* <CTASection /> */}
    </>
  );
};

export default About;

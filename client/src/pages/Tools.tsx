import { Helmet } from "react-helmet";
import ToolCard from "@/components/ui/ToolCard";
import { tools } from "@/data/tools";
import CTASection from "@/components/sections/CTASection";

const Tools = () => {
  return (
    <>
      <Helmet>
        <title>Resources for Affiliate Marketers & Shoppers</title>
        <meta
          name="description"
          content="Explore getBadger's comprehensive suite of open source tools designed for affiliate marketers and online shoppers."
        />
      </Helmet>

      <div className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-neutral-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Our Tools
            </h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-neutral-500">
              Our comprehensive suite of open source tools designed to make
              affiliate marketing and online shopping effortless
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* <CTASection /> */}
    </>
  );
};

export default Tools;

import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import ToolCard from '@/components/ui/ToolCard';
import { tools } from '@/data/tools';

const ToolsShowcase = () => {
  // Show only the first 3 tools on the homepage
  const showcaseTools = tools.slice(0, 3);
  
  return (
    <section id="tools" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
            Affiliate Marketing & Shopping Tools
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-neutral-500 lg:mx-auto">
            Our comprehensive suite of open source tools designed to make affiliate marketing and online shopping effortless.
          </p>
        </div>

        <div className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
          {showcaseTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/tools">
              <a>View All Tools</a>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ToolsShowcase;

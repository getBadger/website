import FeatureCard from '@/components/ui/FeatureCard';
import { features } from '@/data/features';

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/50 rounded-full -translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-block">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
              Features
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-neutral-900 sm:text-4xl lg:text-5xl">
            Smart Shopping Features
          </h2>
          <p className="mt-6 max-w-2xl text-xl text-neutral-600 lg:mx-auto">
            Everything you need to save money and shop smarter online.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-gray-100 rounded-full">
            <span className="text-sm font-medium text-neutral-700">And many more features to discover</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

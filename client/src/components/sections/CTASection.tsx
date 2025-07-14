import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, LineChart, CheckCircle2 } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-indigo-700">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              <span className="block">Ready to boost your affiliate marketing?</span>
            </h2>
            <p className="mt-4 text-lg text-indigo-100 max-w-xl">
              Join thousands of marketers who are increasing their conversion rates and optimizing their affiliate strategies with getBadger's powerful tools.
            </p>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-indigo-200" />
                <span className="ml-2 text-indigo-100">Full-featured platform with no hidden costs</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-indigo-200" />
                <span className="ml-2 text-indigo-100">Easy setup with comprehensive documentation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-indigo-200" />
                <span className="ml-2 text-indigo-100">Dedicated support team for all users</span>
              </div>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Button size="lg" variant="secondary" className="shadow-xl hover:shadow-2xl transition-shadow duration-300" asChild>
                <Link href="/contact">
                  <span className="flex items-center">
                    Get started for free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </Button>
              {/* <Button variant="outline" className="bg-transparent text-white hover:bg-white/10 border-white/30" size="lg" asChild>
                <Link href="/contact">
                  <span>Contact sales</span>
                </Link>
              </Button> */}
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 flex justify-center">
            
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-md transform rotate-1">
              <div className="absolute -top-6 -right-6 bg-white rounded-full p-3 shadow-lg">
                <LineChart className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">Potential results with Badger</h3>
              
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-sm text-white/80">Conversion rate increase</p>
                  <p className="text-3xl font-bold text-white">+65%</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-sm text-white/80">Time saved per week</p>
                  <p className="text-3xl font-bold text-white">12 hours</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-sm text-white/80">Average ROI</p>
                  <p className="text-3xl font-bold text-white">347%</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CTASection;

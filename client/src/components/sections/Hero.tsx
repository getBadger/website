import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-primary/5"></div>
        <div className="absolute -left-20 top-1/2 w-60 h-60 rounded-full bg-indigo-100/50"></div>
        <div className="absolute right-0 bottom-0 w-40 h-40 rounded-full bg-primary/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center py-16 md:py-24 lg:py-32">
          {/* Hero content */}
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-neutral-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">Save Money While</span>
              <span className="block text-primary mt-1">Shopping Online</span>
            </h1>

            <p className="mt-4 text-base text-neutral-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
              Badger automatically finds and applies the best discount codes
              when you shop online. No more searching for coupons that don't
              work.
            </p>

            <div className="mt-6">
              <div className="flex items-center space-x-2 text-sm text-neutral-500 mb-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Automatic coupon testing</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-500 mb-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>100% free to use</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-500">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Works with major retailers</span>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 hover:bg-gray-50"
                asChild
              >
                <a href="#waitlist" className="scroll-button">
                  Join Our Community
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 hover:bg-gray-50"
                asChild
              >
                <Link href="/how">
                  <span>How it Works</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero image */}
          <div className="mt-12 relative lg:mt-0 flex justify-center">
            <div className="relative lg:max-w-md xl:max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-indigo-300/20 rounded-2xl transform rotate-1"></div>
              <img
                className="relative rounded-2xl shadow-2xl object-cover w-full max-h-[600px]"
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Online shopping experience"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

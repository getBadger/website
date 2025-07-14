import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { ArrowRight, LineChart, CheckCircle2 } from "lucide-react";

const DemoSection: React.FC = () => {
  return (
    <section className="py-20 px-4 text-muted-foreground from-orange-100 via-gray-100 to-teal-100">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className=" block text-black mt-1 text-4xl font-bold mb-4">
            See Badger in Action
          </h2>
          <p className="max-w-2xl mx-auto">
            Watch how Badger searches for discounts and applies them to your
            cart.
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          <div className="aspect-w-16 aspect-h-9 ">
            <div className="w-full h-full text-muted-foreground from-orange-200 to-blue-200 flex items-center justify-center">
              <div className="text-center p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Product Demo
                </h3>
                <p className="text-white/80 mb-6">
                  <img
                    src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWsxcmVkdXNwcGQxcmN3d2ZtdW9wMjY1ZWdhMzR2MHk3djFmd2N2YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Sph5Vb44q9pwhPCckx/giphy.gif"
                    alt="getBadger Demo"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 text-gray-600">
            Ready to experience Badger for yourself? Join our Community and be
            in the know!
          </p>
          <div className="mt-10 center-normal sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <Button
              size="lg"
              variant="secondary"
              className="shadow-xl hover:shadow-2xl transition-shadow duration-300"
              asChild
            >
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
      </div>
    </section>
  );
};

export default DemoSection;

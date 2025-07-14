import TestimonialCard from '@/components/ui/TestimonialCard';
import { testimonials } from '@/data/testimonials';
import { MessageSquareQuote, Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/4 -translate-x-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <MessageSquareQuote className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Testimonials</span>
          </div>
          
          <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl lg:text-5xl text-center">
            Trusted by Marketers & Shoppers
          </h2>
          
          <div className="mt-4 flex justify-center">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="ml-2 text-sm font-medium text-neutral-600">
              4.9 out of 5 stars
            </p>
          </div>
          
          <p className="mt-6 max-w-2xl text-xl text-neutral-600 text-center">
            See what users are saying about getBadger's tools.
          </p>
        </div>
        
        <div className="mt-16 grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="transform transition-transform duration-500 hover:scale-105" 
                style={{ marginTop: index % 2 === 1 ? '2rem' : '0' }}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
            View more testimonials
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

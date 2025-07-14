import { Star } from 'lucide-react';

export interface Testimonial {
  id: number;
  text: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 relative border border-gray-100 h-full flex flex-col">
      {/* Quote mark - styled as a decorative element */}
      <div className="absolute -top-4 -left-2 text-primary opacity-20 select-none pointer-events-none">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30.1698V60H25.7143V30.1698H8.57143C8.57143 17.9623 14.2857 9.43396 25.7143 4.52831V0C8.92857 6.41509 0 16.4151 0 30.1698ZM34.2857 30.1698V60H60V30.1698H42.8571C42.8571 17.9623 48.5714 9.43396 60 4.52831V0C43.2143 6.41509 34.2857 16.4151 34.2857 30.1698Z" />
        </svg>
      </div>
      
      {/* Stars */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      
      {/* Testimonial text */}
      <p className="text-neutral-600 italic leading-relaxed text-lg grow">
        {testimonial.text}
      </p>
      
      {/* Author info */}
      <div className="mt-8 pt-6 border-t border-gray-100 flex items-center">
        <div className="flex-shrink-0 border-2 border-primary/20 rounded-full p-0.5">
          <img 
            className="h-12 w-12 rounded-full object-cover" 
            src={testimonial.author.avatar} 
            alt={testimonial.author.name} 
          />
        </div>
        <div className="ml-4">
          <p className="text-base font-semibold text-neutral-900">{testimonial.author.name}</p>
          <p className="text-sm text-neutral-500">{testimonial.author.title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

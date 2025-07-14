import { benefits } from '@/data/benefits';
import { CheckCircle } from 'lucide-react';

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
            Benefits for Different Users
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-neutral-500 lg:mx-auto">
            See how getBadger tools transform your affiliate marketing and online shopping experience.
          </p>
        </div>
        
        <div className="mt-16">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {benefits.sections.map((section, index) => (
              <div key={index}>
                <div className="flow-root bg-white rounded-lg px-6 py-8 shadow-sm">
                  <h3 className="text-xl font-medium text-neutral-900">{section.title}</h3>
                  <div className="mt-6">
                    <ul className="space-y-4">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="ml-3 text-base text-neutral-500">
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

import { LucideIcon } from "lucide-react";

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  iconBgColor: string;
}

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  const IconComponent = feature.icon;

  return (
    <div className="pt-6 group">
      <div className="h-full flow-root bg-white rounded-xl px-6 pb-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:translate-y-[-4px]">
        <div className="-mt-6">
          <div className="transition-transform duration-300 transform group-hover:scale-110">
            <span
              className={`inline-flex items-center justify-center p-3 ${feature.iconBgColor} rounded-xl shadow-lg`}
            >
              <IconComponent className="text-white h-6 w-6" />
            </span>
          </div>
          <h3 className="mt-8 text-lg font-semibold text-neutral-900 tracking-tight group-hover:text-primary transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="mt-5 text-base text-neutral-600 leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;

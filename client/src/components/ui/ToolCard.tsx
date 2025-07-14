import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export interface Tool {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface ToolCardProps {
  tool: Tool;
}

const ToolCard = ({ tool }: ToolCardProps) => {
  return (
    <div className="group relative">
      <div className="relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 hover:translate-y-[-4px]">
        <div className="h-48 bg-gray-200 aspect-w-16 aspect-h-9">
          <img
            src={tool.image}
            alt={`${tool.title} screenshot`}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-primary transition-colors duration-300">
            {tool.title}
          </h3>
          <p className="mt-2 text-base text-neutral-600 leading-relaxed">
            {tool.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tool.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="mr-2">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="mt-6 pt-3 border-t border-gray-100">
            <Link href={tool.link}></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;

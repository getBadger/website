import type { Testimonial } from '@/components/ui/TestimonialCard';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "getBadger's affiliate tools completely transformed my marketing strategy. I've seen a 45% increase in commissions since implementing their link management system.",
    author: {
      name: "Sarah Johnson",
      title: "Affiliate Marketer & Blogger",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    }
  },
  {
    id: 2,
    text: "As a deal hunter, the price comparison tool has saved me hundreds of dollars. It finds deals I would never discover on my own and the browser extension makes shopping so much easier.",
    author: {
      name: "Michael Chen",
      title: "Savvy Online Shopper",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    }
  },
  {
    id: 3,
    text: "The integration with my WordPress site was seamless. Now I can manage all my affiliate links in one place and track exactly which content drives the most revenue.",
    author: {
      name: "Jessica Williams",
      title: "Content Creator & YouTuber",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  }
];

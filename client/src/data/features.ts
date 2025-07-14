import { 
  Users, 
  BarChart3, 
  Link, 
  Search, 
  DollarSign, 
  ShoppingCart, 
  Share,
  Shield,
  HandIcon,
  HandHeart,
  Users2,
  Users2Icon
} from 'lucide-react';
import type { Feature } from '@/components/ui/FeatureCard';

export const features: Feature[] = [
  {
    id: 1,
    title: 'Automatic Savings',
    description: 'Badger automatically finds and applies the best working discount codes when you checkout.',
    icon: HandHeart,
    iconBgColor: 'bg-primary',
  },
  {
    id: 2,
    title: 'Price Tracking',
    description: 'Track price changes on your favorite items and get notified when they drop.',
    icon: ShoppingCart,
    iconBgColor: 'bg-blue-500',
  },
  {
    id: 3,
    title: 'Safe & Secure',
    description: 'Our extension is open source and transparent about how it works with your data.',
    icon: Shield,
    iconBgColor: 'bg-green-500',
  },
  {
    id: 4,
    title: 'Community Verified',
    description: 'All coupons are verified by our community of shoppers to ensure they work.',
    icon: Users2Icon,
    iconBgColor: 'bg-indigo-500',
  },
  {
    id: 5,
    title: 'Shopping History',
    description: 'Keep track of your savings and shopping history in one place.',
    icon: BarChart3,
    iconBgColor: 'bg-purple-500',
  },
  {
    id: 6,
    title: 'Deal Alerts',
    description: 'Get notified about the best deals on products you\'re interested in.',
    icon: Search,
    iconBgColor: 'bg-amber-500',
  }
];
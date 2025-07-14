import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Download, LogOut, User, X } from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { user, logoutMutation } = useAuth();
  const handleLogout = () => {
    logoutMutation.mutate();
    onClose();
  };
  
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white h-full w-4/5 max-w-sm shadow-xl p-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-bold text-primary">Menu</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full" aria-label="Close menu">
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="space-y-2">
          {/* <Link href="/#features">
            <div className="text-neutral-700 hover:bg-gray-50 hover:text-primary block px-4 py-3 rounded-md text-base font-medium cursor-pointer transition-colors duration-200" onClick={onClose}>
              Features
            </div>
          </Link>
          <Link href="/tools">
            <div className="text-neutral-700 hover:bg-gray-50 hover:text-primary block px-4 py-3 rounded-md text-base font-medium cursor-pointer transition-colors duration-200" onClick={onClose}>
              Tools
            </div>
          </Link>
          <Link href="/#benefits">
            <div className="text-neutral-700 hover:bg-gray-50 hover:text-primary block px-4 py-3 rounded-md text-base font-medium cursor-pointer transition-colors duration-200" onClick={onClose}>
              Benefits
            </div>
          </Link> */}
          <Link href="/how">
            <div className="text-neutral-700 hover:bg-gray-50 hover:text-primary block px-4 py-3 rounded-md text-base font-medium cursor-pointer transition-colors duration-200" onClick={onClose}>
              How It Works
            </div>
          </Link>
          <Link href="/about">
            <div className="text-neutral-700 hover:bg-gray-50 hover:text-primary block px-4 py-3 rounded-md text-base font-medium cursor-pointer transition-colors duration-200" onClick={onClose}>
              About
            </div>
          </Link>
          <Link href="/pricing">
            <div className="text-neutral-700 hover:bg-gray-50 hover:text-primary block px-4 py-3 rounded-md text-base font-medium cursor-pointer transition-colors duration-200" onClick={onClose}>
              Pricing
            </div>
          </Link>
          <Link href="/contact">
            <div className="text-neutral-700 hover:bg-gray-50 hover:text-primary block px-4 py-3 rounded-md text-base font-medium cursor-pointer transition-colors duration-200" onClick={onClose}>
              Contact
            </div>
          </Link>
        </div>
        
        <div className="pt-5 mt-6 border-t border-gray-200">
          {user ? (
            <>
              <div className="px-4 py-3">
                <p className="text-sm font-medium text-gray-500">Signed in as</p>
                <p className="text-base font-medium text-gray-900 truncate">{user.username}</p>
              </div>
              <Link href="/dashboard">
                <div className="flex items-center text-neutral-700 hover:bg-gray-50 hover:text-primary px-4 py-3 rounded-md text-base font-medium cursor-pointer transition-colors duration-200" onClick={onClose}>
                  <User className="h-5 w-5 mr-3" />
                  Dashboard
                </div>
              </Link>
              <div className="text-red-600 hover:bg-red-50 flex items-center px-4 py-3 rounded-md text-base font-medium cursor-pointer transition-colors duration-200" onClick={handleLogout}>
                <LogOut className="h-5 w-5 mr-3" />
                Sign out
              </div>
            </>
          ) : (
            <>
              {/* <Link href="/auth">
                <div className="text-neutral-700 hover:bg-gray-50 hover:text-primary block px-4 py-3 rounded-md text-base font-medium cursor-pointer transition-colors duration-200" onClick={onClose}>
                  Sign in
                </div>
              </Link> */}
              <div className="mt-4 px-4">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-md" 
                  asChild
                >
                  <a 
                    href="https://chromewebstore.google.com/detail/badger-open-beta/knemhfmegoohbpmolimpkhlhnofogdna"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Extension
                  </a>
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

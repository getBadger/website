import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MobileMenu from "./MobileMenu";
import { Download, LogOut, Menu, User } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import Logo from "../Logo";

const Header = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logoutMutation } = useAuth();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const handleLogout = () => logoutMutation.mutate();

  const isActive = (path: string) =>
    location === path ? "text-primary font-semibold" : "text-neutral-700";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center text-bold">
            <div className="flex-shrink-0">
              <Logo
                logoUrl="https://i.imgur.com/Zbv8Xwb.png"
                width={50}
                height={50}
              />
            </div>
            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              {/* <Link href="/home">
                <span className={`${isActive('/#features')} hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer`}>Features</span>
              </Link> */}
              {/* <Link href="/tools">
                <span className={`${isActive('/tools')} hover:text-primary px-3 py-2 text-sm font-bold transition-colors duration-200 cursor-pointer`}>Tools</span>
              </Link> */}
              <Link href="/how">
                <span
                  className={`${isActive("/how")} hover:text-primary px-3 py-2 text-sm font-bold transition-colors duration-200 cursor-pointer`}
                >
                  How It Works
                </span>
              </Link>
              {/* <Link href="/affiliate">
                <span
                  className={`${isActive("/affiliate")} hover:text-primary px-3 py-2 text-sm font-bold transition-colors duration-200 cursor-pointer`}
                >
                  Affiliate
                </span>
              </Link> */}
              {/* <Link href="/#benefits">
                <span className={`${isActive('/#benefits')} hover:text-primary px-3 py-2 text-sm font-bold transition-colors duration-200 cursor-pointer`}>Benefits</span>
              </Link> */}
              <Link href="/about">
                <span
                  className={`${isActive("/about")} hover:text-primary px-3 py-2 text-sm font-bold transition-colors duration-200 cursor-pointer`}
                >
                  About
                </span>
              </Link>
              <Link href="/pricing">
                <span
                  className={`${isActive("/pricing")} hover:text-primary px-3 py-2 text-sm font-bold transition-colors duration-200 cursor-pointer`}
                >
                  Affiliate Pricing
                </span>
              </Link>
              <Link href="/contact">
                <span
                  className={`${isActive("/contact")} hover:text-primary px-3 py-2 text-sm font-bold transition-colors duration-200 cursor-pointer`}
                >
                  Contact
                </span>
              </Link>
              <a
                href="https://github.com/orgs/getBadger/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-primary transition-colors text-sm font-bold flex items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-github w-4 h-4"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                <span>GitHub</span>
              </a>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <a
                href="https://chromewebstore.google.com/detail/badger-open-beta/knemhfmegoohbpmolimpkhlhnofogdna"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <Download className="w-4 h-4 mr-2" /> */}
                Download
              </a>
            </Button>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-2 hover:bg-muted"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {user.username.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{user.username}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="cursor-pointer w-full">
                      <User className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="cursor-pointer text-red-600 focus:text-red-600"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                {}
                {/* <Button asChild className="shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Link href="/auth">
                    <span>Get Started</span>
                  </Link>
                </Button> */}
              </>
            )}
          </div>
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Open main menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={mobileMenuOpen} onClose={toggleMobileMenu} />
    </header>
  );
};

export default Header;


import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-gray-900">
              PitchPerfect
              <span className="text-gray-500">CV</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              Templates
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              Features
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              Examples
            </a>
            <Button size="sm" variant="outline" className="border-gray-300 hover:bg-gray-100">
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <a href="#" className="block text-gray-600 hover:text-gray-900 text-sm font-medium py-2">
              Templates
            </a>
            <a href="#" className="block text-gray-600 hover:text-gray-900 text-sm font-medium py-2">
              Features
            </a>
            <a href="#" className="block text-gray-600 hover:text-gray-900 text-sm font-medium py-2">
              Examples
            </a>
            <div className="flex space-x-3 pt-2">
              <Button size="sm" variant="outline" className="w-1/2 border-gray-300 hover:bg-gray-100">
                Sign In
              </Button>
              <Button size="sm" className="w-1/2">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

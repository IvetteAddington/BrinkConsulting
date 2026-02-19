import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const isMobile = useIsMobile();
  
  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile, isOpen]);
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center">
              <span className="font-serif text-xl font-bold text-[#1A1A1A]">
                Addington AI Consulting
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-sm font-medium hover:text-[#3949AB] transition-colors relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3949AB] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              {false && (
                <Link
                  href="/about"
                  className="text-sm font-medium hover:text-[#3949AB] transition-colors relative group"
                >
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3949AB] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )}
              {false && (
                <Link
                  href="/newsletter"
                  className="text-sm font-medium hover:text-[#3949AB] transition-colors relative group"
                >
                  Newsletter
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3949AB] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )}
              <a
                href="#contact"
                className="text-sm font-medium hover:text-[#3949AB] transition-colors relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3949AB] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
          </div>
          
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button 
              className="md:hidden flex items-center justify-center p-2 rounded-full bg-gray-50 border border-gray-100 text-[#1A1A1A] shadow-sm transition-all hover:shadow"
              onClick={handleToggle}
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
            {/* Desktop CTA button */}
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-sm font-medium text-[#1A1A1A] hover:text-[#3949AB] transition-colors px-2 py-2 hover:bg-gray-50 rounded-md">
                Home
              </Link>
              {false && (
                <Link
                  href="/about"
                  className="text-sm font-medium text-[#1A1A1A] hover:text-[#3949AB] transition-colors px-2 py-2 hover:bg-gray-50 rounded-md"
                >
                  About
                </Link>
              )}
              {false && (
                <Link
                  href="/newsletter"
                  className="text-sm font-medium text-[#1A1A1A] hover:text-[#3949AB] transition-colors px-2 py-2 hover:bg-gray-50 rounded-md"
                >
                  Newsletter
                </Link>
              )}
              <a
                href="#contact"
                className="text-sm font-medium text-[#1A1A1A] hover:text-[#3949AB] transition-colors px-2 py-2 hover:bg-gray-50 rounded-md"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

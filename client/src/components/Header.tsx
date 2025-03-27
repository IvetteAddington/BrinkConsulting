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
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <a className="font-serif text-xl font-bold text-[#1A1A1A]">
                CampaignOptimizer
              </a>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link href="/">
                <a className="text-sm font-medium hover:text-[#3949AB] transition-colors">
                  Home
                </a>
              </Link>
              <a 
                href="#about" 
                className="text-sm font-medium hover:text-[#3949AB] transition-colors"
              >
                About
              </a>
              <a 
                href="#newsletter" 
                className="text-sm font-medium hover:text-[#3949AB] transition-colors"
              >
                Newsletter
              </a>
              <a 
                href="#contact" 
                className="text-sm font-medium hover:text-[#3949AB] transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
          
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button 
              className="md:hidden flex items-center justify-center p-2 rounded-md text-[#1A1A1A]"
              onClick={handleToggle}
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            
            {/* Desktop CTA button */}
            <a 
              href="#newsletter"
              className="hidden md:block py-2 px-4 bg-[#3949AB] text-white text-sm font-medium rounded-md hover:bg-[#2C3A8C] transition-colors duration-200"
            >
              Subscribe
            </a>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/">
                <a className="text-sm font-medium hover:text-[#3949AB] transition-colors px-2 py-1">
                  Home
                </a>
              </Link>
              <a 
                href="#about" 
                className="text-sm font-medium hover:text-[#3949AB] transition-colors px-2 py-1"
              >
                About
              </a>
              <a 
                href="#newsletter" 
                className="text-sm font-medium hover:text-[#3949AB] transition-colors px-2 py-1"
              >
                Newsletter
              </a>
              <a 
                href="#contact" 
                className="text-sm font-medium hover:text-[#3949AB] transition-colors px-2 py-1"
              >
                Contact
              </a>
              
              {/* Mobile CTA button */}
              <a 
                href="#newsletter"
                className="py-2 px-4 bg-[#3949AB] text-white text-sm font-medium rounded-md hover:bg-[#2C3A8C] transition-colors duration-200 w-full text-center mt-2"
              >
                Subscribe
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
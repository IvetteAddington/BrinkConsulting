import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-gradient-to-b from-[#0A0F2A] to-[#1A1A1A] text-white py-16 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#3949AB] to-transparent opacity-30"></div>
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#3949AB]/5 -mt-32 -mr-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#3949AB]/5 -mb-40 -ml-20 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Logo and main sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#3949AB] to-[#6979C9] flex items-center justify-center mr-3 shadow-lg">
                <span className="font-bold text-white">CO</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Campaign Optimizer</h3>
            </div>
            
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Helping businesses achieve better results through data-driven campaign optimization.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3949AB] transition-all duration-300">
                <Facebook size={16} className="text-white" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3949AB] transition-all duration-300">
                <Twitter size={16} className="text-white" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3949AB] transition-all duration-300">
                <Instagram size={16} className="text-white" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3949AB] transition-all duration-300">
                <Linkedin size={16} className="text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white flex items-center">
              <span className="bg-[#3949AB] h-4 w-1 mr-2 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/70 hover:text-white text-sm transition-colors duration-300 flex items-center">
                  <span className="h-1 w-1 bg-[#3949AB] rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white text-sm transition-colors duration-300 flex items-center">
                  <span className="h-1 w-1 bg-[#3949AB] rounded-full mr-2"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#newsletter" className="text-white/70 hover:text-white text-sm transition-colors duration-300 flex items-center">
                  <span className="h-1 w-1 bg-[#3949AB] rounded-full mr-2"></span>
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white flex items-center">
              <span className="bg-[#3949AB] h-4 w-1 mr-2 rounded-full"></span>
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors duration-300 flex items-center">
                  <span className="h-1 w-1 bg-[#3949AB] rounded-full mr-2"></span>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors duration-300 flex items-center">
                  <span className="h-1 w-1 bg-[#3949AB] rounded-full mr-2"></span>
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors duration-300 flex items-center">
                  <span className="h-1 w-1 bg-[#3949AB] rounded-full mr-2"></span>
                  Webinars
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white flex items-center">
              <span className="bg-[#3949AB] h-4 w-1 mr-2 rounded-full"></span>
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="text-white/70 text-sm flex items-start">
                <Mail size={16} className="text-[#3949AB] mr-3 mt-0.5 shrink-0" />
                <span>hello@campaignoptimizer.com</span>
              </li>
              <li className="text-white/70 text-sm flex items-start">
                <Phone size={16} className="text-[#3949AB] mr-3 mt-0.5 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="text-white/70 text-sm flex items-start">
                <MapPin size={16} className="text-[#3949AB] mr-3 mt-0.5 shrink-0" />
                <span>
                  123 Marketing St, Suite 100
                  <br />
                  San Francisco, CA 94103
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} Campaign Optimizer. All rights reserved.
          </p>
          
          <div className="flex mt-6 md:mt-0 space-x-8">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
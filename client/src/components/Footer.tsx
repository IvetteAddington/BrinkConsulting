import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-[#1A1A1A] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Campaign Optimizer</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Helping businesses achieve better results through data-driven campaign optimization.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-white/60 hover:text-white text-sm transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="#about">
                  <a className="text-white/60 hover:text-white text-sm transition-colors">About</a>
                </Link>
              </li>
              <li>
                <Link href="#newsletter">
                  <a className="text-white/60 hover:text-white text-sm transition-colors">Newsletter</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                  Webinars
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-white/60 text-sm">
                hello@campaignoptimizer.com
              </li>
              <li className="text-white/60 text-sm">
                +1 (555) 123-4567
              </li>
              <li className="text-white/60 text-sm">
                123 Marketing St, Suite 100
                <br />
                San Francisco, CA 94103
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-xs">
            &copy; {currentYear} Campaign Optimizer. All rights reserved.
          </p>
          
          <div className="flex mt-4 md:mt-0 space-x-6">
            <a href="#" className="text-white/40 hover:text-white/80 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-white/80 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
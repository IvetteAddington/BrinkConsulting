
import { useState } from "react";
import { Link } from "wouter";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Logo</Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/newsletter">Newsletter</Link>
          <Link href="/about">About</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/newsletter" onClick={() => setIsMenuOpen(false)}>Newsletter</Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

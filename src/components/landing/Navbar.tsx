'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-base/80 backdrop-blur-xl border-b border-brand-purple/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-xl text-white">
            Brandy
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-6 flex items-center space-x-8">
              
              <Link href="/approach" className="text-gray-300 hover:text-brand-purple transition-colors">
                Approach
              </Link>
              <Link href="/case-studies" className="text-gray-300 hover:text-brand-purple transition-colors">
                Case Studies
              </Link>
              <Link href="/team" className="text-gray-300 hover:text-brand-purple transition-colors">
                Team
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-brand-purple transition-colors">
                About us
              </Link>
              <Link href="/faq" className="text-gray-300 hover:text-brand-purple transition-colors">
                FAQ
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-brand-purple transition-colors">
                Blog
              </Link>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="#demo" 
              className="ml-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-brand-purple to-brand-pink hover:from-brand-purple/80 hover:to-brand-pink/80 transition-all duration-300 shadow-lg hover:shadow-brand-purple/20"
            >
              See it live
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-brand-purple focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-800 border-t border-brand-purple/20">
            <div className="pt-2 pb-3 space-y-1">
              <Link 
                href="/products" 
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:bg-brand-purple/10"
              >
                Products
              </Link>
              <Link 
                href="/approach" 
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:bg-brand-purple/10"
              >
                Approach
              </Link>
              <Link 
                href="/case-studies" 
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:bg-brand-purple/10"
              >
                Case Studies
              </Link>
              <Link 
                href="/team" 
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:bg-brand-purple/10"
              >
                Team
              </Link>
              <Link 
                href="/about" 
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:bg-brand-purple/10"
              >
                About us
              </Link>
              <Link 
                href="/faq" 
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:bg-brand-purple/10"
              >
                FAQ
              </Link>
              <Link 
                href="/blog" 
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:bg-brand-purple/10"
              >
                Blog
              </Link>
              <Link 
                href="#demo" 
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:bg-brand-purple/10"
              >
                See it live
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
              <div className="relative group">
                <button className="flex items-center text-gray-300 hover:text-brand-purple transition-colors">
                  Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-lg bg-dark-800 border border-brand-purple/20 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link 
                    href="/products/brandy-im" 
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-brand-purple/10 transition-colors"
                  >
                    Brandy IM
                  </Link>
                  <Link 
                    href="/products/naimi-ai" 
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-brand-purple/10 transition-colors"
                  >
                    Naimi.ai
                  </Link>
                </div>
              </div>
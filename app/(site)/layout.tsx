import type { ReactNode } from 'react';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <ul className="hidden md:flex space-x-8">
            <li><a href="/about" className="hover:text-blue-600">About</a></li>
            <li><a href="/services" className="hover:text-blue-600">Services</a></li>
            <li><a href="/industries" className="hover:text-blue-600">Industries</a></li>
            <li><a href="/news" className="hover:text-blue-600">News</a></li>
            <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinksLeft = [
  { href: '#events', label: 'Events' },
  { href: '#music', label: 'Music' },
];

const navLinksRight = [{ href: '#contact', label: 'Contact Us' }];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 right-0 bg-transparent py-5 z-50'>
      {/* NAVBAR */}
      <nav className='relative container mx-auto px-6 pt-6 flex items-center justify-between'>
        {/* LEFT LINKS (PC) */}
        <ul className='hidden md:flex gap-6 flex-1 justify-start'>
          {navLinksLeft.map((link) => (
            <li key={link.href}>
              <a href={link.href} className='text-2xl hover:text-[#F88F70] cursor-pointer'>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CENTER LOGO (PC) */}
        <a
          href='#home'
          className='hidden md:flex absolute left-1/2 transform -translate-x-1/2 text-5xl font-bold tracking-tight text-primary text-center'
        >
          OH STELLA
        </a>

        {/* RIGHT LINKS (PC) */}
        <ul className='hidden md:flex gap-6 flex-1 justify-end'>
          {navLinksRight.map((link) => (
            <li key={link.href}>
              <a href={link.href} className='text-2xl hover:text-[#F88F70] cursor-pointer'>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE NAVIGATION */}
        <div className='flex md:hidden w-full justify-between items-center'>
          {/* Mobile Logo */}
          <a href='#home' className='text-3xl font-bold text-primary'>
            OH STELLA
          </a>

          {/* Hamburger Button */}
          <button
            className='p-2 text-foreground cursor-pointer'
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU LINKS */}
      {isMobileMenuOpen && (
        <div className='md:hidden bg-[#1B1D3C] animate-fade-in'>
          <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>
            {[...navLinksLeft, ...navLinksRight].map((link, index) => (
              <a
                href={link.href}
                key={index}
                className='text-2xl text-white hover:text-[#F88F70] py-2'
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router';

const navLinksLeft = [
  { href: '/events', label: 'Events' },
  { href: '/music', label: 'Music' },
];

const navLinksRight = [{ href: '/contact', label: 'Contact Us' }];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-primary font-semibold text-2xl'
      : 'text-2xl hover:text-highlight hover:underline hover:underline-offset-5 transition';

  return (
    <header className='fixed top-0 left-0 right-0 bg-transparent py-5 z-50 '>
      {/* NAVBAR */}
      <nav className='relative container mx-auto px-6 pt-6 flex items-center justify-between antonio-regular text-foreground'>
        {/* LEFT LINKS (PC) */}
        <ul className='hidden md:flex gap-6 flex-1 justify-start'>
          {navLinksLeft.map((link) => (
            <li key={link.href}>
              <NavLink to={link.href} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CENTER LOGO (PC) */}
        <NavLink
          to='/'
          className='hidden md:flex absolute left-1/2 transform -translate-x-1/2 text-5xl font-bold  text-center'
        >
          OH STELLA
        </NavLink>

        {/* RIGHT LINKS (PC) */}
        <ul className='hidden md:flex gap-6 flex-1 justify-end '>
          {navLinksRight.map((link) => (
            <li key={link.href}>
              <NavLink to={link.href} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* MOBILE NAVIGATION */}
        <div className='flex md:hidden w-full justify-between items-center antonio-regular text-foreground'>
          {/* Mobile Logo */}
          <NavLink to='/' className='text-3xl font-bold'>
            OH STELLA
          </NavLink>

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
        <div className='md:hidden bg-[#1B1D3C] animate-fade-in antonio-regular text-foreground'>
          <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>
            {[...navLinksLeft, ...navLinksRight].map((link, index) => (
              <NavLink
                to={link.href}
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? 'text-primary font-semibold text-2xl py-2'
                    : 'text-2xl text-white hover:text-link py-2 transition'
                }
                onClick={() => setIsMobileMenuOpen(false)} // closes mobile menu on click
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

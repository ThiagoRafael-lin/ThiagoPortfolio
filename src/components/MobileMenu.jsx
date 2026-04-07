'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (menuRef.current) {
      if (open) {
        gsap.to(menuRef.current, {
          height: 'auto',
          opacity: 1,
          duration: 0.3,
        });
      } else {
        gsap.to(menuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
        });
      }
    }
  }, [open]);

  const links = [
    { label: 'Início', href: '/' },
    { label: 'Projetos', href: '/screen-projects' },
    { label: 'Habilidades', href: '/screen-skills' },
    { label: 'Sobre mim', href: '/screen-about' },
    { label: 'Contato', href: '/screen-contact' },
  ];

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-black hover:text-gray-400 transition-colors"
        aria-label="Toggle menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        ref={menuRef}
        className="absolute top-16 left-0 right-0 bg-slate-50 shadow-lg overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="p-4 font-comfortaa flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-black hover:text-gray-400 hover:underline transition-all delay-75 py-2"
              onClick={handleLinkClick}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

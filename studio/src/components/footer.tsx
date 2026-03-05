import React from 'react';
import { Logo } from './logo';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import { footerLinks, legalLinks } from '@/lib/navigation';

export function SiteFooter() {
  const navLinks = footerLinks;

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#', name: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'Twitter' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', name: 'Instagram' },
  ];

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Logo className="h-8 w-8" />
              <span className="font-headline text-xl font-bold">Helion Connect</span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Reimagining Regional Travel — Clean, Efficient, and Already on Track.
            </p>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-lg mb-4">Navigate</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'bg-secondary hover:bg-primary')}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Helion Connect, Colorado Springs, a wholly owned subsidiary of Redstone Global Inc. • All Rights Reserved
          </p>
          <div className="flex space-x-4">
            {legalLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Facebook, Twitter, Instagram } from 'lucide-react';
import { Logo } from './logo';
import { headerLinks, topHeaderLinks } from '@/lib/navigation';
import { cn } from '@/lib/utils';
import React from 'react';

export function SiteHeader() {
  const navLinks = headerLinks;
  const topNavLinks = topHeaderLinks;

  const socialLinks = [
    { icon: <Facebook className="h-4 w-4" />, href: '#', name: 'Facebook' },
    { icon: <Twitter className="h-4 w-4" />, href: '#', name: 'Twitter' },
    { icon: <Instagram className="h-4 w-4" />, href: '#', name: 'Instagram' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-header/30 bg-header text-header-foreground">
      <div className="border-b border-header/30 bg-topnav text-topnav-foreground">
        <div className="container mx-auto flex h-10 items-center px-4">
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-topnav-foreground/70 hover:text-topnav-foreground"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
          </div>
          <nav className="hidden md:flex gap-x-6 text-[15px] flex-1 justify-end">
            {topNavLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-topnav-foreground/80 hover:text-topnav-foreground transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="mr-6 flex items-center">
          <Logo className="w-60" />
        </Link>
        <nav className="hidden md:flex gap-6 flex-1">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-xl font-medium text-header-foreground/80 transition-colors hover:text-white">
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col">
              <Link href="/" className="mr-6 flex items-center mb-6">
                <Logo className="w-60" />
              </Link>
              <div className="flex flex-col space-y-3 flex-1">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} className="text-lg font-medium text-foreground hover:text-accent">
                    {link.name}
                  </Link>
                ))}
                
                <div className="my-3 border-t border-border"></div>

                {topNavLinks.map((link) => (
                  <Link key={link.name} href={link.href} className="text-sm text-muted-foreground hover:text-accent">
                    {link.name}
                  </Link>
                ))}

                <div className="mt-auto space-y-4 pt-6">
                    <div className="flex items-center justify-center space-x-4">
                        {socialLinks.map((link) => (
                            <a
                            key={link.name}
                            href={link.href}
                            className={cn("text-muted-foreground hover:text-accent")}
                            aria-label={link.name}
                            >
                            {React.cloneElement(link.icon, {className: "h-5 w-5"})}
                            </a>
                        ))}
                    </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

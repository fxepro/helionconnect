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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="border-b bg-card/50">
        <div className="container mx-auto flex h-10 items-center px-4">
          <nav className="hidden md:flex gap-x-6 text-sm text-muted-foreground flex-1">
            {topNavLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-end space-x-4">
            {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block font-headline">Helion Connect</span>
        </Link>
        <nav className="hidden md:flex gap-6 flex-1">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button className="hidden md:inline-flex" variant="accent">
            Book An Appointment
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                <Logo className="h-6 w-6" />
                <span className="font-bold font-headline">Helion Connect</span>
              </Link>
              <div className="flex flex-col space-y-3 flex-1">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} className="text-lg font-medium text-foreground hover:text-primary">
                    {link.name}
                  </Link>
                ))}
                
                <div className="my-3 border-t border-border"></div>

                {topNavLinks.map((link) => (
                  <Link key={link.name} href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                ))}

                <div className="mt-auto space-y-4 pt-6">
                    <Button variant="accent" className="w-full">
                    Book An Appointment
                    </Button>

                    <div className="flex items-center justify-center space-x-4">
                        {socialLinks.map((link) => (
                            <a
                            key={link.name}
                            href={link.href}
                            className={cn("text-muted-foreground hover:text-primary")}
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

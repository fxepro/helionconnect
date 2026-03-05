"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SiteHeader } from '@/components/header';
import { SiteFooter } from '@/components/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Clock3,
  Split,
  TrendingDown,
  MapPin,
  Bus,
  ShieldCheck,
  DollarSign,
  Leaf,
  CheckCircle,
  MessageCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ChatWidget } from '@/components/chat-widget';

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-train');
  const departuresImage = PlaceHolderImages.find((img) => img.id === 'commute-departures');
  const freightImage = PlaceHolderImages.find((img) => img.id === 'commute-freight');
  const infraImage = PlaceHolderImages.find((img) => img.id === 'commute-infra');
  const corridorImage = PlaceHolderImages.find((img) => img.id === 'corridor-advantage');
  const visionImage = PlaceHolderImages.find((img) => img.id === 'vision-forward');

  const commuteFeatures = [
    {
      icon: <Clock3 className="size-8 text-accent" />,
      title: '3 Morning Departures',
      description:
        'Each service operates on a limited-frequency model with 3 morning departures and 3 evening returns each way, timed perfectly for working commuters and intercity travelers.',
      image: departuresImage,
    },
    {
      icon: <Split className="size-8 text-accent" />,
      title: 'Built Around Freight Windows',
      description:
        'Our service is strategically built around Union Pacific’s low-traffic freight windows, ensuring efficient scheduling without disrupting existing operations.',
      image: freightImage,
    },
    {
      icon: <TrendingDown className="size-8 text-accent" />,
      title: 'Reduces Infrastructure Costs',
      description:
        'This approach drastically reduces new infrastructure requirements while unlocking new mobility for regional economies.',
      image: infraImage,
    },
  ];

  const benefits = [
    {
      icon: <DollarSign className="size-8 text-primary" />,
      title: 'Economic',
      points: [
        'Uses existing Union Pacific corridors',
        'Avoids overhead electrification costs (up to $5M per mile)',
        'Promotes regional economic links between major and satellite cities',
      ],
    },
    {
      icon: <Leaf className="size-8 text-primary" />,
      title: 'Environmental',
      points: [
        'Cuts regional CO₂ emissions and improves air quality',
        'Zero direct emissions from hydrogen fuel cells',
        'Sustainable transport solution for growing regions',
      ],
    },
    {
      icon: <CheckCircle className="size-8 text-primary" />,
      title: 'Practical',
      points: [
        'Ready for federal and state clean-transport funding programs',
        'Scalable to multiple corridors nationwide',
        'Fast implementation timeline with existing infrastructure',
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative h-[60vh] min-h-[500px] w-full">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
            <h1 className="font-headline text-4xl md:text-6xl font-bold max-w-4xl leading-tight">
              Reimagining Regional Travel — Clean, Efficient, and Already on Track.
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl text-slate-300">
              A new generation of commuter rail using existing freight corridors and hydrogen-powered trains. No
              wires. No diesel. Zero emissions.
            </p>
          </div>
        </section>

        <section id="smarter-commute" className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">A Smarter Way to Commute</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                America’s growing regional corridors demand reliable, sustainable mobility — without the
                multi-billion-dollar cost of new electrified rail. Our concept reuses existing Union Pacific freight
                lines for a lightweight, passenger-focused service.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {commuteFeatures.map((feature) => (
                <Card key={feature.title} className="flex flex-col overflow-hidden group">
                  <div className="relative h-48 w-full">
                    {feature.image && (
                      <Image
                        src={feature.image.imageUrl}
                        alt={feature.image.description}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={feature.image.imageHint}
                      />
                    )}
                  </div>
                  <CardHeader className="flex-row items-center gap-4">
                    {feature.icon}
                    <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <a href="#" className={cn(buttonVariants({ variant: 'link' }), 'p-0 h-auto text-accent')}>
                      Learn More &rarr;
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="corridor-advantage" className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">The Corridor Advantage</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  The backbone of America’s freight network already connects the cities we need to link. Through
                  collaboration with Union Pacific, passenger operations can share existing tracks, sidings, and control
                  systems — a sustainable alternative to new right-of-way construction.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    { icon: <MapPin />, text: 'Station placement near population clusters' },
                    { icon: <Bus />, text: 'Integration with city transit systems' },
                    { icon: <ShieldCheck />, text: 'Safety and grade-crossing upgrades' },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">{item.icon}</div>
                      <span className="text-lg">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-2xl">
                {corridorImage && (
                  <Image
                    src={corridorImage.imageUrl}
                    alt={corridorImage.description}
                    width={800}
                    height={600}
                    className="object-cover"
                    data-ai-hint={corridorImage.imageHint}
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Benefits at a Glance</h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {benefits.map((benefit) => (
                <Card key={benefit.title}>
                  <CardHeader className="items-center text-center">
                    {benefit.icon}
                    <CardTitle className="font-headline text-2xl mt-4">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-center text-muted-foreground">
                      {benefit.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="vision-forward" className="py-16 lg:py-24 text-center">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                 {visionImage && (
                  <Image
                    src={visionImage.imageUrl}
                    alt={visionImage.description}
                    width={800}
                    height={600}
                    className="object-cover"
                    data-ai-hint={visionImage.imageHint}
                  />
                )}
              </div>
              <div className="text-left">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Vision Forward</h2>
                <h3 className="font-headline text-2xl md:text-3xl mt-2">From Concept to Connected Communities</h3>
                <p className="mt-4 text-lg text-muted-foreground">
                  The Hydrogen Commuter Rail Initiative aims to become a national model for sustainable intercity transport
                  — beginning with Colorado’s Front Range. By combining proven hydrogen technology with shared-use
                  freight infrastructure, we can redefine what’s possible in American passenger rail — cost-effectively,
                  cleanly, and within reach.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="get-involved" className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Get Involved Today</h2>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button variant="accent" size="lg" onClick={() => setIsChatOpen(true)}>
                Chat Directly With Us
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Book An Appointment
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      
      <Button
        variant="accent"
        size="icon"
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg z-50 animate-pulse"
        onClick={() => setIsChatOpen(true)}
      >
        <MessageCircle className="h-8 w-8" />
        <span className="sr-only">Open Chat</span>
      </Button>

      <ChatWidget open={isChatOpen} onOpenChange={setIsChatOpen} />
    </div>
  );
}

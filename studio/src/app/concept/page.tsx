import { SiteHeader } from '@/components/header';
import { SiteFooter } from '@/components/footer';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  Landmark,
  ShieldCheck,
  Rocket,
  Scaling,
  Sprout,
  TrendingDown,
  Users,
  Wallet,
  Clock,
  Gauge,
  Train,
  Ticket,
  Map,
  Users2,
  Mountain,
  Signal,
  Home,
  Network,
  Droplets,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHero } from '@/components/page-hero';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ConceptPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'concept-hero');

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {heroImage && (
          <PageHero
            title="The Concept"
            subtitle="Reusing Freight Corridors for a New Generation of Commuter Rail"
            image={heroImage}
          />
        )}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <p className="text-lg text-muted-foreground mb-8">
                Across America’s fast-growing regional corridors, the demand for affordable, sustainable, and dependable daily travel continues to rise. Metropolitan areas are expanding beyond traditional commuting ranges, pushing the limits of highways and existing transit systems.
              </p>
              <p className="text-lg text-muted-foreground mb-12">
                Rather than building entirely new railways — a process that can take decades and cost billions — a smarter path lies before us: reusing the existing freight rail infrastructure that already connects these cities. This approach opens the door to rapid deployment of clean, intercity commuter trains.
              </p>
            </div>

            <div className="space-y-16 max-w-6xl mx-auto">
              <article>
                <h3 className="font-headline text-3xl font-bold text-accent mb-6 border-l-4 border-accent pl-4">
                  1. The Problem: Congestion & Cost
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Highway expansion offers diminishing returns, and conventional commuter rail proposals often face insurmountable capital hurdles. While the need is clear, the cost and time to build new systems have held back progress.
                  </p>
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle className="text-xl font-headline">Key Barriers</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-4">
                        <Wallet className="size-6 text-accent mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground">High Electrification Costs</h4>
                          <p className="text-sm">Installing overhead catenary can cost $4–6 million per mile, a major financial barrier.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Map className="size-6 text-accent mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground">Right-of-Way Acquisition</h4>
                          <p className="text-sm">New rail corridors can take 10–20 years to negotiate, permit, and acquire.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Users2 className="size-6 text-accent mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground">Public Funding Competition</h4>
                          <p className="text-sm">Budgets often prioritize larger intercity projects, leaving regional lines underfunded.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </article>

              <article>
                <h3 className="font-headline text-3xl font-bold text-accent mb-6 border-l-4 border-accent pl-4">
                  2. The Solution: Shared Infrastructure
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    The U.S. freight network is a vast, existing asset. By using low-traffic segments for passenger service, we dramatically reduce costs and accelerate deployment.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 pt-4">
                      <Card className="p-4 bg-card/50">
                        <div className="flex items-center gap-3">
                          <Network className="size-7 text-accent"/>
                          <h4 className="font-headline text-lg text-foreground">Shared-Use Corridors</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">Operate passenger trains on UP tracks in predefined windows, avoiding freight interference.</p>
                      </Card>
                       <Card className="p-4 bg-card/50">
                        <div className="flex items-center gap-3">
                          <Signal className="size-7 text-accent"/>
                          <h4 className="font-headline text-lg text-foreground">Targeted Upgrades</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">Focus investment on critical points like sidings, signals, and crossings to meet passenger standards.</p>
                      </Card>
                       <Card className="p-4 bg-card/50">
                        <div className="flex items-center gap-3">
                          <Home className="size-7 text-accent"/>
                          <h4 className="font-headline text-lg text-foreground">Localized Stations</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">Build small, modular platforms near population hubs to minimize land and construction costs.</p>
                      </Card>
                       <Card className="p-4 bg-card/50">
                        <div className="flex items-center gap-3">
                          <Droplets className="size-7 text-accent"/>
                          <h4 className="font-headline text-lg text-foreground">Alternative Power Trains</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">Use self-contained hydrogen propulsion, eliminating the need for expensive overhead wires.</p>
                      </Card>
                  </div>
                </div>
              </article>

              <article>
                <h3 className="font-headline text-3xl font-bold text-accent mb-6 border-l-4 border-accent pl-4">
                  3. The Operating Model
                </h3>
                <div className="space-y-6 text-muted-foreground">
                  <p>The service model is designed for efficiency, reliability, and the modern commuter.</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-headline text-xl font-semibold text-foreground mb-2 flex items-center gap-2"><Clock className="size-5 text-accent"/>Frequency</h4>
                      <ul className="list-disc list-inside space-y-1 pl-4 text-sm">
                        <li>3 morning departures</li>
                        <li>3 evening returns</li>
                        <li>Timed for peak commuting hours</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-headline text-xl font-semibold text-foreground mb-2 flex items-center gap-2"><Gauge className="size-5 text-accent"/>Speed & Length</h4>
                      <ul className="list-disc list-inside space-y-1 pl-4 text-sm">
                        <li>70–100 mile typical route</li>
                        <li>65–75 mph average speed</li>
                        <li>~80 minute end-to-end travel</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-headline text-xl font-semibold text-foreground mb-2 flex items-center gap-2"><Train className="size-5 text-accent"/>Fleet & Facilities</h4>
                      <ul className="list-disc list-inside space-y-1 pl-4 text-sm">
                        <li>Small fleet of 3–5 trainsets</li>
                        <li>Light maintenance depot</li>
                        <li>Use of existing UP sidings</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-headline text-xl font-semibold text-foreground mb-2 flex items-center gap-2"><Ticket className="size-5 text-accent"/>Passenger Experience</h4>
                      <ul className="list-disc list-inside space-y-1 pl-4 text-sm">
                        <li>Simple, accessible stations</li>
                        <li>Digital ticketing & Wi-Fi</li>
                        <li>Last-mile transit integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>

              <article>
                <h3 className="font-headline text-3xl font-bold text-accent mb-6 border-l-4 border-accent pl-4">
                  4. Case Study: Colorado Front Range
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>The I-25 corridor between Colorado Springs and Denver provides an ideal proving ground for this concept, connecting over 1 million residents.</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center pt-4">
                      <Card className="p-4">
                        <Mountain className="size-8 mx-auto text-accent"/>
                        <p className="text-2xl font-bold text-foreground mt-2">70</p>
                        <p className="text-xs text-muted-foreground">Miles</p>
                      </Card>
                       <Card className="p-4">
                        <Users className="size-8 mx-auto text-accent"/>
                        <p className="text-2xl font-bold text-foreground mt-2">1M+</p>
                        <p className="text-xs text-muted-foreground">Residents</p>
                      </Card>
                       <Card className="p-4">
                        <Clock className="size-8 mx-auto text-accent"/>
                        <p className="text-2xl font-bold text-foreground mt-2">100+</p>
                        <p className="text-xs text-muted-foreground">Mins by Car</p>
                      </Card>
                       <Card className="p-4">
                        <Train className="size-8 mx-auto text-accent"/>
                        <p className="text-2xl font-bold text-foreground mt-2">~80</p>
                        <p className="text-xs text-muted-foreground">Mins by Train</p>
                      </Card>
                  </div>
                  <p className="font-medium text-center text-foreground py-2 mt-4 rounded-md bg-card">
                    Colorado Springs ↔ Castle Rock ↔ Lone Tree ↔ Denver Union Station
                  </p>
                </div>
              </article>

              <article>
                <h3 className="font-headline text-3xl font-bold text-accent mb-6 border-l-4 border-accent pl-4">
                  5. A Scalable, Cost-Effective Template
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="p-4">
                    <TrendingDown className="size-7 mb-3 text-accent"/>
                    <h4 className="font-headline text-lg text-foreground">Low Capital Cost</h4>
                    <p className="text-sm text-muted-foreground mt-1">Avoids up to 70% of new rail project costs by using existing corridors.</p>
                  </Card>
                  <Card className="p-4">
                    <Sprout className="size-7 mb-3 text-accent"/>
                    <h4 className="font-headline text-lg text-foreground">Minimal Impact</h4>
                    <p className="text-sm text-muted-foreground mt-1">Limits ecological disturbance and accelerates permitting by staying in established rights-of-way.</p>
                  </Card>
                   <Card className="p-4">
                    <Rocket className="size-7 mb-3 text-accent"/>
                    <h4 className="font-headline text-lg text-foreground">Rapid Implementation</h4>
                    <p className="text-sm text-muted-foreground mt-1">Projects can become operational in 3-5 years, not 10-15.</p>
                  </Card>
                   <Card className="p-4">
                    <Scaling className="size-7 mb-3 text-accent"/>
                    <h4 className="font-headline text-lg text-foreground">Scalable Framework</h4>
                    <p className="text-sm text-muted-foreground mt-1">The model is a template that can be replicated on other routes nationwide.</p>
                  </Card>
                   <Card className="p-4">
                    <Landmark className="size-7 mb-3 text-accent"/>
                    <h4 className="font-headline text-lg text-foreground">Funding Alignment</h4>
                    <p className="text-sm text-muted-foreground mt-1">Qualifies for multiple federal and state clean transport funding programs.</p>
                  </Card>
                   <Card className="p-4">
                    <Users className="size-7 mb-3 text-accent"/>
                    <h4 className="font-headline text-lg text-foreground">Community Benefits</h4>
                    <p className="text-sm text-muted-foreground mt-1">Stimulates regional economies and provides equitable transport access.</p>
                  </Card>
                </div>
              </article>

              <Card className="text-center p-8 bg-gradient-to-br from-card to-background">
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  By focusing on what already exists, we can transform regional travel from a long-term aspiration into an immediate opportunity. It’s not a distant vision — it’s already on track.
                </p>
                <Link href="/#benefits" className={cn(buttonVariants({ variant: 'accent', size: 'lg' }))}>
                  Explore Technology Solutions
                  <ArrowRight className="ml-2" />
                </Link>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { SiteHeader } from '@/components/header';
import { SiteFooter } from '@/components/footer';
import { PageHero } from '@/components/page-hero';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  ArrowRight,
  Gauge,
  MapPin,
  Clock,
  Users,
  Train,
  Briefcase,
  Home,
  Network,
  TrendingUp,
  FileText,
  Signal,
  DollarSign,
  Globe,
  Scaling,
  Leaf,
  Map,
} from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function CorridorsPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'corridors-hero');
  const mapImage = PlaceHolderImages.find((img) => img.id === 'corridor-map');

  const stations = [
    {
      name: 'Colorado Springs Depot',
      function: 'Southern Terminus',
      features: 'Access to downtown business district; connection to Mountain Metro Transit.',
      icon: <Home className="size-6 text-accent" />,
    },
    {
      name: 'Castle Rock',
      function: 'Midpoint Commuter Hub',
      features: 'Park-and-ride facilities, serving Douglas County residents and regional workers.',
      icon: <MapPin className="size-6 text-accent" />,
    },
    {
      name: 'Lone Tree (Sky Ridge Area)',
      function: 'Northern Suburban Hub',
      features: 'Connection to RTD Light Rail; proximity to employment centers and Sky Ridge Medical campus.',
      icon: <Briefcase className="size-6 text-accent" />,
    },
    {
      name: 'Denver Union Station',
      function: 'Northern Terminus',
      features: 'Integration with RTD rail network, bus services, and intercity Amtrak routes.',
      icon: <Network className="size-6 text-accent" />,
    },
  ];

  const rationale = [
     {
      icon: <DollarSign className="size-7 mb-3 text-accent"/>,
      title: "Low Capital Requirement",
      description: "Reusing existing freight infrastructure reduces upfront costs by 60–70%."
    },
     {
      icon: <Globe className="size-7 mb-3 text-accent"/>,
      title: "Regional Integration",
      description: "Links two major labor markets, supporting state economic growth."
    },
     {
      icon: <Scaling className="size-7 mb-3 text-accent"/>,
      title: "Scalable Model",
      description: "Provides a template for future corridors like Fort Collins–Denver."
    },
     {
      icon: <Leaf className="size-7 mb-3 text-accent"/>,
      title: "Environmental Gains",
      description: "Replaces thousands of single-occupancy vehicle trips, reducing emissions."
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {heroImage && (
          <PageHero
            title="Corridors"
            subtitle="Pilot Study: Colorado Springs–Denver Commuter Line"
            image={heroImage}
          />
        )}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-16">
              <article>
                <h3 className="font-headline text-3xl font-bold text-primary mb-6 border-l-4 border-accent pl-4">
                  1. Route Focus: Colorado Springs–Denver
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    The proposed corridor connects two of Colorado’s fastest-growing urban centers — Colorado Springs and Denver — through the Castle Rock–Douglas County growth belt. The line closely follows the existing Union Pacific (UP) right-of-way, paralleling Interstate 25, which currently experiences some of the state’s most congested highway conditions.
                  </p>
                  <p>
                    This corridor is a critical missing link for sustainable intercity commuting. The use of existing UP infrastructure transforms this from a billion-dollar new-build to a practical, scalable mobility project.
                  </p>
                </div>
              </article>

              <article>
                 <h3 className="font-headline text-3xl font-bold text-primary mb-6 border-l-4 border-accent pl-4">
                  2. Length & Timing
                </h3>
                <p className="text-muted-foreground mb-6">
                  The service is designed to be competitive with peak-hour highway driving, offering a reliable alternative for daily commuters.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="p-4">
                    <Clock className="size-8 text-accent mb-3"/>
                    <p className="text-3xl font-bold text-foreground">85-90</p>
                    <p className="text-sm text-muted-foreground">Mins Travel Time</p>
                  </Card>
                   <Card className="p-4">
                    <Gauge className="size-8 text-accent mb-3"/>
                    <p className="text-3xl font-bold text-foreground">~55 mph</p>
                    <p className="text-sm text-muted-foreground">Average Speed</p>
                  </Card>
                   <Card className="p-4">
                    <Train className="size-8 text-accent mb-3"/>
                    <p className="text-3xl font-bold text-foreground">6x Daily</p>
                    <p className="text-sm text-muted-foreground">3 AM & 3 PM Departures</p>
                  </Card>
                </div>
              </article>

              <article>
                <h3 className="font-headline text-3xl font-bold text-primary mb-6 border-l-4 border-accent pl-4">
                  3. Stations
                </h3>
                 <p className="text-muted-foreground mb-6">
                    Proposed stations are selected for operational feasibility and commuter density, with designs prioritizing minimal infrastructure additions.
                </p>
                <Card>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Station</TableHead>
                        <TableHead>Function</TableHead>
                        <TableHead className="hidden md:table-cell">Key Features</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {stations.map((station) => (
                        <TableRow key={station.name}>
                          <TableCell className="font-medium flex items-center gap-3"><div className="bg-primary/10 p-2 rounded-md hidden sm:block">{station.icon}</div>{station.name}</TableCell>
                          <TableCell>{station.function}</TableCell>
                          <TableCell className="hidden md:table-cell">{station.features}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              </article>

              <article>
                <h3 className="font-headline text-3xl font-bold text-primary mb-6 border-l-4 border-accent pl-4">
                  4. Ridership Potential
                </h3>
                 <p className="text-muted-foreground mb-6">
                   Based on U.S. Census LEHD data, the corridor has a significant daily commuter flow, offering a substantial market for a new rail service.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="p-6 text-center">
                    <Users className="size-8 mx-auto text-accent mb-3"/>
                    <p className="text-3xl font-bold text-foreground">15k-18k</p>
                    <p className="text-sm text-muted-foreground">Daily One-Way Trips</p>
                  </Card>
                   <Card className="p-6 text-center">
                    <TrendingUp className="size-8 mx-auto text-accent mb-3"/>
                    <p className="text-3xl font-bold text-foreground">10-15%</p>
                    <p className="text-sm text-muted-foreground">Target Mode Shift</p>
                  </Card>
                   <Card className="p-6 text-center">
                    <Train className="size-8 mx-auto text-accent mb-3"/>
                    <p className="text-3xl font-bold text-foreground">1,500+</p>
                    <p className="text-sm text-muted-foreground">Daily Rail Boardings</p>
                  </Card>
                </div>
                 <p className="mt-6 text-center text-muted-foreground">
                    Achieving this would remove over 1,200 cars from I-25 during peak hours.
                 </p>
              </article>

               <article>
                <h3 className="font-headline text-3xl font-bold text-primary mb-6 border-l-4 border-accent pl-4">
                  5. Track & Operations
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                    <p>
                        The service would operate on Union Pacific’s Joint Line, a corridor with moderate freight activity where shared use is technically and operationally feasible. A critical partnership with UP is required, for which precedent exists on other successful passenger rail lines.
                    </p>
                    <Card className="bg-card/50">
                        <CardHeader>
                            <CardTitle className="font-headline text-lg flex items-center gap-3"><Signal className="text-accent" />Key Operational Facts</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2"><Train className="size-4"/>FRA Class 4 Track (79 mph max)</li>
                                <li className="flex items-center gap-2"><FileText className="size-4"/>Requires siding, signal, and station upgrades</li>
                                <li className="flex items-center gap-2"><Network className="size-4"/>Access agreements and dispatch coordination with UP</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
              </article>

               <article>
                <h3 className="font-headline text-3xl font-bold text-primary mb-6 border-l-4 border-accent pl-4">
                  6. Economic and Strategic Rationale
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {rationale.map((item) => (
                    <Card key={item.title} className="p-4 text-center">
                      {item.icon}
                      <h4 className="font-headline text-lg text-foreground mt-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </Card>
                  ))}
                </div>
              </article>

              <article>
                 <h3 className="font-headline text-3xl font-bold text-primary mb-6 border-l-4 border-accent pl-4">
                  7. Corridor Map
                </h3>
                <Card>
                    <CardHeader className="flex-row items-center gap-4">
                        <Map className="size-6 text-accent"/>
                        <CardTitle className="font-headline text-xl">Primary Alignment: UP Joint Line</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {mapImage && (
                          <div className="rounded-lg overflow-hidden border">
                            <Image
                              src={mapImage.imageUrl}
                              alt={mapImage.description}
                              width={800}
                              height={600}
                              className="object-cover"
                              data-ai-hint={mapImage.imageHint}
                            />
                           </div>
                        )}
                        <p className="font-medium text-center text-foreground py-3 mt-4 rounded-md bg-secondary">
                          Colorado Springs ↔ Castle Rock ↔ Lone Tree ↔ Denver Union Station
                        </p>
                    </CardContent>
                </Card>
              </article>

              <Card className="text-center p-8 bg-gradient-to-br from-card to-background">
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">Ready to Explore Your Corridor?</h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Discover how the Colorado Springs–Denver model can be adapted for other regional corridors.
                </p>
                <Link href="#get-involved" className={cn(buttonVariants({ variant: 'accent', size: 'lg' }))}>
                  Contact Our Team
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

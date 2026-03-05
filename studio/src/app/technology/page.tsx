import { SiteHeader } from '@/components/header';
import { SiteFooter } from '@/components/footer';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Fuel,
  Zap,
  BatteryCharging,
  Wind,
  ShieldCheck,
  Factory,
  Clock,
  Leaf,
  Droplets,
  Speaker,
  Train,
  CheckCircle,
  XCircle,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { PageHero } from '@/components/page-hero';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function TechnologyPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'technology-hero');

  const comparisonData = [
    {
      parameter: 'Infrastructure Cost',
      diesel: '$10–15M per mile (new track + upgrades)',
      electric: '$20–25M per mile (catenary + substations)',
      hydrogen: '$10–12M per mile (no catenary)',
    },
    {
      parameter: 'Operating Energy Cost',
      diesel: '$0.25–0.30 per seat-mile',
      electric: '$0.20–0.25 per seat-mile',
      hydrogen: '$0.22–0.26 per seat-mile',
    },
    {
      parameter: 'CO₂ Emissions',
      diesel: '90–100 g/pkm',
      electric: '0 g/pkm',
      hydrogen: '0–5 g/pkm (depending on H₂ source)',
    },
    {
      parameter: 'Noise (dB)',
      diesel: '85–90',
      electric: '75–80',
      hydrogen: '75–80',
    },
    {
      parameter: 'Fuel Source',
      diesel: 'Diesel',
      electric: 'Electric Grid',
      hydrogen: 'Hydrogen',
    },
    {
      parameter: 'Maintenance Complexity',
      diesel: 'High',
      electric: 'Medium',
      hydrogen: 'Low–Medium',
    },
    {
      parameter: 'Electrification Required',
      diesel: 'None',
      electric: 'Extensive',
      hydrogen: 'None',
    },
    {
      parameter: 'Refueling / Charging Time',
      diesel: '15–20 minutes',
      electric: 'Continuous power',
      hydrogen: '15–20 minutes',
    },
    {
      parameter: 'Environmental Impact',
      diesel: 'High',
      electric: 'Low',
      hydrogen: 'Very Low',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {heroImage && (
          <PageHero
            title="Technology"
            subtitle="Hydrogen-Powered Rail: Clean Energy on Familiar Tracks"
            image={heroImage}
          />
        )}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <p className="text-lg text-muted-foreground mb-8">
                The Hydrogen Commuter Rail Initiative builds on the promise of sustainable transport by using a propulsion technology that merges the best of both worlds — the efficiency of electric rail and the flexibility of diesel — without the need for expensive overhead power infrastructure.
              </p>
              <p className="text-lg text-muted-foreground mb-12">
                Hydrogen trains operate quietly, cleanly, and efficiently, drawing energy from onboard fuel cells that produce only water vapor as a byproduct. The technology is mature, commercially proven in Europe and Japan, and now ready for regional commuter rail applications in the United States.
              </p>
            </div>

            <div className="space-y-16 max-w-6xl mx-auto">
              <article>
                <h3 className="font-headline text-3xl font-bold text-accent mb-6 border-l-4 border-accent pl-4">
                  1. Hydrogen Power 101: How It Works
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Hydrogen-powered trains use fuel cell electric propulsion, a system that converts stored hydrogen gas into electricity on demand. Here’s how it functions:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 pt-4">
                    <Card className="bg-card/50">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-lg font-headline">
                          <Fuel className="size-6 text-accent" />
                          Hydrogen Storage & Generation
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-2">
                        <p>Compressed hydrogen is stored in high-pressure tanks.</p>
                        <p>In the fuel cell, hydrogen reacts with oxygen to generate DC electricity, water, and heat.</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-card/50">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-lg font-headline">
                          <Zap className="size-6 text-accent" />
                          Power Distribution
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-2">
                         <p>Electricity powers traction motors on the train’s axles.</p>
                         <p>Excess energy charges onboard batteries, also used for acceleration and storing braking energy.</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-card/50">
                       <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-lg font-headline">
                          <BatteryCharging className="size-6 text-accent" />
                           System Efficiency
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-2">
                         <p>Overall tank-to-wheel efficiency reaches 40–60%.</p>
                         <p>Significantly higher than diesel combustion engines (~30–35%).</p>
                      </CardContent>
                    </Card>
                     <Card className="bg-card/50">
                       <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-lg font-headline">
                          <Train className="size-6 text-accent" />
                           Modular Design
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-2">
                         <p>All energy systems are onboard, operating independently of wires.</p>
                         <p>Each train is a mobile power plant emitting only clean water vapor.</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </article>

              <article>
                <h3 className="font-headline text-3xl font-bold text-accent mb-6 border-l-4 border-accent pl-4">
                  2. No Overhead Wiring: Electrification Without the Grid
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Traditional electric rail systems require a vast network of overhead lines (catenary) and substations. Hydrogen eliminates that need entirely.
                  </p>
                   <Card>
                    <CardHeader>
                      <CardTitle className="text-xl font-headline">Advantages of Onboard Energy Storage</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-4">
                        <XCircle className="size-6 text-accent mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground">No Catenary Installation</h4>
                          <p className="text-sm">Avoids $4–6 million per mile in capital cost.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <CheckCircle className="size-6 text-accent mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground">Simplified Permitting</h4>
                          <p className="text-sm">No major visual or land-use impact from overhead wires.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Clock className="size-6 text-accent mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground">Rapid Deployment</h4>
                          <p className="text-sm">Uses the same tracks and clearance standards as diesel.</p>
                        </div>
                      </div>
                       <div className="flex items-start gap-4">
                        <Zap className="size-6 text-accent mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground">Resilient Operation</h4>
                          <p className="text-sm">Not dependent on grid availability or regional power outages.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </article>
              
               <article>
                <h3 className="font-headline text-3xl font-bold text-accent mb-6 border-l-4 border-accent pl-4">
                  3. Safety and Refueling
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Hydrogen rail systems have already proven their safety in years of service overseas. The technology borrows heavily from aerospace-grade storage and handling systems.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-card/50">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-lg font-headline">
                          <ShieldCheck className="size-6 text-accent" />
                          Hydrogen Storage Safety
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-2">
                        <p>Cylinders are built to withstand fire, impact, and puncture tests.</p>
                        <p>Automated leak detection, pressure monitoring, and controlled venting ensure safety.</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-card/50">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-lg font-headline">
                          <Factory className="size-6 text-accent" />
                          Refueling Infrastructure
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-2">
                        <p>A refueling cycle takes 15–20 minutes, similar to diesel.</p>
                        <p>Depots can receive hydrogen via trailers or generate it on-site with renewables.</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </article>

               <article>
                <h3 className="font-headline text-3xl font-bold text-accent mb-6 border-l-4 border-accent pl-4">
                  4. Environmental Gains
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 text-muted-foreground">
                  <div className="flex items-start gap-4">
                      <Droplets className="size-7 mt-1 text-accent"/>
                      <div>
                        <h4 className="font-headline text-lg text-foreground">Zero Tailpipe Emissions</h4>
                        <p className="text-sm mt-1">The only output is pure water vapor, with no particulates, CO₂, or nitrogen oxides.</p>
                      </div>
                  </div>
                   <div className="flex items-start gap-4">
                      <Speaker className="size-7 mt-1 text-accent"/>
                      <div>
                        <h4 className="font-headline text-lg text-foreground">Noise Reduction</h4>
                        <p className="text-sm mt-1">Electric traction is substantially quieter, improving urban livability.</p>
                      </div>
                  </div>
                   <div className="flex items-start gap-4">
                      <Leaf className="size-7 mt-1 text-accent"/>
                      <div>
                        <h4 className="font-headline text-lg text-foreground">Lifecycle Carbon Savings</h4>
                        <p className="text-sm mt-1">Up to 70% lower emissions than diesel, approaching zero with green hydrogen.</p>
                      </div>
                  </div>
                   <div className="flex items-start gap-4">
                      <BatteryCharging className="size-7 mt-1 text-accent"/>
                      <div>
                        <h4 className="font-headline text-lg text-foreground">Energy Recovery</h4>
                        <p className="text-sm mt-1">Regenerative braking recaptures up to 25% of energy for reuse.</p>
                      </div>
                  </div>
                </div>
              </article>

              <article>
                <h3 className="font-headline text-3xl font-bold text-accent mb-6 border-l-4 border-accent pl-4">
                  5. Comparative Analysis: Diesel vs. Electric vs. Hydrogen
                </h3>
                <p className="text-muted-foreground mb-6">
                  Below is a conceptual overview of the three major commuter rail propulsion options. Values are representative of current 2024 U.S. averages and serve as indicative estimates.
                </p>
                <Card>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold text-foreground">Parameter</TableHead>
                        <TableHead className="font-semibold text-foreground">Diesel-Electric</TableHead>
                        <TableHead className="font-semibold text-foreground">Overhead Electric</TableHead>
                        <TableHead className="font-semibold text-foreground">Hydrogen Fuel Cell</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {comparisonData.map((row) => (
                        <TableRow key={row.parameter}>
                          <TableCell className="font-medium">{row.parameter}</TableCell>
                          <TableCell>{row.diesel}</TableCell>
                          <TableCell>{row.electric}</TableCell>
                          <TableCell>{row.hydrogen}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
                 <Card className="mt-6 bg-card/50">
                    <CardHeader>
                      <CardTitle className="text-xl font-headline">Key Takeaways</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="flex items-center gap-2"><CheckCircle className="size-5 text-accent"/> Hydrogen achieves near-parity with electric rail efficiency—without the infrastructure.</p>
                      <p className="flex items-center gap-2"><CheckCircle className="size-5 text-accent"/> Lifecycle cost is 40–50% lower than traditional catenary-based systems.</p>
                      <p className="flex items-center gap-2"><CheckCircle className="size-5 text-accent"/> The technology is modular and ideal for mixed-use freight corridors.</p>
                    </CardContent>
                  </Card>
              </article>

              <Card className="text-center p-8 bg-gradient-to-br from-card to-background">
                <h3 className="font-headline text-2xl font-bold text-accent mb-4">Ready to Learn More?</h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Explore how hydrogen technology can transform regional transportation in your area.
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

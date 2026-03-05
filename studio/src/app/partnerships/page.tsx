import Link from 'next/link';
import { SiteHeader } from '@/components/header';
import { SiteFooter } from '@/components/footer';
import { PageHero } from '@/components/page-hero';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  DollarSign,
  Users,
  FileText,
  ShieldCheck,
  Search,
  Train,
  Signal,
  RadioTower,
  Factory,
  TrendingUp,
  Award,
  Link2,
} from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function PartnershipsPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'partnerships-hero');

  const sharedCorridorAdvantages = [
    {
      icon: <DollarSign className="size-7 text-accent" />,
      title: 'Cost Savings',
      description: 'Substantial savings and reduced environmental impact by avoiding new construction.',
    },
    {
      icon: <ShieldCheck className="size-7 text-accent" />,
      title: 'Proven Safety',
      description: 'Access to well-maintained mainline infrastructure with proven safety records.',
    },
    {
      icon: <Train className="size-7 text-accent" />,
      title: 'Efficient Operations',
      description: 'Time-separated operations between freight and passenger service to avoid congestion.',
    },
    {
      icon: <Users className="size-7 text-accent" />,
      title: 'Minimal Disruption',
      description: 'Minimal land acquisition or disruption to local communities.',
    },
  ];

  const upInfrastructure = [
    {
      icon: <Train className="size-6 text-accent" />,
      title: 'Track and Sidings',
      description: 'Multiple sidings suitable for overtakes or meets between passenger and freight trains.',
    },
    {
      icon: <Signal className="size-6 text-accent" />,
      title: 'Signaling Systems',
      description: 'Centralized Traffic Control (CTC) for coordinated dispatching and predictable time-slot allocation.',
    },
    {
      icon: <RadioTower className="size-6 text-accent" />,
      title: 'Positive Train Control (PTC)',
      description: 'Fully PTC-compliant network providing a digital safety overlay to prevent collisions.',
    },
    {
      icon: <Factory className="size-6 text-accent" />,
      title: 'Maintenance Facilities',
      description: 'Potential sites for shared fueling and light maintenance operations.',
    },
  ];

  const referenceLinks = [
    { text: 'Union Pacific System Map', href: '#' },
    { text: 'UP Line Designations and Subdivisions', href: '#' },
    { text: 'UP Intermodal Facilities Map', href: '#' },
    { text: 'FRA Shared-Use and Safety Standards', href: '#' },
    { text: 'Colorado State Rail Plan (CDOT)', href: '#' },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {heroImage && (
          <PageHero
            title="Partnerships"
            subtitle="Cooperative Framework for Shared Corridor Operations"
            image={heroImage}
          />
        )}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-16">
              
              <div className="text-center">
                 <p className="text-lg text-muted-foreground">
                    The success of our vision depends fundamentally on a cooperative framework with Union Pacific Railroad (UP). As the owner and operator of the primary rail infrastructure, their partnership ensures operational integrity, regulatory compliance, and safe coexistence between freight and passenger services.
                </p>
              </div>
              
              <article>
                <h3 className="font-headline text-3xl font-bold text-accent mb-6 border-l-4 border-accent pl-4">
                  1. Shared Corridors: Leveraging Underutilized Assets
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Union Pacific’s Joint Line is a moderately used freight corridor with available capacity during commuter peak windows. Shared use allows us to utilize existing infrastructure under UP dispatch control, mirroring successful models in other U.S. regions.
                  </p>
                </div>
                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  {sharedCorridorAdvantages.map((item) => (
                    <Card key={item.title} className="p-4 bg-card/50">
                        <div className="flex items-start gap-4">
                            {item.icon}
                            <div>
                                <h4 className="font-headline text-lg text-foreground">{item.title}</h4>
                                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                            </div>
                        </div>
                    </Card>
                  ))}
                </div>
              </article>

              <article>
                 <h3 className="font-headline text-3xl font-bold text-accent mb-6 border-l-4 border-accent pl-4">
                  2. Regulatory Context
                </h3>
                <p className="text-muted-foreground mb-6">
                  Any passenger service on a freight-owned corridor must comply with Federal Railroad Administration (FRA) and Surface Transportation Board (STB) regulations. The FRA’s Shared-Use Policy Framework encourages partnerships that expand passenger mobility without compromising freight efficiency.
                </p>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-xl">Key Regulatory Steps</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-start gap-4">
                            <FileText className="size-6 text-accent mt-1"/>
                            <div>
                                <h4 className="font-semibold text-foreground">Trackage Rights Agreement (TRA)</h4>
                                <p className="text-sm text-muted-foreground">A legal contract outlining access fees, maintenance, dispatch priorities, and liability.</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <ShieldCheck className="size-6 text-accent mt-1"/>
                            <div>
                                <h4 className="font-semibold text-foreground">FRA Safety Certification</h4>
                                <p className="text-sm text-muted-foreground">Ensures all rolling stock, signals, and personnel meet national standards.</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <Search className="size-6 text-accent mt-1"/>
                            <div>
                                <h4 className="font-semibold text-foreground">Environmental & Capacity Review</h4>
                                <p className="text-sm text-muted-foreground">Verifies that shared use does not negatively affect freight efficiency or environmental compliance under NEPA.</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
              </article>
              
              <article>
                 <h3 className="font-headline text-3xl font-bold text-accent mb-6 border-l-4 border-accent pl-4">
                  3. Union Pacific’s Existing Infrastructure
                </h3>
                <p className="text-muted-foreground mb-6">
                    Union Pacific already maintains robust infrastructure along this corridor that can accommodate additional passenger services with minimal upgrades.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {upInfrastructure.map((item) => (
                    <Card key={item.title} className="p-4 flex items-center gap-4 bg-card/50">
                      {item.icon}
                      <div>
                        <h4 className="font-headline text-lg text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </article>

              <article>
                 <h3 className="font-headline text-3xl font-bold text-accent mb-6 border-l-4 border-accent pl-4">
                  4. Benefits to Union Pacific
                </h3>
                <p className="text-muted-foreground mb-6">
                    A structured passenger partnership offers tangible advantages to Union Pacific beyond simple track usage fees.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-xl flex items-center gap-3"><TrendingUp className="text-accent" /> Economic & Operational</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                                <li>Generates steady revenue through trackage-rights agreements.</li>
                                <li>Encourages public investment in corridor improvements.</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-xl flex items-center gap-3"><Award className="text-accent" /> Public Relations & ESG Value</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                                <li>Aligns with ESG commitments by supporting zero-emission transport.</li>
                                <li>Enhances corporate image as a sustainability partner.</li>
                                 <li>Strengthens community goodwill.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
              </article>
              
               <article>
                <h3 className="font-headline text-3xl font-bold text-accent mb-6 border-l-4 border-accent pl-4">
                  5. Reference Resources
                </h3>
                <p className="text-muted-foreground mb-6">
                  For transparency and stakeholder access, several public Union Pacific resources are relevant to corridor analysis and partnership planning.
                </p>
                <Card>
                    <CardContent className="pt-6">
                        <ul className="space-y-3">
                        {referenceLinks.map((link) => (
                            <li key={link.text}>
                            <a href={link.href} className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
                                <Link2 className="size-4" />
                                <span className="underline underline-offset-2">{link.text}</span>
                            </a>
                            </li>
                        ))}
                        </ul>
                    </CardContent>
                </Card>
              </article>

              <Card className="text-center p-8 bg-gradient-to-br from-card to-background">
                <h3 className="font-headline text-2xl font-bold text-accent mb-4">Ready to Discuss Partnership Opportunities?</h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Connect with our team to explore how your region can benefit from shared corridor partnerships.
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

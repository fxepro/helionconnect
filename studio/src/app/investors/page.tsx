import Link from 'next/link';
import { SiteHeader } from '@/components/header';
import { SiteFooter } from '@/components/footer';
import { PageHero } from '@/components/page-hero';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  DollarSign,
  Scaling,
  TrendingUp,
  Users,
  Landmark,
  Leaf,
  Award,
  Rocket,
  Gauge,
  Globe,
  CheckCircle,
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function InvestorsPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'investors-hero');

  const whyInvest = [
    {
      icon: <DollarSign className="size-7 text-accent" />,
      title: 'Asset-Light Approach',
      description: 'Reusing existing rail corridors avoids multi-billion-dollar costs of new infrastructure.',
    },
    {
      icon: <Scaling className="size-7 text-accent" />,
      title: 'Scalable Template',
      description: 'The Colorado pilot creates a repeatable model for expansion to other regional corridors.',
    },
    {
      icon: <TrendingUp className="size-7 text-accent" />,
      title: 'Strategic Alignment',
      description: 'Zero-emission rail technology positions investors at the forefront of climate-conscious transport.',
    },
    {
      icon: <Users className="size-7 text-accent" />,
      title: 'Ridership-Backed Revenue',
      description: 'Predictable income streams from ticket sales, parking, and ancillary services.',
    },
  ];

  const fundingChannels = [
    {
      icon: <Landmark className="size-6 text-accent mt-1" />,
      title: 'Federal Grants',
      description: 'Access to FRA Corridor ID, FTA Low/No Emission, and DOE Hydrogen Hub programs.',
    },
    {
      icon: <Leaf className="size-6 text-accent mt-1" />,
      title: 'Green Bonds',
      description: 'Capital can be raised through ESG-linked municipal or corporate bonds.',
    },
    {
      icon: <Users className="size-6 text-accent mt-1" />,
      title: 'Public-Private Partnerships (PPP)',
      description: 'Shared investment, revenue, and risk mitigation with public and private entities.',
    },
    {
      icon: <Award className="size-6 text-accent mt-1" />,
      title: 'State and Local Incentives',
      description: 'Colorado Clean Transit initiatives and renewable energy credits can enhance viability.',
    },
  ];
  
  const roiData = [
    { metric: 'Capital Efficiency', description: 'Uses existing tracks and freight infrastructure; avoids new electrification costs (~$5M–$7M/mile).' },
    { metric: 'Operational Revenue', description: 'Ticket sales, parking, and ancillary station services provide recurring income.' },
    { metric: 'Environmental Credit Value', description: 'ESG alignment and zero-emission profile may generate grants, tax incentives, and carbon credit revenue.' },
    { metric: 'Scalability', description: 'Success of pilot corridor provides a proven template for national expansion, multiplying revenue potential.' },
  ];


  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {heroImage && (
          <PageHero
            title="Investors"
            subtitle="High-Impact, Low-Capital-Entry Opportunity"
            image={heroImage}
          />
        )}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-16">

              <div className="text-center">
                <p className="text-lg text-muted-foreground">
                    The Colorado Springs–Denver hydrogen commuter rail corridor represents a high-impact, low-capital-entry opportunity for investors, public agencies, and industry collaborators. By leveraging underutilized freight infrastructure and zero-emission hydrogen technology, this project is designed to deliver financial returns, environmental benefits, and scalable operational models that can be replicated nationwide.
                </p>
              </div>

              <article>
                <h3 className="font-headline text-3xl font-bold text-accent mb-6 border-l-4 border-accent pl-4">
                  1. Why Invest?
                </h3>
                 <p className="text-muted-foreground mb-6">
                    This corridor offers a rare combination of low upfront infrastructure cost and high societal impact.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {whyInvest.map((item) => (
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
                 <p className="text-muted-foreground mt-6">
                    Investing in this corridor combines long-term financial stability with tangible public impact — a strong proposition for both public-sector and private-sector partners.
                </p>
              </article>

              <article>
                <h3 className="font-headline text-3xl font-bold text-accent mb-6 border-l-4 border-accent pl-4">
                  2. Funding Channels
                </h3>
                 <p className="text-muted-foreground mb-6">
                    The project is positioned to access multiple public and private funding streams.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {fundingChannels.map((item) => (
                    <Card key={item.title} className="p-4 flex items-start gap-4 bg-card/50">
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
                  3. Development Plan
                </h3>
                 <p className="text-muted-foreground mb-6">
                    The corridor will be delivered in a phased rollout to balance operational learning with capital efficiency.
                </p>
                <Card>
                    <CardContent className="pt-6 space-y-6">
                        <div className="flex items-start gap-4">
                            <Rocket className="size-8 text-accent"/>
                            <div>
                                <h4 className="font-semibold text-foreground text-lg">Phase 1 – Pilot (Colorado Springs–Denver)</h4>
                                <ul className="text-sm text-muted-foreground mt-1 list-disc list-inside">
                                    <li>Three morning and three evening commuter trains per direction</li>
                                    <li>Four stations: Colorado Springs, Castle Rock, Lone Tree, Denver Union Station</li>
                                    <li>Focus on hydrogen train integration, station operations, and ridership modeling</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Gauge className="size-8 text-accent"/>
                            <div>
                                <h4 className="font-semibold text-foreground text-lg">Phase 2 – Service Optimization</h4>
                                <ul className="text-sm text-muted-foreground mt-1 list-disc list-inside">
                                     <li>Additional sidings, schedule refinement, increased train frequency</li>
                                     <li>Ridership and revenue validation for investor reporting</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Globe className="size-8 text-accent"/>
                            <div>
                                <h4 className="font-semibold text-foreground text-lg">Phase 3 – Replication</h4>
                                 <ul className="text-sm text-muted-foreground mt-1 list-disc list-inside">
                                     <li>Extend hydrogen commuter services to additional Front Range corridors or other U.S. regional routes</li>
                                     <li>Opportunities for state-level PPPs and private rail operators to join</li>
                                 </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                 <p className="text-muted-foreground mt-6">This staged approach allows for risk management, operational refinement, and data-backed growth projections.</p>
              </article>
              
               <article>
                <h3 className="font-headline text-3xl font-bold text-accent mb-6 border-l-4 border-accent pl-4">
                  4. ROI Summary
                </h3>
                 <p className="text-muted-foreground mb-6">
                    Investors benefit from both direct revenue and long-term strategic value.
                </p>
                <Card>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Metric</TableHead>
                        <TableHead>Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {roiData.map((row) => (
                        <TableRow key={row.metric}>
                          <TableCell className="font-medium">{row.metric}</TableCell>
                          <TableCell>{row.description}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
                 <p className="text-muted-foreground mt-6 text-center">
                    Combined, these elements create a predictable and resilient investment structure, while contributing to public sustainability goals.
                 </p>
              </article>

              <Card className="text-center p-8 bg-gradient-to-br from-card to-background">
                <h3 className="font-headline text-2xl font-bold text-accent mb-4">Ready to Invest in the Future?</h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Connect with our investment team to explore partnership opportunities and funding pathways.
                </p>
                <Link href="#get-involved" className={cn(buttonVariants({ variant: 'accent', size: 'lg' }))}>
                  Contact Investment Team
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

import Link from 'next/link';
import { SiteHeader } from '@/components/header';
import { SiteFooter } from '@/components/footer';
import { PageHero } from '@/components/page-hero';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  Wind,
  Zap,
  Leaf,
  Users,
  Award,
  CheckCircle,
  Speaker,
  Map,
  TrendingUp,
  DollarSign,
} from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';


export default function SustainabilityPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'sustainability-hero');

  const benefits = [
    { category: 'Air Quality', advantage: 'Zero pollutants (NOx, CO, particulate matter)', icon: <Leaf className="size-6 text-accent" /> },
    { category: 'Noise Levels', advantage: 'Quieter than diesel due to electric traction motors', icon: <Speaker className="size-6 text-accent" /> },
    { category: 'Congestion Reduction', advantage: 'Attracts commuters from I-25, reducing highway load', icon: <TrendingUp className="size-6 text-accent" /> },
    { category: 'Land Use', advantage: 'Utilizes existing rail rights-of-way, minimizing new construction', icon: <Map className="size-6 text-accent" /> },
    { category: 'Economic Resilience', advantage: 'Reduces exposure to volatile diesel fuel markets', icon: <DollarSign className="size-6 text-accent" /> },
  ];

  const fundingPrograms = [
    { title: 'FRA Corridor ID Program', description: 'Supports development of intercity passenger corridors under shared-use models.' },
    { title: 'DOE Regional Clean Hydrogen Hubs (H2Hubs)', description: 'Funds infrastructure for renewable hydrogen production and distribution.' },
    { title: 'FTA Low/No Emission Program', description: 'Supports deployment of zero-emission transit vehicles, adaptable to rail projects.' },
    { title: 'EPA Clean Ports & Clean Transportation Programs', description: 'Provides grants for emission-reduction projects in freight and passenger transport.' },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {heroImage && (
          <PageHero
            title="Sustainability"
            subtitle="Climate-Action Catalyst for Sustainable Mobility"
            image={heroImage}
          />
        )}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-16">

              <div className="text-center">
                 <p className="text-lg text-muted-foreground">
                    The hydrogen rail initiative is designed not only as a transportation solution but as a climate-action catalyst. It integrates the best of modern rail technology with renewable energy policy, positioning Colorado’s Front Range corridor as a leader in sustainable mobility.
                </p>
              </div>

              <article>
                <h3 className="font-headline text-3xl font-bold text-primary mb-6 border-l-4 border-accent pl-4">
                  1. Zero Emissions Goal
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Hydrogen-powered trains produce no tailpipe emissions — only water vapor and heat as byproducts of the fuel-cell process. This makes them directly compatible with federal and state-level decarbonization targets.
                  </p>
                  <Card className="mt-6 bg-card/50">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl">Key Policy Alignments</CardTitle>
                    </CardHeader>
                     <CardContent className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                           <CheckCircle className="size-4 text-accent"/>
                           <span>U.S. DOT Climate Action Plan</span>
                        </div>
                         <div className="flex items-center gap-2">
                           <CheckCircle className="size-4 text-accent"/>
                           <span>Colorado GHG Reduction Roadmap</span>
                        </div>
                         <div className="flex items-center gap-2">
                           <CheckCircle className="size-4 text-accent"/>
                           <span>U.S. Hydrogen Energy Earthshot</span>
                        </div>
                     </CardContent>
                  </Card>
                   <p>
                    Transitioning from diesel to hydrogen propulsion can cut corridor-level CO₂ emissions by up to 10,000 tons annually, depending on service frequency.
                  </p>
                </div>
              </article>

              <article>
                 <h3 className="font-headline text-3xl font-bold text-primary mb-6 border-l-4 border-accent pl-4">
                  2. Cost Comparison: Avoiding Electrification
                </h3>
                <p className="text-muted-foreground mb-6">
                  Traditional electrified rail systems require extensive overhead catenary installation, averaging $5–7 million per mile. Hydrogen technology avoids this entirely, resulting in 30–40% lower infrastructure costs and faster deployment.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-lg flex items-center gap-3"><Zap className="text-accent" /> Traditional Electrification</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                                <li>Requires overhead wiring & substations</li>
                                <li>High capital cost: $5-7M/mile</li>
                                <li>Disruptive and slow to build</li>
                                <li>Visual and landscape impact</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-lg flex items-center gap-3"><Wind className="text-accent" /> Hydrogen Propulsion</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                                <li>Onboard energy generation</li>
                                <li>No overhead wires needed</li>
                                <li>Lower cost, faster deployment</li>
                                <li>Minimal visual impact</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
              </article>

              <article>
                 <h3 className="font-headline text-3xl font-bold text-primary mb-6 border-l-4 border-accent pl-4">
                  3. Renewable Hydrogen Integration
                </h3>
                <p className="text-muted-foreground mb-6">
                    The long-term sustainability of hydrogen trains depends on sourcing green hydrogen — produced using renewable electricity from wind and solar.
                </p>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-xl">Potential Integration Points</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-start gap-4">
                            <Wind className="size-6 text-accent mt-1"/>
                            <div>
                                <h4 className="font-semibold text-foreground">Wind Generation</h4>
                                <p className="text-sm text-muted-foreground">Southern Colorado wind farms can feed an electrolysis facility at the Colorado Springs depot.</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <Zap className="size-6 text-accent mt-1"/>
                            <div>
                                <h4 className="font-semibold text-foreground">Solar Installations</h4>
                                <p className="text-sm text-muted-foreground">Front Range solar farms can support refueling hubs in the Denver area.</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <Users className="size-6 text-accent mt-1"/>
                            <div>
                                <h4 className="font-semibold text-foreground">DOE Hydrogen Hub Partnerships</h4>
                                <p className="text-sm text-muted-foreground">Coordinate regional production and storage with federally supported H2Hubs.</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
              </article>

              <article>
                 <h3 className="font-headline text-3xl font-bold text-primary mb-6 border-l-4 border-accent pl-4">
                  4. Broader Environmental and Community Benefits
                </h3>
                <p className="text-muted-foreground mb-6">
                    Hydrogen rail delivers sustainability at multiple levels beyond emissions.
                </p>
                <Card>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Category</TableHead>
                        <TableHead>Hydrogen Train Advantage</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {benefits.map((benefit) => (
                        <TableRow key={benefit.category}>
                          <TableCell className="font-medium flex items-center gap-3">
                            <div className="bg-primary/10 p-2 rounded-md hidden sm:block">{benefit.icon}</div>
                            {benefit.category}
                          </TableCell>
                          <TableCell>{benefit.advantage}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              </article>

               <article>
                <h3 className="font-headline text-3xl font-bold text-primary mb-6 border-l-4 border-accent pl-4">
                  5. Eligible Programs and Funding Pathways
                </h3>
                <p className="text-muted-foreground mb-6">
                  Hydrogen passenger rail projects align with several federal funding programs, improving grant competitiveness and attracting investment.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {fundingPrograms.map((program) => (
                    <Card key={program.title} className="p-4 flex items-start gap-4 bg-card/50">
                      <Award className="size-6 text-accent mt-1"/>
                      <div>
                        <h4 className="font-headline text-lg text-foreground">{program.title}</h4>
                        <p className="text-sm text-muted-foreground">{program.description}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </article>

              <Card className="text-center p-8 bg-gradient-to-br from-card to-background">
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">Join the Clean Transportation Revolution</h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Be part of Colorado’s sustainable mobility future with hydrogen-powered commuter rail.
                </p>
                <Link href="#get-involved" className={cn(buttonVariants({ variant: 'accent', size: 'lg' }))}>
                  Get Involved Today
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

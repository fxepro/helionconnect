"use client";

import { SiteHeader } from '@/components/header';
import { SiteFooter } from '@/components/footer';
import { PageHero } from '@/components/page-hero';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  FileText,
  Presentation,
  Table,
  PenSquare,
  Info,
  Download,
  Users,
  Building,
  Handshake,
  Link as LinkIcon,
  Landmark,
  Wind,
  Train,
  Map,
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const advocacyFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  organization: z.string().min(1, { message: 'Organization is required' }),
  email: z.string().email({ message: 'Please enter a valid email' }),
  phone: z.string().optional(),
  interest: z.string().min(1, { message: 'Area of interest is required' }),
});

type AdvocacyFormValues = z.infer<typeof advocacyFormSchema>;

function AdvocacyForm() {
  const { toast } = useToast();
  const form = useForm<AdvocacyFormValues>({
    resolver: zodResolver(advocacyFormSchema),
    defaultValues: {
      name: '',
      organization: '',
      email: '',
      phone: '',
      interest: 'Community Outreach',
    },
  });

  function onSubmit(data: AdvocacyFormValues) {
    console.log(data);
    toast({
      title: 'Form Submitted',
      description: 'Thank you for becoming a Corridor Advocate!',
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="organization"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organization/Affiliation *</FormLabel>
                <FormControl>
                  <Input placeholder="Your Organization" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Daytime Phone</FormLabel>
                <FormControl>
                  <Input placeholder="(123) 456-7890" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="interest"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Area of Interest *</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Community Outreach, Policy Research" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="accent" size="lg">
          Submit
        </Button>
      </form>
    </Form>
  );
}


export default function AdvocacyPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'advocacy-hero');

  const providedMaterials = [
    { icon: <FileText className="size-7 text-accent" />, title: 'Informational Briefs' },
    { icon: <Presentation className="size-7 text-accent" />, title: 'Presentation Decks' },
    { icon: <Table className="size-7 text-accent" />, title: 'Economic Data Sheets' },
    { icon: <PenSquare className="size-7 text-accent" />, title: 'Letters & Petitions' },
    { icon: <Info className="size-7 text-accent" />, title: 'FAQs & Talking Points' },
  ];

  const involvementSteps = [
    { icon: <Download className="size-6 text-accent mt-1" />, title: 'Download Advocacy Materials', description: 'Access ready-to-use documents and data sheets.' },
    { icon: <Users className="size-6 text-accent mt-1" />, title: 'Organize Local Meetings', description: 'Engage with local leaders, chambers of commerce, or transportation boards.' },
    { icon: <Building className="size-6 text-accent mt-1" />, title: 'Contact Elected Representatives', description: 'Present the hydrogen corridor concept to your congressional or state officials.' },
    { icon: <Handshake className="size-6 text-accent mt-1" />, title: 'Build Partnerships', description: 'Align with universities, sustainability councils, and industry partners for regional momentum.' },
    { icon: <LinkIcon className="size-6 text-accent mt-1" />, title: 'Stay Connected', description: 'Join our advocacy network to receive updates on progress and new pilot opportunities.' },
  ];
  
  const policyAlignments = [
      { icon: <Landmark className="size-7 text-accent" />, title: 'U.S. DOT Corridor ID Program' },
      { icon: <Wind className="size-7 text-accent" />, title: 'DOE Hydrogen Hubs (H₂Hubs)' },
      { icon: <Train className="size-7 text-accent" />, title: 'Federal Railroad Administration (FRA)' },
      { icon: <Map className="size-7 text-accent" />, title: 'State Climate Action Plans' },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {heroImage && (
          <PageHero
            title="Advocacy"
            subtitle="Empowering Citizens to Advance Sustainable Rail"
            image={heroImage}
          />
        )}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-16">

              <div className="text-center">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Why Advocacy Matters</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Hydrogen rail and corridor reuse are public-interest initiatives that depend on public awareness, community support, and engagement with local and federal decision-makers. Our advocacy initiative helps bridge that gap by equipping you with facts, materials, and templates to make your voice heard.
                </p>
              </div>

              <article>
                <h3 className="font-headline text-3xl font-bold text-primary mb-6 border-l-4 border-accent pl-4">
                  1. What We Provide
                </h3>
                 <p className="text-muted-foreground mb-6">
                    We offer structured support for those wishing to promote hydrogen corridor projects in their regions. All materials are free to use and customizable.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {providedMaterials.map((item) => (
                    <Card key={item.title} className="p-4 flex items-center gap-4 bg-card/50">
                      {item.icon}
                      <h4 className="font-headline text-lg text-foreground">{item.title}</h4>
                    </Card>
                  ))}
                </div>
              </article>

              <article>
                 <h3 className="font-headline text-3xl font-bold text-primary mb-6 border-l-4 border-accent pl-4">
                  2. How You Can Get Involved
                </h3>
                <p className="text-muted-foreground mb-6">
                  You don’t need to be an expert or policymaker to make a difference. Here’s how advocates typically participate.
                </p>
                 <div className="grid md:grid-cols-2 gap-4">
                  {involvementSteps.map((item) => (
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
                 <h3 className="font-headline text-3xl font-bold text-primary mb-6 border-l-4 border-accent pl-4">
                  3. Policy & Legislative Alignment
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our advocacy content aligns with key federal and state frameworks, ensuring conversations remain relevant and data-driven.
                </p>
                 <div className="grid md:grid-cols-2 gap-6">
                  {policyAlignments.map((item) => (
                    <Card key={item.title} className="p-4">
                        <div className="flex items-center gap-4">
                            {item.icon}
                            <h4 className="font-headline text-lg text-foreground">{item.title}</h4>
                        </div>
                    </Card>
                  ))}
                </div>
              </article>
              
              <article>
                <h3 className="font-headline text-3xl font-bold text-primary mb-6 border-l-4 border-accent pl-4">
                  4. Become a Corridor Advocate
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join our network of informed citizens, organizations, and civic leaders working to advance sustainable rail in the United States. Fill out the form below to access advocacy kits, data resources, and customized support for your region.
                </p>
                <Card>
                    <CardContent className="pt-6">
                        <AdvocacyForm />
                    </CardContent>
                </Card>
              </article>

            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

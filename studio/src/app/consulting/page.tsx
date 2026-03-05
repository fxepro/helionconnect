"use client";

import { SiteHeader } from '@/components/header';
import { SiteFooter } from '@/components/footer';
import { PageHero } from '@/components/page-hero';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Users,
  CheckCircle,
  TrendingDown,
  Leaf,
  ShieldCheck,
  Award,
  Briefcase,
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

const consultingFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  organization: z.string().min(1, { message: 'Organization is required' }),
  email: z.string().email({ message: 'Please enter a valid email' }),
  phone: z.string().optional(),
  projectType: z.string().min(1, { message: 'Project type is required' }),
});

type ConsultingFormValues = z.infer<typeof consultingFormSchema>;

function ConsultingForm() {
  const { toast } = useToast();
  const form = useForm<ConsultingFormValues>({
    resolver: zodResolver(consultingFormSchema),
    defaultValues: {
      name: '',
      organization: '',
      email: '',
      phone: '',
      projectType: 'Rail Corridor',
    },
  });

  function onSubmit(data: ConsultingFormValues) {
    console.log(data);
    toast({
      title: 'Inquiry Submitted',
      description: 'Thank you for your interest. Our team will be in touch shortly.',
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
                <FormLabel>Organization *</FormLabel>
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
          name="projectType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Type *</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Rail Corridor, Sustainability Audit" {...field} />
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

export default function ConsultingPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'consulting-hero');
  
  const processSteps = [
    { phase: '1. Feasibility & Scoping', description: 'Comprehensive review of route options, ridership demand, cost models, and right-of-way access to establish a data-driven project baseline.', deliverables: 'Corridor studies, traffic data analysis, preliminary cost–benefit models' },
    { phase: '2. Stakeholder Engagement', description: 'Early coordination with rail operators, municipalities, community stakeholders and regulators to define objectives, constraints and partnership structures.', deliverables: 'Meeting reports, partnership frameworks, regulatory review summaries' },
    { phase: '3. Technical Planning', description: 'Engineering-level design inputs covering track sharing, signaling compatibility, Positive Train Control (PTC) interfaces, station concepts and hydrogen depot siting.', deliverables: 'Technical schematics, PTC/signaling assessments, depot layout concepts' },
    { phase: '4. Financial Structuring', description: 'Development of funding strategies, grant applications, and public–private partnership models to secure capital and operating resources.', deliverables: 'Funding roadmaps, grant-ready documents, investment pitch decks' },
    { phase: '5. Environmental & Policy Review', description: 'Integration of sustainability objectives, emissions baseline assessment and requirement mapping for NEPA/CEQA and related environmental approvals.', deliverables: 'Emissions baselines, EIS documentation support, sustainability certification' },
    { phase: '6. Implementation Oversight', description: 'On-site project management, contractor coordination, QA/QC, and milestone tracking throughout construction and commissioning phases.', deliverables: 'Milestone reports, QA/QC documentation, commissioning schedules' },
    { phase: '7. Launch & Operations Support', description: 'Operational readiness planning, staff training, maintenance planning and performance monitoring to ensure a smooth transition to revenue service.', deliverables: 'Operations manuals, training guides, performance monitoring dashboards' },
  ];

  const whyChooseUs = [
    { icon: <Briefcase className="size-7 text-accent" />, title: 'Integrated Expertise', description: 'Engineering, policy, and finance specialists under one program umbrella.' },
    { icon: <Award className="size-7 text-accent" />, title: 'Proven Models', description: 'Based on real corridor data and partnerships with Class I freight networks.' },
    { icon: <ShieldCheck className="size-7 text-accent" />, title: 'Risk Reduction', description: 'Streamlined approvals and clear cost tracking reduce overruns and uncertainty.' },
    { icon: <Leaf className="size-7 text-accent" />, title: 'Sustainability Alignment', description: 'Each stage incorporates clean energy and ESG metrics.' },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {heroImage && (
          <PageHero
            title="Consulting"
            subtitle="End-to-end services for rail and corridor development projects"
            image={heroImage}
          />
        )}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-16">

              <div className="text-center max-w-4xl mx-auto">
                 <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Concept to Completion</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Every successful mobility project begins with a clear, data-driven concept. Our consulting division transforms early-stage ideas into actionable plans that meet financial, technical, and regulatory standards. Whether the goal is a hydrogen corridor, freight-to-commuter conversion, or a sustainability audit, we provide full-spectrum expertise at every milestone.
                </p>
              </div>
              
              <article>
                <h3 className="font-headline text-3xl font-bold text-primary mb-6 border-l-4 border-accent pl-4">
                  Our Process
                </h3>
                <Card>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Phase</TableHead>
                        <TableHead className="hidden lg:table-cell">Description</TableHead>
                        <TableHead>Key Deliverables</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {processSteps.map((step) => (
                        <TableRow key={step.phase}>
                          <TableCell className="font-medium">{step.phase}</TableCell>
                          <TableCell className="hidden lg:table-cell text-muted-foreground">{step.description}</TableCell>
                          <TableCell>{step.deliverables}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              </article>

              <article>
                 <h3 className="font-headline text-3xl font-bold text-primary mb-6 border-l-4 border-accent pl-4">
                  Why Choose Our Consulting Services
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {whyChooseUs.map((item) => (
                    <Card key={item.title} className="p-6">
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
                <h3 className="font-headline text-3xl font-bold text-primary mb-6 border-l-4 border-accent pl-4">
                  Work With Us
                </h3>
                <p className="text-muted-foreground mb-6">
                  We welcome inquiries from city agencies, private developers, investors, and transit authorities seeking turnkey support for rail, hydrogen, or green-mobility initiatives.
                </p>
                <Card>
                    <CardContent className="pt-6">
                        <ConsultingForm />
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

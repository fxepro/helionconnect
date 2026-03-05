import { SiteHeader } from '@/components/header';
import { SiteFooter } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Users, Eye, TrendingUp, Scale, Mail, Globe } from 'lucide-react';

export default function SafetyPolicyPage() {
  const principles = [
    { icon: <ShieldCheck className="size-6 text-accent" />, title: 'Prevention First', description: 'Proactively identifying and mitigating risks before they become issues.' },
    { icon: <Users className="size-6 text-accent" />, title: 'Shared Accountability', description: 'Empowering every team member and partner to take ownership of safety.' },
    { icon: <TrendingUp className="size-6 text-accent" />, title: 'Continuous Improvement', description: 'Regular review of our safety practices to meet or exceed regulatory standards.' },
    { icon: <Eye className="size-6 text-accent" />, title: 'Transparency', description: 'Open communication about safety measures, incidents, and outcomes.' },
    { icon: <Scale className="size-6 text-accent" />, title: 'Compliance', description: 'Adherence to all local, state, and federal safety regulations and best practices.' },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="font-headline text-4xl md:text-5xl font-bold text-accent mb-4">Safety Policy</h1>
              <p className="text-muted-foreground text-sm mb-12">Helion Connect, a wholly owned subsidiary of Redstone Global Inc.</p>

              <div className="space-y-12 text-foreground">
                <section>
                  <h2 className="font-headline text-2xl font-bold text-accent mb-4">Our Commitment to Safety</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    At Helion Connect, safety is not just a policy &mdash; it&apos;s a core value that drives every action we take. We are committed to maintaining the highest standards of health, safety, and environmental protection across all our operations, partnerships, and community initiatives.
                  </p>
                </section>

                <section>
                  <h2 className="font-headline text-2xl font-bold text-accent mb-6">Safety Principles</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We believe that all incidents are preventable and that everyone shares responsibility for creating and maintaining a safe working environment.
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {principles.map((p) => (
                      <Card key={p.title} className="p-5">
                        <div className="flex items-start gap-4">
                          {p.icon}
                          <div>
                            <h3 className="font-headline font-semibold text-foreground">{p.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{p.description}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="font-headline text-2xl font-bold text-accent mb-4">Operational Safety Standards</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Helion Connect ensures all projects, operations, and logistics meet strict safety criteria:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Routine site inspections and safety audits</li>
                    <li>Compliance with OSHA, EPA, and DOT safety frameworks</li>
                    <li>Use of PPE (Personal Protective Equipment) and mandatory training for all field personnel</li>
                    <li>Emergency response protocols and drills</li>
                    <li>Sustainable practices that minimize environmental impact</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    We extend these standards to all contractors, suppliers, and partners who represent Helion Connect in any capacity.
                  </p>
                </section>

                <section>
                  <h2 className="font-headline text-2xl font-bold text-accent mb-4">Culture of Care</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our people are at the heart of what we do. We foster a Culture of Care that promotes mutual respect, mental well-being, and inclusivity. By ensuring that every individual feels valued and supported, we build safer and stronger communities &mdash; within and beyond our organization.
                  </p>
                </section>

                <section>
                  <h2 className="font-headline text-2xl font-bold text-accent mb-4">Reporting and Accountability</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      We maintain clear procedures for reporting hazards, incidents, or unsafe conditions. Every report is reviewed promptly, and corrective measures are implemented to prevent recurrence.
                    </p>
                    <p>
                      Employees, contractors, and stakeholders can report safety concerns confidentially via:
                    </p>
                  </div>
                  <Card className="mt-4">
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-center gap-4">
                          <Mail className="size-6 text-accent" />
                          <div>
                            <h3 className="font-headline font-semibold text-foreground">Email</h3>
                            <p className="text-sm text-muted-foreground">safety@helionconnect.com</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Globe className="size-6 text-accent" />
                          <div>
                            <h3 className="font-headline font-semibold text-foreground">Online Reporting</h3>
                            <p className="text-sm text-muted-foreground">helionconnect.com/contact</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section>
                  <h2 className="font-headline text-2xl font-bold text-accent mb-4">Commitment to Continuous Improvement</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Safety is not static &mdash; it evolves with innovation, technology, and experience. Helion Connect invests in ongoing education, audits, and training to enhance workplace safety and community resilience. We invite feedback and collaboration from all stakeholders to make our environments safer, smarter, and more sustainable.
                  </p>
                </section>

                <Card className="p-8 text-center">
                  <h3 className="font-headline text-xl font-bold text-accent mb-2">Safety is Everyone&apos;s Responsibility</h3>
                  <p className="text-muted-foreground">
                    If you have safety concerns or questions, we&apos;re here to help. Together, we build a safer future.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

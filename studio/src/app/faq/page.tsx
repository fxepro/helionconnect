import { SiteHeader } from '@/components/header';
import { SiteFooter } from '@/components/footer';
import { PageHero } from '@/components/page-hero';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqCategories = [
  {
    title: 'General Project',
    questions: [
      {
        q: 'What is the Colorado Springs–Denver Hydrogen Commuter Rail project?',
        a: 'This project is a pilot commuter rail service using hydrogen-powered trains along existing Union Pacific freight corridors. It is designed to provide fast, reliable, and zero-emission transport for daily commuters, reducing highway congestion and offering an environmentally sustainable alternative to car travel.',
      },
      {
        q: 'Why focus on the Colorado Springs–Denver corridor?',
        a: 'The corridor spans 70 miles between two major urban centers with high commuter demand. I-25 experiences significant congestion during peak hours, making rail a practical alternative while taking advantage of underutilized Union Pacific tracks.',
      },
      {
        q: 'How long does a trip take from Colorado Springs to Denver?',
        a: 'End-to-end travel is projected at approximately 85–90 minutes, including stops at Castle Rock and Lone Tree. This travel time is competitive with peak-hour highway driving and provides predictable scheduling for commuters.',
      },
      {
        q: 'How frequently will trains run?',
        a: 'The initial service will include three morning trains inbound to Denver and three evening trains returning to Colorado Springs. This schedule targets peak commuter periods while allowing sufficient track windows for freight operations.',
      },
    ],
  },
  {
    title: 'Technology & Operations',
    questions: [
      {
        q: 'What powers the trains?',
        a: 'Hydrogen fuel cells onboard the train convert stored hydrogen into electricity, which drives traction motors. This system is fully electric, silent, and produces no tailpipe emissions, enabling environmentally friendly operation.',
      },
      {
        q: 'Do the trains require overhead electric lines?',
        a: 'No. Hydrogen trains store energy onboard, so there is no need for catenary wires or electrification infrastructure. This drastically reduces capital costs and allows operations on existing freight corridors without major construction.',
      },
      {
        q: 'Where will the trains refuel hydrogen?',
        a: 'Refueling depots are planned at the endpoints — Colorado Springs and Denver — with potential for intermediate refueling hubs as service expands. These depots can be co-located with maintenance or siding facilities for operational efficiency.',
      },
      {
        q: 'Are hydrogen trains safe?',
        a: 'Yes. Modern fuel-cell systems are highly regulated, with strict safety standards for storage, pressurization, and handling. They are designed with multiple redundant safety systems and undergo rigorous testing before deployment.',
      },
      {
        q: 'How noisy are hydrogen trains compared to diesel?',
        a: 'Hydrogen trains are significantly quieter than diesel locomotives because they use electric traction motors. Noise levels are comparable to conventional electric trains, reducing community disturbance along the corridor.',
      },
      {
        q: 'Can hydrogen trains operate on freight lines?',
        a: 'Yes. The trains are fully compatible with Union Pacific freight corridors. They operate in designated time windows to avoid conflicts, and signaling systems like PTC ensure safe cohabitation with freight traffic.',
      },
    ],
  },
  {
    title: 'Sustainability & Environmental Impact',
    questions: [
      {
        q: 'How environmentally friendly is this project?',
        a: 'Hydrogen trains produce only water vapor as a byproduct, eliminating CO₂, NOx, and particulate emissions from commuter transport. This supports local air quality improvement and contributes to climate change mitigation efforts.',
      },
      {
        q: 'Can renewable energy be used to produce hydrogen?',
        a: 'Yes. Hydrogen can be produced using electrolysis powered by wind, solar, or other renewable sources. This ensures that the energy pathway is fully green and aligns with carbon reduction targets.',
      },
      {
        q: 'What are the broader benefits for local communities?',
        a: 'Beyond reducing emissions, hydrogen trains decrease highway congestion, lower noise levels, and reduce vehicle wear on road infrastructure. They also enhance access to employment centers and improve overall regional mobility.',
      },
      {
        q: 'Does this align with state or federal decarbonization goals?',
        a: 'Yes. The system supports Colorado\u2019s greenhouse gas reduction targets and U.S. federal climate initiatives, including DOT and DOE hydrogen strategies. It demonstrates actionable steps toward sustainable transportation without requiring new highways.',
      },
    ],
  },
  {
    title: 'Infrastructure & Corridors',
    questions: [
      {
        q: 'Which stations will the service stop at?',
        a: 'The service will include Colorado Springs, Castle Rock, Lone Tree (Sky Ridge area), and Denver Union Station. Each station is designed with park-and-ride access, multimodal integration, and minimal infrastructure additions.',
      },
      {
        q: 'How does the project utilize existing Union Pacific infrastructure?',
        a: 'The service leverages underutilized freight tracks, sidings, signaling systems, and PTC safety technology. This avoids the need for new land acquisition or costly electrification while maintaining safe coexistence with freight operations.',
      },
      {
        q: 'What upgrades are required for the corridor?',
        a: 'Minimal upgrades include siding extensions, station platform construction, and interface improvements to signaling systems. These are relatively low-cost compared to building new lines and can be executed without major service disruption.',
      },
      {
        q: 'Is the project compatible with freight operations?',
        a: 'Yes. By scheduling commuter trains during low-freight periods and using time-separated track windows, both passenger and freight services can operate safely and efficiently on the same corridor.',
      },
    ],
  },
  {
    title: 'Investment & Partnerships',
    questions: [
      {
        q: 'Why should investors consider this project?',
        a: 'The corridor represents a low-capital, high-impact investment opportunity. Reusing existing infrastructure reduces risk, while hydrogen technology offers long-term ESG benefits, recurring ridership revenue, and a scalable model for other corridors.',
      },
      {
        q: 'Who are the key partners?',
        a: 'Key collaborators include Union Pacific, federal and state transportation agencies, hydrogen suppliers, and potential private-public investors. Their combined support ensures operational feasibility, regulatory compliance, and strategic alignment with sustainability goals.',
      },
    ],
  },
];

export default function FAQPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'concept-hero');

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {heroImage && (
          <PageHero
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about the Hydrogen Commuter Rail Initiative"
            image={heroImage}
          />
        )}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                {faqCategories.map((category) => (
                  <div key={category.title}>
                    <h2 className="font-headline text-2xl font-bold text-accent mb-6 border-l-4 border-accent pl-4">
                      {category.title}
                    </h2>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, idx) => (
                        <AccordionItem key={idx} value={`${category.title}-${idx}`} className="border-white/20">
                          <AccordionTrigger className="text-left text-base text-white hover:text-accent hover:no-underline">
                            {faq.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-base text-muted-foreground">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

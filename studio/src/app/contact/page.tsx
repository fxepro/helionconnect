"use client";

import { SiteHeader } from '@/components/header';
import { SiteFooter } from '@/components/footer';
import { PageHero } from '@/components/page-hero';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
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

const contactFormSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Please enter a valid email' }),
  phone: z.string().optional(),
  subject: z.string().min(1, { message: 'Please select a subject' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const contactInfo = [
  {
    icon: <MapPin className="size-6 text-accent" />,
    title: 'Address',
    details: ['Colorado Springs, CO', 'United States'],
  },
  {
    icon: <Mail className="size-6 text-accent" />,
    title: 'Email',
    details: ['info@helionconnect.com'],
  },
  {
    icon: <Phone className="size-6 text-accent" />,
    title: 'Phone',
    details: ['(719) 555-0100'],
  },
  {
    icon: <Clock className="size-6 text-accent" />,
    title: 'Business Hours',
    details: ['Monday – Friday: 8:00 AM – 5:00 PM MST'],
  },
];

function ContactForm() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log(data);
    toast({
      title: 'Message Sent',
      description: 'Thank you for reaching out. We will get back to you shortly.',
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name *</FormLabel>
                <FormControl>
                  <Input placeholder="First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Last Name" {...field} />
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
                <FormLabel>Phone</FormLabel>
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
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="partnerships">Partnerships</SelectItem>
                  <SelectItem value="investment">Investment Opportunities</SelectItem>
                  <SelectItem value="consulting">Consulting Services</SelectItem>
                  <SelectItem value="media">Media & Press</SelectItem>
                  <SelectItem value="careers">Careers</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="How can we help you?"
                  className="min-h-[150px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="accent" size="lg">
          Send Message
        </Button>
      </form>
    </Form>
  );
}

export default function ContactPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'partnerships-hero');

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {heroImage && (
          <PageHero
            title="Contact Us"
            subtitle="Get in touch with the Helion Connect team"
            image={heroImage}
          />
        )}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">

                <div className="lg:col-span-1 space-y-8">
                  <div>
                    <h2 className="font-headline text-2xl font-bold text-accent mb-2">Get In Touch</h2>
                    <p className="text-muted-foreground">
                      We'd love to hear from you. Whether you're a potential partner, investor, government agency, or community advocate — reach out and let's start a conversation.
                    </p>
                  </div>
                  <div className="space-y-6">
                    {contactInfo.map((item) => (
                      <div key={item.title} className="flex items-start gap-4">
                        <div className="bg-card/50 p-3 rounded-lg">{item.icon}</div>
                        <div>
                          <h3 className="font-headline font-semibold text-foreground">{item.title}</h3>
                          {item.details.map((detail) => (
                            <p key={detail} className="text-sm text-muted-foreground">{detail}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <Card>
                    <CardContent className="pt-6">
                      <h2 className="font-headline text-2xl font-bold text-accent mb-6">Send Us a Message</h2>
                      <ContactForm />
                    </CardContent>
                  </Card>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

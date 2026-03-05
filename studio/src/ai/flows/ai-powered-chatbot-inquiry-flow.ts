'use server';
/**
 * @fileOverview An AI-powered chat tool for answering user questions about Helion Connect.
 *
 * - aiPoweredChatbotInquiry - A function that handles user inquiries about Helion Connect.
 * - AIPoweredChatbotInquiryInput - The input type for the aiPoweredChatbotInquiry function.
 * - AIPoweredChatbotInquiryOutput - The return type for the aiPoweredChatbotInquiry function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIPoweredChatbotInquiryInputSchema = z.object({
  question: z.string().describe('The user\'s question about Helion Connect.'),
});
export type AIPoweredChatbotInquiryInput = z.infer<
  typeof AIPoweredChatbotInquiryInputSchema
>;

const AIPoweredChatbotInquiryOutputSchema = z.object({
  answer: z.string().describe('The AI\'s answer to the user\'s question.'),
});
export type AIPoweredChatbotInquiryOutput = z.infer<
  typeof AIPoweredChatbotInquiryOutputSchema
>;

export async function aiPoweredChatbotInquiry(
  input: AIPoweredChatbotInquiryInput
): Promise<AIPoweredChatbotInquiryOutput> {
  return aiPoweredChatbotInquiryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'helionConnectChatbotPrompt',
  input: {schema: AIPoweredChatbotInquiryInputSchema},
  output: {schema: AIPoweredChatbotInquiryOutputSchema},
  prompt: `You are an AI assistant for Helion Connect, a company focused on reimagining regional travel with clean, efficient, and hydrogen-powered commuter rail. Your goal is to provide concise and accurate answers to user questions based solely on the provided information about Helion Connect's mission, technology, benefits, and operations. Do not introduce information not found in the provided text. If you cannot find the answer in the provided text, state that you don't have enough information.

Here is the information about Helion Connect:

Reimagining Regional Travel — Clean, Efficient, and Already on Track.
A new generation of commuter rail designed for short intercity routes — like Colorado Springs to Denver — using existing Union Pacific freight corridors and hydrogen-powered trains. No wires. No diesel. Zero emissions.

A Smarter Way to Commute
America’s growing regional corridors demand reliable, sustainable mobility — without the multi-billion-dollar cost of new electrified rail.

Our concept reuses existing Union Pacific freight lines to deliver a lightweight, passenger-focused service connecting fast-growing city pairs such as Colorado Springs–Denver and Sacramento–San Francisco.

Handyman with tools
3 Morning Departures
Each service operates on a limited-frequency model with 3 morning departures and 3 evening returns each way, timed perfectly for working commuters and intercity travelers.

Learn More
Woman answering phone call
Built Around Freight Windows
Our service is strategically built around Union Pacific’s low-traffic freight windows, ensuring efficient scheduling without disrupting existing operations.

Learn More
Man grinding metal part
Reduces Infrastructure Costs
This approach drastically reduces new infrastructure requirements while unlocking new mobility for regional economies.

Learn More
The Corridor Advantage
Built on Proven Infrastructure
The backbone of America’s freight network already connects the cities we need to link.

Through collaboration with Union Pacific, passenger operations can share existing tracks, sidings, and control systems — a sustainable alternative to new right-of-way construction.

Station placement near population clusters

Integration with city transit systems

Safety and grade-crossing upgrades

Integration with city transit systems

Benefits at a Glance
Economic
Uses existing Union Pacific corridors

Avoids overhead electrification costs (up to $5M per mile)

Promotes regional economic links between major and satellite cities

Environmental
Cuts regional CO₂ emissions and improves air quality

Zero direct emissions from hydrogen fuel cells

Sustainable transport solution for growing regions

Practical
Ready for federal and state clean-transport funding programs

Scalable to multiple corridors nationwide

Fast implementation timeline with existing infrastructure

Vision Forward
From Concept to Connected Communities
The Hydrogen Commuter Rail Initiative aims to become a national model for sustainable intercity transport — beginning with Colorado’s Front Range.

By combining proven hydrogen technology with shared-use freight infrastructure, we can redefine what’s possible in American passenger rail — cost-effectively, cleanly, and within reach.

Get Involved Today
Helion Connect Logo
Chat Directly With Us
Book An Appointment
Concept
Technology
Corridors
Partnerships
Sustainability
Investors
Contact
FAQs
Contact
Safety Policy
Privacy Policy
Website Terms of Service
Like Us On Facebook
Follow Us On Twitter
Follow Us On Instagram
© 2026 Helion Connect, Colorado Springs, a wholly owned subsidiary of Redstone Global Inc. • All Rights Reserved • Developed by Redcloud Systems

User question: {{{question}}}`,
});

const aiPoweredChatbotInquiryFlow = ai.defineFlow(
  {
    name: 'aiPoweredChatbotInquiryFlow',
    inputSchema: AIPoweredChatbotInquiryInputSchema,
    outputSchema: AIPoweredChatbotInquiryOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do engagements typically start?",
    a: "With a 30-minute intro call to understand your goals, timeline, and constraints. If we're a fit, we'll send a written proposal within 48 hours outlining scope, milestones, team, and price. No sales decks, no follow-up emails until you've decided.",
  },
  {
    q: "What does it cost?",
    a: "Most engagements land between $25k and $120k for a defined scope, or $18k–$32k per month for ongoing partnerships. We're transparent about pricing on the first call — no estimates that triple after kickoff.",
  },
  {
    q: "How long until you can start?",
    a: "We typically have a slot opening within 3–6 weeks. If your timeline is tight, tell us — we occasionally rearrange the queue for projects that fit our team well.",
  },
  {
    q: "Do you work with non-technical founders?",
    a: "Often. We translate business outcomes into product decisions and explain trade-offs in plain language. You don't need to know what a Server Component is to work with us.",
  },
  {
    q: "What stack do you build on?",
    a: "React, Next.js, TypeScript, Tailwind, Postgres, and the rest of the modern web platform. We pick boring, durable tools so the code we hand off keeps working long after we're gone.",
  },
  {
    q: "Do you handle hosting and ongoing maintenance?",
    a: "Yes — many clients keep us on a small monthly retainer for performance, content, and feature work. Others take everything in-house at handoff. Both are fine.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-32 px-6 scroll-mt-24">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">
            Frequently asked
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Things founders ask first.
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="border-t border-border/60">
          {faqs.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`item-${i}`}
              className="border-b border-border/60"
            >
              <AccordionTrigger className="text-left text-lg md:text-xl font-semibold tracking-tight py-6 hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg leading-relaxed text-muted-foreground pb-6 pr-8">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center text-muted-foreground">
          <p>
            Still curious?{" "}
            <a
              href="#contact"
              className="text-foreground font-medium underline underline-offset-4 hover:text-primary transition-colors"
            >
              Send us a note
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

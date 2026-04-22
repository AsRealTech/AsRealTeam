import { motion } from "framer-motion";

const quotes = [
  {
    quote:
      "They shipped a marketing site that out-performed our internal redesign across every metric — and finished it in a third of the time. The motion details alone were worth the engagement.",
    name: "Maya Patel",
    role: "VP Marketing, Nexus Analytics",
  },
  {
    quote:
      "Working with AsRealTech felt like adding a senior product team to our org for a quarter. They ran the design and shipped the code, then handed everything off cleanly when we hired in-house.",
    name: "Jonas Vogel",
    role: "Founder, Aura Commerce",
  },
  {
    quote:
      "The kind of studio you brag about hiring. Calm, opinionated, and absurdly good at the last 10%. Our investors keep asking who built it.",
    name: "Rena Okafor",
    role: "CEO, Vault Financial",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-32 px-6 scroll-mt-24 bg-muted/30 border-y border-border/60"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 md:w-2/3">
          <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">
            Words from the room
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Founders we've shipped beside.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex flex-col justify-between rounded-2xl bg-background border border-border/60 p-8 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <blockquote className="text-lg leading-relaxed text-foreground/90">
                <span className="text-primary font-serif text-3xl leading-none mr-1">
                  &ldquo;
                </span>
                {q.quote}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border/60">
                <p className="font-bold tracking-tight">{q.name}</p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {q.role}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

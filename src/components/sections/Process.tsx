import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Discovery",
    duration: "Week 1",
    body: "We start by listening. Goals, audience, constraints, and the tension between what exists and what should. You leave the kickoff with a written brief and a measurable definition of success.",
  },
  {
    n: "02",
    title: "Design",
    duration: "Weeks 2 — 4",
    body: "Rapid concepts in low fidelity, then a single direction taken to a polished, interactive prototype. You see real progress every Friday — no month-long silences, no surprise reveals.",
  },
  {
    n: "03",
    title: "Build",
    duration: "Weeks 4 — 8",
    body: "Production engineering in lockstep with design. Accessible, performant, type-safe code. You get a staging URL on day one and watch the product come together commit by commit.",
  },
  {
    n: "04",
    title: "Launch & Iterate",
    duration: "Ongoing",
    body: "We ship, measure, and refine. Most engagements continue past launch — we stay on as a fractional product team for as long as it's useful, and step back the moment it isn't.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-32 px-6 scroll-mt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-20 md:w-2/3">
          <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">
            How we work
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            A process built around momentum.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Four phases, one team, weekly demos. You always know what's
            shipping next and why.
          </p>
        </div>

        <ol className="border-t border-border/60">
          {steps.map((step, i) => (
            <motion.li
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-10 md:py-14 border-b border-border/60 group"
            >
              <div className="md:col-span-2 flex md:block items-baseline gap-4">
                <span className="text-5xl md:text-6xl font-mono font-light text-muted-foreground/60 group-hover:text-primary transition-colors duration-500">
                  {step.n}
                </span>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm font-mono uppercase tracking-wider text-muted-foreground">
                  {step.duration}
                </p>
              </div>
              <div className="md:col-span-7">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

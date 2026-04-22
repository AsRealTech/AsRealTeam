import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Product Design",
    description: "From structural wireframes to polished UI systems. We design interfaces that look beautiful and convert effortlessly.",
    tags: ["UI/UX Design", "Design Systems", "Prototyping", "Interaction Design"]
  },
  {
    title: "Web Engineering",
    description: "Production-grade frontend development using React, Next.js, and modern tooling. Fast, accessible, and maintainable code.",
    tags: ["React / Next.js", "Creative Development", "Performance", "Web Animations"]
  },
  {
    title: "Marketing Sites",
    description: "High-converting landing pages that tell your brand's story. We combine editorial typography with scroll-stopping motion.",
    tags: ["Landing Pages", "CMS Integration", "SEO", "Analytics Setup"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-20 md:w-2/3">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Expertise</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We don't do everything. We specialize in designing and building premium web experiences. By keeping our focus narrow, our quality stays exceptionally high.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-border/50 pt-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.tags.map(tag => (
                  <li key={tag} className="flex items-center gap-2 text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="flex items-center text-sm font-bold uppercase tracking-wider group-hover:text-primary transition-colors cursor-pointer">
                <span>Learn more</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

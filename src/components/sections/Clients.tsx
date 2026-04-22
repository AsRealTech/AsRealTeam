import { motion } from "framer-motion";

const clients = [
  "Linear", "Raycast", "Vercel", "Ramp", "Mercury", "Loom"
];

export function Clients() {
  return (
    <section className="py-12 border-y border-border/50 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-sm font-medium text-muted-foreground whitespace-nowrap">
          Trusted by ambitious teams
        </p>
        
        <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {clients.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-xl md:text-2xl font-bold tracking-tighter"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

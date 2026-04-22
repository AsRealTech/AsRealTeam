import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Nexus Analytics",
    client: "Nexus Inc.",
    industry: "SaaS / Fintech",
    role: "Product Design & Frontend",
    year: "2024",
    img: "/images/case-study-1.png",
    metrics: ["+45% Conversion", "2.1s Load Time"]
  },
  {
    title: "Aura Commerce",
    client: "Aura Brand",
    industry: "E-commerce",
    role: "Full Platform Redesign",
    year: "2023",
    img: "/images/case-study-2.png",
    metrics: ["$2.4M Generated", "+80% AOV"]
  },
  {
    title: "Vault Financial",
    client: "Vault",
    industry: "DeFi",
    role: "Web Application",
    year: "2023",
    img: "/images/case-study-3.png",
    metrics: ["100k+ Active Users", "Zero Downtime"]
  },
  {
    title: "Studio Form",
    client: "Form Architecture",
    industry: "Creative",
    role: "Creative Portfolio",
    year: "2024",
    img: "/images/case-study-4.png",
    metrics: ["Awwwards SOTD", "FWA of the Month"]
  }
];

export function Work() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="work" className="py-32 px-6 bg-foreground text-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Selected Work</h2>
            <p className="text-xl text-muted/80 leading-relaxed">
              A collection of our recent projects. We partner with teams who understand that design is a competitive advantage.
            </p>
          </div>
        </div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="w-full md:w-3/5 overflow-hidden rounded-2xl relative bg-muted/10 aspect-[4/3] md:aspect-video group">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className={`object-cover w-full h-full transition-transform duration-1000 ${hoveredIndex === i ? 'scale-105' : 'scale-100'}`} 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              <div className="w-full md:w-2/5 space-y-6 px-4 md:px-8">
                <div className="flex items-center gap-3 text-sm font-mono text-muted/60">
                  <span>{project.year}</span>
                  <span className="w-1 h-1 rounded-full bg-muted/40" />
                  <span>{project.industry}</span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight">{project.title}</h3>
                <p className="text-lg text-muted/80">{project.role}</p>
                
                <div className="flex gap-4 pt-4 border-t border-background/20">
                  {project.metrics.map(metric => (
                    <div key={metric}>
                      <p className="text-sm font-bold">{metric}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

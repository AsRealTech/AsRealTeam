import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, GithubIcon, LinkedinIcon, Mail, MailCheckIcon, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "@/components/Navbar";
import { BackToTop } from "@/components/BackToTop";
import { Hero } from "@/components/sections/Hero";
import { Clients } from "@/components/sections/Clients";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  const [contactSuccess, setContactSuccess] = useState(false);

  return (
    <div
      id="top"
      className="min-h-screen bg-background text-foreground flex flex-col"
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-foreground focus:text-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main" className="flex-1">
        <div className="scroll-mt-24">
          <Hero />
        </div>
        <Clients />
        <div id="services" className="scroll-mt-24">
          <Services />
        </div>
        <div id="work" className="scroll-mt-24">
          <Work />
        </div>
        <Process />
        <Testimonials />
        <FAQ />

        {/* Contact Section */}
        <section
          id="contact"
          className="py-32 px-6 scroll-mt-24 bg-foreground text-background"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <p className="text-sm font-mono uppercase tracking-widest text-background/60 mb-6">
                  Start a project
                </p>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-balance">
                  Let's build something worth shipping.
                </h2>
                <p className="text-lg leading-relaxed text-background/70 mb-12">
                  Tell us about the work. We reply to every inquiry within one
                  business day — usually with a few sharp questions and a
                  candid take on whether we're the right fit.
                </p>

                <ul className="space-y-5 text-background/80">
                  <li className="flex items-start gap-4">
                    <Mail className="w-5 h-5 mt-0.5 shrink-0 text-background/60" />
                    <div>
                      <p className="text-sm font-mono uppercase tracking-wider text-background/50">
                        Direct
                      </p>
                      <a
                        href="mailto:hello@{portfolioData?.companyName}"
                        className="text-lg hover:text-primary transition-colors"
                      >
                        {portfolioData?.companyName}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-background/60" />
                    <div>
                      <p className="text-sm font-mono uppercase tracking-wider text-background/50">
                        Studio
                      </p>
                      <p className="text-lg">{portfolioData?.companyPhone}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-7">
                {contactSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-2xl border border-background/20 bg-background/5 backdrop-blur p-10 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-6">
                      <Check className="w-7 h-7" strokeWidth={3} />
                    </div>
                    <h3 className="text-3xl font-bold tracking-tight mb-4">
                      We've got it.
                    </h3>
                    <p className="text-background/70 text-lg max-w-md mx-auto">
                      A real person will reply within one business day —
                      usually faster. Check your inbox (and spam, just in
                      case).
                    </p>
                    <Button
                      variant="outline"
                      className="mt-10 border-background/30 bg-transparent text-background hover:bg-background hover:text-foreground"
                      onClick={() => setContactSuccess(false)}
                    >
                      Send another message
                    </Button>
                  </motion.div>
                ) : (
                  <form
                    className="space-y-6"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setContactSuccess(true);
                    }}
                    noValidate
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-xs font-mono uppercase tracking-wider text-background/60"
                        >
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          required
                          placeholder="Jane Doe"
                          className="h-12 bg-background/5 border-background/20 text-background placeholder:text-background/40 focus-visible:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-xs font-mono uppercase tracking-wider text-background/60"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          required
                          type="email"
                          placeholder="jane@company.com"
                          className="h-12 bg-background/5 border-background/20 text-background placeholder:text-background/40 focus-visible:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="company"
                        className="text-xs font-mono uppercase tracking-wider text-background/60"
                      >
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Acme Inc."
                        className="h-12 bg-background/5 border-background/20 text-background placeholder:text-background/40 focus-visible:ring-primary"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-mono uppercase tracking-wider text-background/60">
                        Budget
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {["< 150k", "1505k–260k", "260k–350k", "400k+"].map(
                          (b) => (
                            <label
                              key={b}
                              className="cursor-pointer"
                            >
                              <input
                                type="radio"
                                name="budget"
                                value={b}
                                className="peer sr-only"
                              />
                              <span className="inline-block px-4 py-2 rounded-full text-sm border border-background/20 text-background/80 peer-checked:bg-primary peer-checked:text-primary-foreground peer-checked:border-primary hover:border-background/50 transition-colors">
                                {b}
                              </span>
                            </label>
                          ),
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="details"
                        className="text-xs font-mono uppercase tracking-wider text-background/60"
                      >
                        Project details
                      </label>
                      <Textarea
                        id="details"
                        name="details"
                        required
                        placeholder="What are you building, who's it for, and when do you need it?"
                        className="min-h-[160px] resize-none bg-background/5 border-background/20 text-background placeholder:text-background/40 focus-visible:ring-primary"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-14 text-base rounded-full group"
                    >
                      Send inquiry
                      <ArrowUpRight className="ml-1 w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Button>

                    <p className="text-sm text-background/50 text-center">
                      We reply within one business day. Promise.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 font-bold text-lg tracking-tight mb-4">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary" />
                {portfolioData?.companyName}
              </div>
              <p className="text-muted-foreground max-w-sm">
                Bring it online, your amazing ideas, business now 
              </p>
              <div className="space-y-2 text-sm flex items-center mt-4">
                <a href={`mailto:${portfolioData?.companyEmail}`} className="hover:text-primary transition-colors"><MailCheckIcon/></a>
                <a href={portfolioData?.linkedlin} className="hover:text-primary transition-colors mx-4"> <LinkedinIcon/></a>
                <a href={portfolioData?.x} className="hover:text-primary transition-colors mx-4"><X/></a>
                <a href={portfolioData?.github} className="hover:text-primary transition-colors"><GithubIcon/></a>
              </div>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
                Studio
              </p>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#work" className="hover:text-primary transition-colors">Work</a></li>
                <li><a href="#process" className="hover:text-primary transition-colors">Process</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
                Connect
              </p>
              <ul className="space-y-2 text-sm">
                <li><a href={`mailto:${portfolioData?.companyEmail}`} className="hover:text-primary transition-colors">{portfolioData?.companyEmail}</a></li>
                <li><a href={portfolioData?.linkedlin} className="hover:text-primary transition-colors"> LinkedIn</a></li>
                <li><a href={portfolioData?.x} className="hover:text-primary transition-colors"> X</a></li>
                <li><a href={portfolioData?.github} className="hover:text-primary transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-border/60">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {portfolioData?.companyName}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}

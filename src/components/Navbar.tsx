import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ui/ThemeToggle";
import { portfolioData } from "@/data/portfolio";
import logo from "../../public/images/AsRealTech_Logo.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0, 0.2, 0.5, 0.8, 1],
      },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/75 backdrop-blur-xl border-b border-border/60"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <a
            href="#top"
            onClick={(e) => handleNav(e, "#top")}
            className="font-bold text-lg tracking-tight flex items-center gap-2"
            aria-label="AsRealTech — back to top"
          >
            <img src={logo} className="inline-block w-7 h-6" />
            AsRealTech
          </a>

          <div className="hidden md:flex items-center gap-1 text-sm font-medium">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleNav(e, l.href)}
                  className={`relative px-3 py-2 rounded-full transition-colors ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-muted"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Button
              asChild
              size="sm"
              className="rounded-full h-10 px-5 group"
            >
              <a href="#contact" onClick={(e) => handleNav(e, "#contact")}>
                Start a project
                <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          </div>

            <div className="flex items-flex items-center justify-between">
              <ThemeToggle/>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="md:hidden ml-2 inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background/80 backdrop-blur"
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
        </nav>

        <motion.div
          style={{ scaleX: progress }}
          className="origin-left h-[2px] w-full bg-primary"
        />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-xl pt-20"
          >
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
                closed: {},
              }}
              className="flex flex-col px-6 py-8 gap-1"
            >
              {links.map((l) => {
                const isActive = active === l.href;
                return (
                  <motion.li
                    key={l.href}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 12 },
                    }}
                  >
                    <a
                      href={l.href}
                      onClick={(e) => handleNav(e, l.href)}
                      className={`flex items-center justify-between py-4 border-b border-border/60 text-3xl font-bold tracking-tight ${
                        isActive ? "text-primary" : ""
                      }`}
                    >
                      {l.label}
                      <ArrowUpRight className="w-6 h-6 text-muted-foreground" />
                    </a>
                  </motion.li>
                );
              })}
              <motion.li
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 12 },
                }}
                className="pt-8"
              >
                <Button
                  asChild
                  size="lg"
                  className="w-full h-14 rounded-full text-base"
                >
                  <a href={portfolioData?.whatsapplink}>
                    Start a project
                  </a>
                </Button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

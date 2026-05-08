"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

function AnimatedCounter({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useScrollReveal({ threshold: 0.5, rootMargin: "0px" });

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  return <span ref={ref as any}>{count}{count === end ? suffix : ""}</span>;
}

export default function Home() {
  const [engagementsRef, engagementsVisible] = useScrollReveal();
  const [servicesRef, servicesVisible] = useScrollReveal();
  const [partenairesRef, partenairesVisible] = useScrollReveal();
  const [contactRef, contactVisible] = useScrollReveal();

  return (
    <>
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center items-center pt-20 pb-10 overflow-x-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(30deg, #1E1E1E 12%, transparent 12.5%, transparent 87%, #1E1E1E 87.5%, #1E1E1E), linear-gradient(150deg, #1E1E1E 12%, transparent 12.5%, transparent 87%, #1E1E1E 87.5%, #1E1E1E), linear-gradient(30deg, #1E1E1E 12%, transparent 12.5%, transparent 87%, #1E1E1E 87.5%, #1E1E1E), linear-gradient(150deg, #1E1E1E 12%, transparent 12.5%, transparent 87%, #1E1E1E 87.5%, #1E1E1E), linear-gradient(60deg, #111111 25%, transparent 25.5%, transparent 75%, #111111 75%, #111111), linear-gradient(60deg, #111111 25%, transparent 25.5%, transparent 75%, #111111 75%, #111111)',
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px'
        }} />

        <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center w-full"
          >
            <div className="flex justify-center flex-wrap gap-x-2 md:gap-x-4 mb-2">
              {"GEC".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    delay: 0.3 + i * 0.1, 
                    duration: 0.8,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                  className="font-serif font-bold text-primary inline-block"
                  style={{ fontSize: "clamp(2.5rem, 10vw, 10rem)", lineHeight: 1 }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <div className="flex justify-center flex-wrap w-full px-4 overflow-hidden">
              {"CONSTRUCTION".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50, filter: "blur(10px)", scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                  transition={{ 
                    delay: 0.6 + i * 0.04, 
                    duration: 0.9, 
                    ease: [0.2, 0.65, 0.3, 0.9] 
                  }}
                  className="font-serif font-bold text-foreground inline-block"
                  style={{ fontSize: "clamp(1.2rem, 6.5vw, 7rem)", lineHeight: 1, letterSpacing: "-0.02em" }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1.2, duration: 1, ease: "circOut" }}
            className="flex items-center gap-3 md:gap-4 my-8 w-full max-w-lg px-6"
          >
            <div className="h-[1px] md:h-[2px] flex-1 bg-destructive/60"></div>
            <span className="font-serif text-sm md:text-2xl tracking-[0.2em] md:tracking-widest uppercase text-foreground whitespace-nowrap">Bâtir l'Avenir</span>
            <div className="h-[1px] md:h-[2px] flex-1 bg-destructive/60"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-base md:text-xl text-muted-foreground max-w-2xl font-light tracking-wide mb-12"
          >
            Votre maison en Algérie, construite avec excellence — même depuis l'étranger.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 w-full max-w-md mx-auto sm:max-w-none sm:w-auto"
          >
            <a href="#contact" className="px-8 py-4 bg-destructive text-destructive-foreground font-medium tracking-wide uppercase hover:bg-destructive/90 transition-colors flex-1 sm:flex-none text-center">
              Démarrer votre projet
            </a>
            <a href="#services" className="px-8 py-4 border border-primary text-primary font-medium tracking-wide uppercase hover:bg-primary/10 transition-colors flex-1 sm:flex-none text-center">
              Découvrir nos services
            </a>
          </motion.div>
        </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="w-full max-w-5xl mx-auto px-4 mt-20 mb-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border border-y border-border py-8">
              <div className="text-center py-6 sm:py-0 px-2">
                <div className="text-3xl md:text-4xl font-serif text-primary mb-2">
                  <AnimatedCounter end={2015} duration={1.5} />
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Fondée en</div>
              </div>
              <div className="text-center py-6 sm:py-0 px-2 sm:border-l border-border">
                <div className="text-3xl md:text-4xl font-serif text-primary mb-2">
                  <AnimatedCounter end={32} suffix=" ans" duration={2} />
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Expérience</div>
              </div>
              <div className="text-center py-6 sm:py-0 px-2 sm:border-t md:border-t-0 md:border-l border-border">
                <div className="text-3xl md:text-4xl font-serif text-primary mb-2">
                  <AnimatedCounter end={100} suffix="%" duration={2.5} />
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Satisfaction</div>
              </div>
              <div className="text-center py-6 sm:py-0 px-2 sm:border-l border-border">
                <div className="text-3xl md:text-4xl font-serif text-primary mb-2">
                  A–D
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Agréments</div>
              </div>
            </div>
          </motion.div>
      </section>

      {/* ENGAGEMENTS */}
      <section id="engagements" className="py-24 bg-card relative" ref={engagementsRef as any}>
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-primary"
          initial={{ scaleY: 0 }}
          animate={engagementsVisible ? { scaleY: 1 } : {}}
          transition={{ duration: 1 }}
          style={{ transformOrigin: "top" }}
        />
        <div className="container mx-auto px-4 pt-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={engagementsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">Nos Engagements</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { t: "Suivi à Distance", d: "Suivez l'avancement de votre chantier en temps réel depuis n'importe où dans le monde." },
              { t: "Transparence Totale", d: "Rapports détaillés, photos hebdomadaires et accès complet à votre dossier." },
              { t: "Interlocuteur Unique", d: "Un chef de projet dédié, votre seul contact pour toute la durée du chantier." },
              { t: "Normes de Qualité", d: "Matériaux premium, artisans sélectionnés, contrôles rigoureux à chaque étape." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={engagementsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-background p-8 border border-border overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">{item.t}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 relative" ref={servicesRef as any}>
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-primary"
          initial={{ scaleY: 0 }}
          animate={servicesVisible ? { scaleY: 1 } : {}}
          transition={{ duration: 1 }}
          style={{ transformOrigin: "top" }}
        />
        <div className="container mx-auto px-4 pt-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={servicesVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">Nos Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { n: "01", t: "Étude & Conception", d: "Plans architecturaux, étude de sol, permis de construire." },
              { n: "02", t: "Démarches Administratives", d: "Toutes les formalités légales prises en charge." },
              { n: "03", t: "Construction Clé en Main", d: "De la fondation à la finition, tout inclus." },
              { n: "04", t: "Rénovation & Extension", d: "Modernisation et agrandissement de l'existant." },
              { n: "05", t: "Suivi en Temps Réel", d: "Photos, vidéos et rapports hebdomadaires." },
              { n: "06", t: "Réseau d'Artisans", d: "Corps de métier qualifiés et sélectionnés." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-card p-8 border border-border overflow-hidden"
              >
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-destructive translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="font-serif text-4xl text-primary/30 font-bold mb-4 transition-colors group-hover:text-primary">{item.n}</div>
                <h3 className="font-serif text-xl text-foreground mb-3">{item.t}</h3>
                <p className="text-muted-foreground font-light">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTENAIRES */}
      <section id="partenaires" className="py-24 bg-card relative" ref={partenairesRef as any}>
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-primary"
          initial={{ scaleY: 0 }}
          animate={partenairesVisible ? { scaleY: 1 } : {}}
          transition={{ duration: 1 }}
          style={{ transformOrigin: "top" }}
        />
        <div className="container mx-auto px-4 pt-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={partenairesVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">Nos Partenaires</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={partenairesVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-background border border-primary/30 p-10 flex flex-col justify-center items-center text-center group hover:border-primary transition-colors"
            >
              <h3 className="font-serif text-2xl text-primary mb-2">BACEMAS</h3>
              <p className="text-foreground font-medium mb-4">Bureau d'ingénierie et de construction</p>
              <div className="w-12 h-px bg-border my-4 mx-auto"></div>
              <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">32 ans d'expérience</p>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">Agréments catégories A → D</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={partenairesVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background border border-primary/30 p-10 flex flex-col justify-center items-center text-center group hover:border-primary transition-colors"
            >
              <h3 className="font-serif text-2xl text-primary mb-2">MDG ARCHITECTURE</h3>
              <p className="text-foreground font-medium mb-4">Cabinet d'architecture</p>
              <div className="w-12 h-px bg-border my-4 mx-auto"></div>
              <p className="text-muted-foreground font-light leading-relaxed">
                Méthode 6D pour une conception précise et durable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="py-24 bg-card relative" ref={contactRef as any}>
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-primary"
          initial={{ scaleY: 0 }}
          animate={contactVisible ? { scaleY: 1 } : {}}
          transition={{ duration: 1 }}
          style={{ transformOrigin: "top" }}
        />
        <div className="container mx-auto px-4 pt-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={contactVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">Nous Contacter</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={contactVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-background border border-border p-8 text-center flex flex-col items-center group hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <h3 className="font-serif text-lg mb-2">Téléphone / WhatsApp</h3>
              <p className="text-muted-foreground font-mono">+213 662 86 99 99</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={contactVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background border border-border p-8 text-center flex flex-col items-center group hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <h3 className="font-serif text-lg mb-2">Email</h3>
              <p className="text-muted-foreground font-mono">commercial.gec22@gmail.com</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={contactVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-background border border-border p-8 text-center flex flex-col items-center group hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <h3 className="font-serif text-lg mb-2">Adresse</h3>
              <p className="text-muted-foreground">Qaid el Bab, Birkhadem — Alger</p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={contactVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <a 
              href="https://wa.me/213662869999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium tracking-wide uppercase transition-all hover:shadow-[0_0_30px_rgba(37,211,102,0.3)]"
            >
              <Phone size={20} />
              Contacter sur WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background pt-16 pb-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <img src="/gec-logo.png" alt="GEC Construction Logo" className="h-16 w-auto mx-auto mb-8 opacity-80" />
          
          <nav className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12">
            {["Engagements", "Services", "Partenaires", "Contact"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest text-sm">
                {link}
              </a>
            ))}
          </nav>
          
          <div className="w-full max-w-md mx-auto h-px bg-primary/30 mb-8"></div>
          
          <p className="text-muted-foreground text-sm font-light">
            © 2025 GEC Construction. Tous droits réservés.
          </p>
        </div>
      </footer>
    </>
  );
}

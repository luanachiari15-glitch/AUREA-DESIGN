/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Layout, 
  ShieldCheck, 
  Zap, 
  Instagram, 
  Linkedin, 
  Mail, 
  MessageCircle 
} from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-brand-black/80 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
        <div className="w-10 h-10 overflow-hidden rounded-full border border-white/10">
          <img 
            src="https://i.imgur.com/VyMz9wz.png" 
            alt="Aurea Design Logo" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <span className="hidden sm:block uppercase">Aurea Design</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
        <a href="#sobre" className="hover:text-brand-gold transition-colors">Sobre</a>
        <a href="#servicos" className="hover:text-brand-gold transition-colors">Serviços</a>
        <a href="#portfolio" className="hover:text-brand-gold transition-colors">Portfólio</a>
        <a href="http://wa.me/5514996009328" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-brand-gold text-brand-black rounded-full hover:bg-brand-beige transition-all">Orçamento</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-16 px-6 overflow-hidden">
    {/* Background Aura Gradient - Matching the reference image */}
    <motion.div
      initial={{ scale: 1.2, opacity: 0, filter: 'blur(60px)' }}
      animate={{ scale: 1, opacity: 1, filter: 'blur(30px)' }}
      transition={{ 
        duration: 2.2, 
        ease: [0.23, 1, 0.32, 1],
      }}
      className="absolute bottom-[0%] sm:bottom-[-10%] left-1/2 -translate-x-1/2 w-[180%] sm:w-[140%] h-[600px] sm:h-[700px] md:h-[900px] pointer-events-none z-0"
      style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% 100%, #FF6A00 0%, #FB7185 25%, #3B82F6 50%, rgba(11, 11, 11, 0) 85%)'
      }}
    />
    
    {/* Subtle breathing effect layer */}
    <motion.div
      animate={{ 
        opacity: [0.4, 0.6, 0.4],
        scale: [1, 1.02, 1],
      }}
      transition={{ 
        duration: 10, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="absolute bottom-[0%] sm:bottom-[-10%] left-1/2 -translate-x-1/2 w-[180%] sm:w-[140%] h-[600px] sm:h-[700px] md:h-[900px] pointer-events-none z-0 mix-blend-plus-lighter"
      style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(255, 106, 0, 0.4) 0%, rgba(251, 113, 133, 0.3) 20%, transparent 60%)'
      }}
    />
    
    <div className="max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-xs font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
          </span>
          DESIGN ESTRATÉGICO PARA ESPECIALISTAS
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
          Sites que transformam sua presença online em <span className="text-brand-gold">autoridade.</span>
        </h1>
        <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-2xl">
          Crio sites profissionais para especialistas e profissionais que querem transmitir credibilidade, profissionalismo e conquistar mais clientes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#portfolio" className="px-8 py-4 bg-white text-brand-black font-semibold rounded-full hover:bg-brand-gold transition-all flex items-center justify-center gap-2 group">
            Ver Portfólio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="http://wa.me/5514996009328" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all flex items-center justify-center">
            Solicitar orçamento
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="sobre" className="py-20 px-6 bg-zinc-950">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-4">SOBRE O TRABALHO</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
          Design estratégico para profissionais que querem se destacar
        </h2>
        <div className="space-y-6 text-lg text-white/60 leading-relaxed">
          <p>
            Hoje, ter apenas um perfil em redes sociais não é suficiente para transmitir profissionalismo.
          </p>
          <p>
            Um site bem estruturado posiciona você como autoridade, aumenta a confiança dos clientes e fortalece sua presença digital.
          </p>
          <p>
            Meu trabalho é criar sites elegantes, estratégicos e profissionais, pensados para valorizar sua marca e comunicar seu posicionamento com clareza.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative flex justify-center items-center"
      >
        <div className="relative">
          <img 
            src="https://i.imgur.com/YlJSlJr.png" 
            alt="Aurea Design" 
            className="max-w-full h-auto"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-4 -right-4 bg-brand-gold p-4 rounded-xl text-brand-black max-w-[160px] shadow-2xl">
            <p className="text-xl font-bold mb-1">100%</p>
            <p className="text-[10px] font-medium leading-tight uppercase tracking-tighter">Focado em converter visitantes em clientes.</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      icon: <Layout className="w-8 h-8 text-brand-gold" />,
      title: "Criação de Sites Institucionais",
      description: "Sites profissionais para especialistas, consultores, nutricionistas, médicos, terapeutas e prestadores de serviço."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-gold" />,
      title: "Design focado em credibilidade",
      description: "Estrutura estratégica pensada para gerar confiança e posicionamento profissional."
    },
    {
      icon: <Zap className="w-8 h-8 text-brand-gold" />,
      title: "Experiência moderna e elegante",
      description: "Sites rápidos, responsivos e visualmente sofisticados."
    }
  ];

  return (
    <section id="servicos" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-4">SERVIÇOS</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">O que eu faço</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-10 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
            >
              <div className="mb-8 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/50 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "Projeto 1",
      image: "https://i.imgur.com/6iXz1le.png",
      link: "https://nutricionista-mariana-alencar.vercel.app/"
    },
    {
      title: "Projeto 2",
      image: "https://i.imgur.com/3wCJsF5.png",
      link: "https://diogooliveira-nutriesportiva.vercel.app/"
    },
    {
      title: "Projeto 3",
      image: "https://i.imgur.com/HRG9z4a.png",
      link: "https://nutri-maternoinfantil.vercel.app/"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-4">PORTFÓLIO</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Alguns projetos que desenvolvi</h2>
        </div>
        <div className="md:hidden flex items-center justify-end gap-2 text-brand-gold/50 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 animate-pulse">
          Deslize para o lado <ArrowRight className="w-3 h-3" />
        </div>
        <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[85vw] sm:min-w-[350px] md:min-w-0 snap-center group flex flex-col items-center"
            >
              <div className="w-full aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-y-auto mb-6 border border-white/10 bg-zinc-900 custom-scrollbar relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto opacity-100 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full border border-brand-gold/50 text-brand-gold text-sm font-bold hover:bg-brand-gold hover:text-brand-black transition-all uppercase tracking-widest"
              >
                Ver projeto
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Briefing",
      description: "Entendo seu posicionamento e objetivos para criar algo único."
    },
    {
      number: "02",
      title: "Desenvolvimento",
      description: "Crio um site estratégico, elegante e profissional focado em resultados."
    },
    {
      number: "03",
      title: "Entrega",
      description: "Você recebe um site pronto para fortalecer sua autoridade online."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-4">PROCESSO</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Como funciona</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-black text-white/5 absolute -top-10 left-0">{step.number}</div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-gold text-brand-black text-sm flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  {step.title}
                </h3>
                <p className="text-white/50 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section id="contato" className="py-20 px-6">
    <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-brand-gold/20 to-brand-beige/5 border border-brand-gold/20 p-10 md:p-16 text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-[100px] rounded-full" />
      <div className="relative z-10">
        <h2 className="text-2xl md:text-6xl font-bold tracking-tight mb-6 md:mb-8">
          Seu site também pode transmitir autoridade.
        </h2>
        <p className="text-base md:text-xl text-white/60 mb-8 md:mb-12 max-w-2xl mx-auto">
          Se você quer um site profissional que represente seu posicionamento e aumente sua credibilidade, vamos conversar.
        </p>
        <button 
          onClick={() => window.open("http://wa.me/5514996009328", "_blank")}
          className="px-8 py-4 md:px-10 md:py-5 bg-brand-gold text-brand-black font-bold rounded-full hover:bg-brand-beige transition-all text-base md:text-lg shadow-xl shadow-brand-gold/20"
        >
          Solicitar orçamento
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div className="col-span-1">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-2 mb-6">
            <div className="w-10 h-10 overflow-hidden rounded-full border border-white/10">
              <img 
                src="https://i.imgur.com/VyMz9wz.png" 
                alt="Aurea Design Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="uppercase">Aurea Design</span>
          </div>
          <p className="text-white/40 max-w-xs leading-relaxed">
            Especialista em criação de sites profissionais para quem não aceita o comum.
          </p>
        </div>
        <div className="col-span-2">
          <h4 className="font-bold mb-6">Contato</h4>
          <ul className="space-y-4 text-white/50 text-sm">
            <li className="flex items-center gap-2 hover:text-brand-gold cursor-pointer transition-colors">
              <Mail className="w-4 h-4" /> contatoaureadesign@outlook.com
            </li>
            <li className="flex items-center gap-2 hover:text-brand-gold cursor-pointer transition-colors">
              <MessageCircle className="w-4 h-4" /> +55 14 996009328
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
        <p>© 2026 Aurea Design. Todos os direitos reservados.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-brand-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

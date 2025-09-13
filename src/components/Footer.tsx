// src/components/Footer.tsx

// 1. CORREÇÃO: O ícone do Whatsapp não estava sendo importado.
import { Instagram, Mail, MapPin, Phone, ArrowUp, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // Usando react-icons para o WhatsApp

export function Footer() {
  const currentYear = new Date().getFullYear();
  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#especialidades", label: "Especialidades" },
    { href: "#consultorio", label: "Consultório" },
    { href: "#faq", label: "Dúvidas" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contato" className="bg-slate-50 text-slate-700 relative overflow-hidden">
      <div className="container mx-auto py-20 px-6 relative z-10">
        {/* Layout principal em grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Coluna 1: Logo e Redes Sociais */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">
              Thalita Santos
            </h3>
            <p className="text-sm leading-relaxed max-w-sm text-slate-600">
              Psicóloga e Psicanalista dedicada a criar um espaço seguro para
              sua jornada de autoconhecimento e bem-estar.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/thalitasantos.psi/" // Link do Instagram corrigido
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-200 rounded-full text-slate-600 transition-all duration-300 hover:bg-fuchsia-700 hover:text-white hover:scale-110 hover:shadow-lg"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/thalita-santos-6600a8116/?profileId=ACoAABzYg6gBLGpePMXrPRbGMOahABYr_7ktbI0" // Link do Instagram corrigido
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-200 rounded-full text-slate-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110 hover:shadow-lg"
              >
                <Linkedin size={20} />
              </a>
              
              <a
                href="https://wa.me/11957877900" // Link do WhatsApp corrigido
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-200 rounded-full text-slate-600 transition-all duration-300 hover:bg-green-500 hover:text-white hover:scale-110 hover:shadow-lg"
              >
                {/* Ícone do WhatsApp de outra biblioteca */}
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Navegação</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-600 font-medium transition-all duration-300 hover:text-blue-600 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Contato</h3>
            <ul className="space-y-3">
              {/* 2. CORREÇÃO: A tag <a> estava envolvendo o <li>. Agora o link envolve apenas o texto. */}
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 text-blue-600 flex-shrink-0" />
                <a 
                  href="https://maps.google.com/?q=Rua+Adelino+Cardana,293,Barueri,SP" // Link do Google Maps
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  R. Adelino Cardana, 293 - Barueri/SP
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-600 flex-shrink-0" />
                <a
                  href="https://wa.me/11957877900"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  (11) 95787-7900
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-600 flex-shrink-0" />
                <a
                  href="mailto:email@dominio.com"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  email@dominio.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra de Copyright */}
      <div className="border-t border-slate-200">
        <div className="container mx-auto py-6 px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} Psicóloga Thalita Santos | CRP: 06/139597. Todos
            os direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-all duration-300 hover:-translate-y-1"
          >
            Voltar ao topo
            <ArrowUp
              size={16}
              className="animate-bounce text-blue-600"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
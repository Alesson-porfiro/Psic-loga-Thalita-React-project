import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BrainCircuit, HeartHandshake, Zap, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section 
      id="sobre" 
      className="relative py-24 px-4 bg-gray-100 overflow-hidden" // Adicione bg-gray-100 como fallback e overflow-hidden
      style={{
        backgroundImage: "url('/5211331c3267926037327cb79eab9bd8.jpg')", // Use a nova imagem de fundo
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center px-6">
        
        {/* Coluna da Imagem */}
        <div className="flex justify-center">
          <img 
            src="/sobremim.png" // Certifique-se que o caminho da imagem está correto
            alt="Foto de Thalita Santos" 
            className="rounded-lg shadow-xl w-full max-w-md object-cover"
          />
        </div>

        {/* Coluna do Texto */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Thalita Santos
            </h2>
            
            <p className="text-lg text-muted-foreground font-medium">
              Psicóloga - CRP 06/139597 | Psicanalista
            </p>
            <p className="text-lg text-muted-foreground">
              Doutora em Psicanálise pela PUC – COGEAE
            </p>
          </div>

    
          <p className="text-gray-700 leading-relaxed">
            Focada em oferecer um ambiente empático e seguro, crio um espaço
            livre de julgamentos onde você pode se sentir compreendido para
            caminharmos juntos durante esse processo terapêutico.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Permita-se explorar suas questões emocionais com ajuda profissional. A psicoterapia pode
            ser uma ferramenta transformadora em sua vida.
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-semibold text-xl">
                Especialidades e Áreas de Atuação
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 pt-2 text-gray-600">
                  <li className="flex items-center gap-3">
                    <BrainCircuit className="h-5 w-5 text-blue-500" />
                    <span>Tratamento para Depressão e Ansiedade</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-blue-500" />
                    <span>Gerenciamento de Estresse e Burnout</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-blue-500" />
                    <span>Dificuldades em Relacionamentos</span>
                  </li>
                   <li className="flex items-center gap-3">
                    <HeartHandshake className="h-5 w-5 text-blue-500" />
                    <span>Questões de autoestima e autoconhecimento</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
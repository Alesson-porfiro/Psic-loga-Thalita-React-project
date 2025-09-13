

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export function FaqSection() {
  return (
    <section id="agendamento" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Título da Seção */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Dúvidas Frequentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Respostas para as perguntas mais comuns sobre o processo terapêutico e como podemos começar.
          </p>
        </div>

        {/* Accordion com as Perguntas e Respostas */}
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold text-left">
                Qual o horário de funcionamento?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                O atendimento ocorre das 09h às 22h, de segunda a sábado. Cada sessão tem a duração de 50 minutos, planejada para se encaixar na sua rotina.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold text-left">
                Como saber se preciso de terapia?
              </AccordionTrigger>
              <AccordionContent className="space-y-4 text-base leading-relaxed">
                <p>Terapia é para todos! Não se trata de "frescura" ou algo exclusivo. Qualquer pessoa pode se beneficiar do processo terapêutico, que vai muito além do tratamento de patologias.</p>
                <p>É uma poderosa ferramenta de autoconhecimento que nos ajuda a viver com mais propósito e qualidade. Se você busca se entender melhor e navegar pelos desafios da vida, a terapia é para você.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold text-left">
                Como funciona a terapia na prática?
              </AccordionTrigger>
              <AccordionContent className="space-y-4 text-base leading-relaxed">
                <p>Cada processo terapêutico é único, assim como cada cliente. Geralmente, as sessões duram 50 minutos e ocorrem semanalmente, mas isso pode ser ajustado conforme sua necessidade.</p>
                <p>Trabalho com a técnica de associação livre, onde você é convidado a expressar o que vem à mente, sem censura. Meu papel é fazer intervenções pontuais para guiar nossa investigação e aprofundar a compreensão.</p>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>


      </div>
    </section>
  );
}
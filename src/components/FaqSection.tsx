// src/components/FaqSection.tsx
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

export function FaqSection() {
  return (
    <section id="agendamento" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        
        {/* Título da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Dúvidas Frequentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Respostas para as perguntas mais comuns sobre o processo terapêutico e como podemos começar.
          </p>
        </motion.div>

        {/* Accordion com Estilo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            
            <AccordionItem
              value="item-1"
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <AccordionTrigger className="text-lg font-semibold px-6 py-4 flex items-center gap-3 hover:bg-gray-50 transition-colors">
                <HelpCircle className="h-5 w-5 text-gray-500" />
                Qual o horário de funcionamento?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-base text-gray-600 leading-relaxed">
                O atendimento ocorre das 09h às 22h, de segunda a sábado. Cada sessão tem a duração de 50 minutos, planejada para se encaixar na sua rotina.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem
              value="item-2"
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <AccordionTrigger className="text-lg font-semibold px-6 py-4 flex items-center gap-3 hover:bg-gray-50 transition-colors">
                <HelpCircle className="h-5 w-5 text-gray-500" />
                Como saber se preciso de terapia?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-base text-gray-600 leading-relaxed space-y-4">
                <p>
                  Terapia é para todos! Não se trata de "frescura" ou algo exclusivo. Qualquer pessoa pode se beneficiar do processo terapêutico, que vai muito além do tratamento de patologias.
                </p>
                <p>
                  É uma poderosa ferramenta de autoconhecimento que nos ajuda a viver com mais propósito e qualidade. Se você busca se entender melhor e navegar pelos desafios da vida, a terapia é para você.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <AccordionTrigger className="text-lg font-semibold px-6 py-4 flex items-center gap-3 hover:bg-gray-50 transition-colors">
                <HelpCircle className="h-5 w-5 text-gray-500" />
                Como funciona a terapia na prática?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-base text-gray-600 leading-relaxed space-y-4">
                <p>
                  Cada processo terapêutico é único, assim como cada cliente. Geralmente, as sessões duram 50 minutos e ocorrem semanalmente, mas isso pode ser ajustado conforme sua necessidade.
                </p>
                <p>
                  Trabalho com a técnica de associação livre, onde você é convidado a expressar o que vem à mente, sem censura. Meu papel é fazer intervenções pontuais para guiar nossa investigação e aprofundar a compreensão.
                </p>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

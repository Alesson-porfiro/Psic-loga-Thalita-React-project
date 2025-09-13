// src/components/ServicesSection.tsx

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BrainCircuit, MessageSquareQuote, Heart } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="especialidades" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        
        {/* Título da Seção */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Minhas Especialidades
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Com uma base sólida em teoria e prática, meu objetivo é oferecer um cuidado completo e embasado para sua jornada de autoconhecimento e bem-estar.
          </p>
        </div>

        {/* Bloco de Destaque: Anos de Experiência */}
        <div className="mt-16 max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-center bg-white p-8 rounded-lg shadow-lg">
          <div className="md:col-span-1 text-center md:text-left">
            <span className="text-6xl font-bold text-blue-600">+15</span>
            <p className="text-xl font-semibold text-gray-700">Anos de Experiência</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-muted-foreground leading-relaxed">
              Mais de uma década dedicada ao estudo aprofundado e à prática clínica da saúde mental, sempre em busca das abordagens mais eficazes e de um atendimento humano e empático.
            </p>
          </div>
        </div>

        {/* Grid com os Cards de Competências */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          
          {/* Card: Psicanálise */}
          <Card className="text-left p-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <CardHeader>
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <MessageSquareQuote className="h-7 w-7 text-blue-600" />
              </div>
              <CardTitle className="text-xl font-semibold">Psicanálise</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Com Doutorado em Psicanálise, ofereço uma escuta profunda para a exploração do inconsciente e a ressignificação de sua história.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Card: Terapia Cognitivo-Comportamental */}
          <Card className="text-left p-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <CardHeader>
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <BrainCircuit className="h-7 w-7 text-blue-600" />
              </div>
              <CardTitle className="text-xl font-semibold">Terapia Cognitivo-Comportamental</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Com Pós-graduação em TCC, utilizo técnicas práticas e focadas para reestruturar padrões de pensamento e comportamento.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Card: Sexologia */}
          <Card className="text-left p-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <CardHeader>
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <Heart className="h-7 w-7 text-blue-600" />
              </div>
              <CardTitle className="text-xl font-semibold">Sexologia</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Através de estudos aprofundados, ofereço um espaço seguro e livre de julgamentos para abordar questões íntimas e de relacionamento.
              </CardDescription>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
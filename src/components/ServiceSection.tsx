// src/components/ServicesSection.tsx

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BrainCircuit, MessageSquareQuote, Heart } from "lucide-react";
import { motion } from "framer-motion";

export function ServicesSection() {
  return (
    <section id="especialidades" className="py-24 bg-gradient-to-b from-stone-50 to-white">
      <div className="container mx-auto px-6">
        
        {/* Título da Seção */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent">
            Minhas Especialidades
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Uma trajetória dedicada ao cuidado da saúde mental, unindo teoria, prática e acolhimento humano em cada atendimento.
          </p>
        </div>

        {/* Bloco de Destaque: Anos de Experiência */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-center bg-white/90 p-8 rounded-2xl shadow-lg backdrop-blur-sm"
        >
          <div className="md:col-span-1 text-center md:text-left">
            <span className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent">
              +15
            </span>
            <p className="text-xl font-semibold text-gray-700">Anos de Experiência</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-gray-600 leading-relaxed text-lg">
              Mais de uma década dedicada ao estudo e prática da psicanálise e psicoterapia, sempre buscando as abordagens mais eficazes para promover o equilíbrio emocional e o bem-estar de cada pessoa.
            </p>
          </div>
        </motion.div>

        {/* Grid com os Cards de Competências */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          
          {/* Card: Psicanálise */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Card className="text-left p-6 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] rounded-2xl">
              <CardHeader>
                <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-3 rounded-full w-fit mb-4">
                  <MessageSquareQuote className="h-7 w-7 text-gray-700" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">Psicanálise</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Com Doutorado em Psicanálise, ofereço uma escuta profunda para a exploração do inconsciente e a ressignificação da sua história de vida.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card: Terapia Cognitivo-Comportamental */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Card className="text-left p-6 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] rounded-2xl">
              <CardHeader>
                <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-3 rounded-full w-fit mb-4">
                  <BrainCircuit className="h-7 w-7 text-gray-700" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  Terapia Cognitivo-Comportamental
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Técnicas práticas e direcionadas para reestruturar padrões de pensamento e comportamento, promovendo mudanças significativas no dia a dia.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card: Sexologia */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Card className="text-left p-6 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] rounded-2xl">
              <CardHeader>
                <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-3 rounded-full w-fit mb-4">
                  <Heart className="h-7 w-7 text-gray-700" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">Sexologia</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Um espaço seguro e livre de julgamentos para compreender e trabalhar questões íntimas, relacionamentos e autoestima.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

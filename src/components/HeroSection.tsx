// src/components/HeroSection.tsx
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full">
      {/* Imagem de fundo */}
      <img
        src="/geradatres.jpg"
        alt="Psicóloga Thalita em seu consultório"
        className="w-full h-auto object-cover"
      />

      {/* Overlay escuro para dar contraste ao texto */}
      <div className="absolute inset-0 bg-black/50"></div>

     
      <div className="absolute inset-0 hidden md:flex items-center">
        <div className="container mx-auto px-4 text-left">
          
          {/* Div que controla a animação em cascata */}
          <motion.div
            className="max-w-xl space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              variants={itemVariants}
              className="text-5xl font-bold text-white leading-tight"
            >
              Uma vida mais leve começa agora!
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-white"
            >
              Thalita | Psicanalista e Psicóloga
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button size="lg" variant="secondary" asChild className="mt-4 transition-transform hover:scale-105">
                <a href="https://wa.me/11970338992">Agende sua sessão</a>
              </Button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
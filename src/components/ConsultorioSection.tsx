// src/components/ConsultorioSection.tsx
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function ConsultorioSection() {
    const images = [
        "/consultorio.jpg",
        "/consultorioUm.jpg",
        "/consultorioDois.jpg",
        "/consultorioTres.jpg",
        "/consultorioQuatro.jpg",
    ];

    return (
        <section
            id="consultório"
            className="py-24 bg-stone-50 relative overflow-hidden"
            style={{
                backgroundImage: "url('/ed870cc2f75f745f79ff48b6dd73a9b2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="container mx-auto px-6">

                {/* Título da Seção */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Conheça o Espaço
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Um ambiente seguro e tranquilo, pensado para o seu conforto e bem-estar durante todo o processo terapêutico.
                    </p>
                </div>

                {/* Carrossel de Imagens */}
                <div className="mt-12 flex justify-center">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full max-w-3xl"
                    >
                        <CarouselContent>
                            {images.map((src, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className="overflow-hidden rounded-lg shadow-lg group">
                                            <CardContent className="flex aspect-square items-center justify-center p-0 relative">
                                                <img
                                                    src={src}
                                                    alt={`Foto do consultório ${index + 1}`}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                {/* Overlay de brilho */}
                                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {/* Botões Mobile */}
                        <CarouselPrevious className="flex sm:hidden absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md" />
                        <CarouselNext className="flex sm:hidden absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md" />

                        {/* Botões Desktop */}
                        <CarouselPrevious className="hidden sm:flex" />
                        <CarouselNext className="hidden sm:flex" />
                    </Carousel>
                </div>

            </div>
        </section>
    );
}

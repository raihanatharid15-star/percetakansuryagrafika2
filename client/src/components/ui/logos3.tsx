"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by these companies",
  logos = [],
}: Logos3Props) => {
  // Duplicate logos for smooth infinite scroll
  const duplicatedLogos = [...logos, ...logos];
  
  return (
    <section className="py-24 overflow-hidden">
      <div className="container flex flex-col items-center text-center">
        <h2 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
          {heading}
        </h2>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20 overflow-hidden">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl overflow-hidden">
          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[
              AutoScroll({ 
                playOnInit: true, 
                speed: 0.5,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              })
            ]}
          >
            <CarouselContent className="ml-0">
              {duplicatedLogos.map((logo, index) => (
                <CarouselItem
                  key={`${logo.id}-${index}`}
                  className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div className="flex flex-col items-center gap-2">
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className || "h-16 w-auto object-contain"}
                      />
                      <p className="text-sm font-medium text-foreground">{logo.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };

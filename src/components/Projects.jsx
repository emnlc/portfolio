import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";

import { useRef } from "react";

import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const Projects = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  return (
    <div className="py-16 container mx-auto flex flex-col gap-4 md:gap-16">
      <h1 className="text-xl md:text-3xl font-extrabold ">Projects</h1>
      <div className="projects-display flex flex-col gap-12 md:gap-16 md:items-center">
        {/* Yard Ledger */}
        <div className="yard-ledger flex flex-col gap-6 md:gap-12">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg md:text-2xl font-medium">
              Yard Ledger - Invoice Manager
            </h1>
            <div className="flex flex-row gap-2">
              <img
                src="/techstack/typescript.svg"
                className="w-6 h-6 md:w-8 md:h-8"
                alt=""
              />
              <img
                src="/techstack/react.svg"
                className="w-6 h-6 md:w-8 md:h-8"
                alt=""
              />
              <img
                src="/techstack/node.svg"
                className="w-6 h-6 md:w-8 md:h-8"
                alt=""
              />
              <img
                src="/techstack/tailwind.svg"
                className="w-6 h-6 md:w-8 md:h-8"
                alt=""
              />
              <img
                src="/techstack/firebase.svg"
                className="w-6 h-6 md:w-8 md:h-8"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
            <Carousel
              plugins={[plugin.current]}
              className="flex flex-col items-center gap-4 w-fit"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {Array.from({ length: 4 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="">
                      <Card className="rounded-none">
                        <CardContent className="flex aspect-video ">
                          <img
                            src={"/yardledger/yl-" + (index + 1) + ".png"}
                            alt=""
                            className=" object-cover"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <p className="w-full text-sm md:text-base">
              Designed and implemented a web application for streamlined invoice
              processing and generation, with user authentication and real-time
              database synchronization.
              <br />
              <br />
              Successfully deployed and integrated into my parents&apos;
              landscape company, showcasing practical functionality.
            </p>
          </div>
        </div>

        {/* Coin Expo */}
        <div className="yard-ledger flex flex-col gap-6 md:gap-12">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg md:text-2xl font-medium md:self-end">
              Coin Expo - Crypto Prices
            </h1>
            <div className="flex flex-row md:self-end gap-2">
              <img
                src="/techstack/typescript.svg"
                className="w-6 h-6 md:w-8 md:h-8"
                alt=""
              />
              <img
                src="/techstack/react.svg"
                className="w-6 h-6 md:w-8 md:h-8"
                alt=""
              />
              <img
                src="/techstack/node.svg"
                className="w-6 h-6 md:w-8 md:h-8"
                alt=""
              />
              <img
                src="/techstack/express.svg"
                className="w-6 h-6 md:w-8 md:h-8"
                alt=""
              />
              <img
                src="/techstack/tailwind.svg"
                className="w-6 h-6 md:w-8 md:h-8"
                alt=""
              />
              <img
                src="/techstack/firebase.svg"
                className="w-6 h-6 md:w-8 md:h-8"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-12 items-center">
            <Carousel
              plugins={[plugin.current]}
              className="flex flex-col items-center gap-4 w-fit"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {Array.from({ length: 3 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="">
                      <Card className="rounded-none">
                        <CardContent className="flex aspect-video ">
                          <img
                            src={"/coinexpo/ce-" + (index + 1) + ".png"}
                            alt=""
                            className=" object-cover"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <p className="w-full text-sm md:text-base">
              Developed a web application to list and track top-ranking
              cryptocurrencies, featuring real-time price updates and
              statistical data.
              <br />
              <br />
              Integrated CoinMarketCap and CoinGecko APIs for live data, and
              enhanced user experience with an intuitive, responsive UI design.
            </p>
          </div>
        </div>

        {/* ASU Capstone */}
        <div className="yard-ledger flex flex-col gap-6 md:gap-12">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg md:text-2xl font-medium">
              AstroSeed - Neural Network
            </h1>
            <div className="flex flex-row gap-2">
              <img
                src="/techstack/python.svg"
                className="w-6 h-6 md:w-8 md:h-8"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
            <p className="w-full text-sm md:text-base">
              Capstone project at ASU, working within a Scrum-based team to
              design and develop a deep learning model. The model&apos;s goal is
              to assess the relationships between plants and their environmental
              factors.
              <br />
              <br />
              Actively engaged in regular communication and coordination with
              cross-functional teams to ensure the project&apos;s success and
              integration with other components.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

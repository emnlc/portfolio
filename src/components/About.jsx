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

function About() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  return (
    <div className="pt-0 pb-16 container mx-auto flex flex-col gap-4 md:gap-16">
      <h1 className="text-xl md:text-3xl font-extrabold ">About Me</h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-16 md:items-center">
        <div className="w-full">
          <Carousel
            plugins={[plugin.current]}
            className=""
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="">
                    <Card>
                      <CardContent className="flex aspect-square ">
                        <img
                          src={"/carousel/carousel-" + (index + 1) + ".JPG"}
                          alt=""
                          className=" object-cover "
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious />
        <CarouselNext /> */}
          </Carousel>
        </div>

        <div className="">
          <p className="text-sm md:text-lg">
            Born and raised in Phoenix, Arizona, I discovered my passion for
            coding in high school. I&apos;m now completing my bachelor&apos;s in
            computer science at{" "}
            <span className=" text-asu-maroon font-medium">
              Arizona State University
            </span>
            . During my time at ASU, I&apos;ve improved my problem solving and
            teamwork skills. Despite the challenges, I&apos;m eager to
            collaborate with like minded individuals. <br /> <br />I also love
            my cats and playing video games!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

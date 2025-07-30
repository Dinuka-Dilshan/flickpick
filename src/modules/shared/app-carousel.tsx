import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

type Item = {
  id: string;
  name: string;
  image?: string;
  subtitle?: string;
  variant: "Movie" | "TV" | "Person";
};

type Props = {
  items?: Item[];
  title?: string;
  imageVarient?: "rounded" | "square";
};

const AppCarousel = ({ items, title, imageVarient = "square" }: Props) => {
  return (
    <section>
      {title && (
        <h2 className="text-xl lg:text-2xl font-bold my-5 text-white">
          {title}
        </h2>
      )}
      <Carousel>
        <CarouselContent className="gap-10 lg:gap-13 xl:gap-20">
          {items?.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-1/2 md:basis-1/4 lg:basis-1/4 xl:basis-1/8 2xl:basis-1/10 "
            >
              <Link
                to={
                  item.variant === "Movie"
                    ? "/movies/$id"
                    : item.variant === "TV"
                    ? "/tvs/$id"
                    : "/person/$id"
                }
                params={{ id: item.id }}
              >
                <div
                  className={cn(
                    "flex flex-col rounded-lg bg-[#1A1A1A]/70 box-border ",
                    imageVarient === "rounded"
                      ? "w-[210px] h-[210px] justify-center  items-center "
                      : "w-[210px] h-[390px] "
                  )}
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className={cn(
                        "object-cover w-full blo",
                        imageVarient === "rounded"
                          ? "rounded-full w-[130px] h-[130px] object-top"
                          : "rounded-t-lg aspect-[2/3]"
                      )}
                    />
                  )}
                  <div className="box-border p-3.5">
                    <p className="text-white"> {item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default AppCarousel;

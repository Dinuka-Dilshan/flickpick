import { Badge } from "@/components/ui/badge";
import { cn, FancyColorVariants } from "@/lib/utils";
import type { Person } from "@/types/person";

const HeroSection = ({
  person: { name, images, description, professions, birthDate, birthPlace },
}: {
  person: Person;
}) => {
  return (
    <section className="flex w-full gap-4 lg:gap-8 flex-col">
      <div className="lg:hidden">
        <h1 className={"text-5xl text-[white] font-bold leading-tight"}>
          {name}
        </h1>
        <p className="text-white">
          {birthDate} | {birthPlace}
        </p>
      </div>
      <div className="flex w-full flex-col lg:flex-row gap-4 lg:gap-8">
        {images.primaryImage && (
          <div className="flex-2/5">
            <img
              src={images.primaryImage ?? ""}
              alt={name ?? "Person"}
              className="aspect-square object-cover rounded-xl w-full"
            />
          </div>
        )}
        <div className="flex-3/5 flex gap-2 flex-col">
          <h1
            className={`hidden lg:block text-5xl text-[white] font-bold leading-tight`}
          >
            {name}
          </h1>
          <p className="text-white text-lg hidden lg:block">
            {birthDate} | {birthPlace}
          </p>
          <div className="flex gap-2">
            {professions.map((profession) => (
              <Badge
                className={cn(Object.values(FancyColorVariants.pink))}
                key={profession}
              >
                {profession}
              </Badge>
            ))}
          </div>
          <p className="text-[#E5E5E5] line-clamp-6 h-full">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

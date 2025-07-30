import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn, FancyColorVariants } from "@/lib/utils";
import StatCard from "@/modules/MovieDetails/StatCard";
import TitleData from "@/modules/MovieDetails/TitleData";
import type { MovieDetails } from "@/types/movie";
import { Check, Scroll, Star, TrendingDown, TrendingUp } from "lucide-react";

const HeroSection = ({ movie }: { movie: MovieDetails }) => {
  const {
    title,
    posterUrl,
    plot,
    genres,
    meterRanking,
    ratings,
    voteCount,
    seasons,
    episodes,
  } = movie;

  return (
    <section className="flex flex-col md:flex-row  gap-4 md:gap-8">
      <div className="flex flex-col md:hidden w-full">
        <TitleData movie={movie} variant="mobile" />
      </div>
      {posterUrl ? (
        <div className="flex-2/5 lg:flex-1/5 aspect-[2/3]  rounded-xl self-start ">
          <img
            src={posterUrl}
            alt={title ?? "Movie Poster"}
            className="h-full w-full object-cover rounded-xl"
          />
        </div>
      ) : null}
      <div className="flex flex-col gap-4 flex-3/5">
        <TitleData
          movie={movie}
          variant={"desktop"}
          className="hidden md:block"
        />
        <div className="flex gap-2 ">
          {meterRanking?.rankChange && (
            <StatCard
              title={`#${meterRanking.currentRank}`}
              subtitle={
                <>
                  {meterRanking.rankChange.changeDirection !== "FLAT" && (
                    <span
                      className={cn(
                        "font-bold",
                        "flex items-center gap-1.5 justify-center"
                      )}
                    >
                      {meterRanking.rankChange.changeDirection === "UP" ? (
                        <TrendingUp strokeWidth={2} size={15} />
                      ) : (
                        <TrendingDown strokeWidth={2} />
                      )}{" "}
                      {meterRanking.rankChange.difference}
                    </span>
                  )}
                </>
              }
              color={
                meterRanking.rankChange.changeDirection === "UP"
                  ? "green"
                  : meterRanking.rankChange.changeDirection === "DOWN"
                  ? "red"
                  : "purple"
              }
              className="min-w-[80px]"
            />
          )}
          <StatCard
            className="min-w-[80px]"
            Icon={Star}
            title={ratings}
            subtitle={`${new Intl.NumberFormat("en-US", {
              notation: "compact",
            }).format(voteCount || 0)}`}
            color={"blue"}
          />
          {seasons ? (
            <StatCard
              className="min-w-[80px]"
              title={`${seasons}`}
              subtitle={"Seasons"}
              color={"teal"}
            />
          ) : null}
          {episodes ? (
            <StatCard
              className="min-w-[80px]"
              title={`${episodes}`}
              subtitle={"Episodes"}
              color={"yellow"}
            />
          ) : null}
        </div>
        <div className="flex gap-2 flex-wrap">
          {genres?.map((genre) => (
            <Badge
              className={cn(Object.values(FancyColorVariants.pink))}
              key={genre}
            >
              {genre}
            </Badge>
          ))}
        </div>
        <div className="flex flex-col gap-1.5 mt-3">
          <p className="font-semibold text-xl text-white">Synopsis</p>
          <p className="text-white text-lg">{plot}</p>
        </div>
        <div className="flex gap-3 mt-1.5">
          <Button size="lg" variant="outline">
            <Check /> Watched
          </Button>
          <Button size="lg" variant="outline">
            <Scroll />
            Want to watch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

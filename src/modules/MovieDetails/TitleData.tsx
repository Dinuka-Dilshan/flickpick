import { cn } from "@/lib/utils";
import type { MovieDetails } from "@/types/movie";

const TitleData = ({
  movie,
  variant,
  className,
}: {
  movie: MovieDetails;
  variant: "mobile" | "desktop";
  className?: string;
}) => {
  const { title, releaseYear, titleType, runtime, certificate } = movie;

  return (
    <div className={className}>
      <h1
        className={cn(
          `text-5xl text-[white] font-bold leading-tight`,
          variant === "mobile" && "text-3xl"
        )}
      >
        {title}
      </h1>
      <p
        className={cn(
          " text-xl flex text-[white] gap-3",
          variant === "mobile" && "text-sm"
        )}
      >
        <span>{releaseYear} </span>
        <span className="text-muted-foreground"> | </span>
        <span>{titleType} </span>{" "}
        <span className="text-muted-foreground"> | </span>
        <span>{runtime}</span>
        <span className="text-muted-foreground"> | </span>
        <span>{certificate}</span>
      </p>
    </div>
  );
};

export default TitleData;

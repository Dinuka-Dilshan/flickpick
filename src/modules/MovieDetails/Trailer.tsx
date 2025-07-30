import type { MovieDetails } from "@/types/movie";

const Trailer = ({ movie }: { movie: MovieDetails }) => {
  const { videoUrls } = movie;

  if (!videoUrls?.[0]?.url) {
    return null;
  }

  return (
    <section>
      <h2 className="text-xl lg:text-2xl font-bold my-5 text-white">Trailer</h2>
      <video
        controls
        poster={videoUrls?.[0].thumbnail}
        className="w-full h-auto rounded-lg"
      >
        <source src={videoUrls?.[0].url} />
      </video>
    </section>
  );
};
export default Trailer;

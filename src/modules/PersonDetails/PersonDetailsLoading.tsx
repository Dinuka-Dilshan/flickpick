import { Skeleton } from "@/components/ui/skeleton";
import DetailsWrapper from "@/modules/shared/details-wrapper";

const PersonDetailsLoading = () => {
  return (
    <main className="container mx-auto">
      <DetailsWrapper>
        <section className="flex flex-col lg:flex-row  gap-4 lg:gap-8 mt-4 lg:mt-6">
          <div className="flex-col flex lg:hidden">
            <div>
              <Skeleton className="h-10 w-full mb-4" />
            </div>
          </div>
          <div className="flex-2/5 aspect-square  rounded-xl self-start w-full">
            <Skeleton className=" w-full rounded-xl h-full" />
          </div>
          <div className="flex-3/5 flex-col hidden lg:flex">
            <Skeleton className="h-10 w-[500px] mb-4" />
            <div className="flex gap-2 mb-4">
              <Skeleton className="h-[20px] w-[80px]" />
              <Skeleton className="h-[20px] w-[80px]" />
              <Skeleton className="h-[20px] w-[80px]" />
            </div>
            <Skeleton className="h-full w-full mb-4" />
          </div>
          <div className="lg:hidden">
            <div className="flex  gap-2 mb-6">
              <Skeleton className="h-5 w-[50px] " />
              <Skeleton className="h-5 w-[50px] " />
              <Skeleton className="h-5 w-[50px] " />
            </div>

            <Skeleton className="h-60 w-full mb-4" />
          </div>
        </section>
        <section className="mt-8">
          <Skeleton className="h-8 w-[300px] mb-4" />
          <div className="hidden lg:grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="rounded-lg flex flex-col items-center"
              >
                <Skeleton className="aspect-[2/3] w-full mb-2" />
                <Skeleton className="h-6 w-full mb-1" />
              </div>
            ))}
          </div>
          <div className="grid lg:hidden grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array.from({ length: 2 }).map((_, index) => (
              <div
                key={index}
                className="rounded-lg flex flex-col items-center"
              >
                <Skeleton className="aspect-[2/3] w-full mb-2" />
                <Skeleton className="h-6 w-full mb-1" />
              </div>
            ))}
          </div>
        </section>
      </DetailsWrapper>
    </main>
  );
};

export default PersonDetailsLoading;

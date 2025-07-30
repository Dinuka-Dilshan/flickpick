import HeroSection from "@/modules/PersonDetails/HeroSection";
import MoreFrom from "@/modules/PersonDetails/MoreFrom";
import PersonDetailsLoading from "@/modules/PersonDetails/PersonDetailsLoading";
import DetailsWrapper from "@/modules/shared/details-wrapper";
import { personQueryOptions } from "@/query/queryOptions";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/person/$id")({
  component: Person,
  loader: async ({ context, params: { id } }) => {
    return context.queryClient.ensureQueryData(personQueryOptions(id));
  },
  pendingComponent: PersonDetailsLoading,
});

function Person() {
  const { id } = Route.useParams();
  const { data: person } = useSuspenseQuery(personQueryOptions(id));

  return (
    <DetailsWrapper>
      <HeroSection person={person} />
      <MoreFrom person={person} />
    </DetailsWrapper>
  );
}

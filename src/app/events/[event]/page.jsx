import MainWrapper from "@/components/MainWrapper";
import SingleEvent from "@/components/events/singleEvent";

export default function Page({ params }) {

  return (
    <section className="bg-blue-50">
      <MainWrapper>
        <SingleEvent currEventId={params.event} />
      </MainWrapper>
    </section>
  );
}

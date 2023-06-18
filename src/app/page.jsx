import MainWrapper from "@/components/MainWrapper";
import EventCarosel from "@/components/events/EventsCarosel";

export default function Home() {
  return (
    <section>
      <MainWrapper>
        {/* Upcomming Event Section */}
        <EventCarosel />
      </MainWrapper>
    </section>
  );
}

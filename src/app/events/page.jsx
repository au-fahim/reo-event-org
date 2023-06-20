import MainWrapper from "@/components/MainWrapper";
import EventCarosel from "@/components/events/EventsCarosel";

export default function Events() {
  return (
    <section>
      <MainWrapper>
        {/* Upcomming Event Section */}
        <EventCarosel />
      </MainWrapper>
    </section>
  );
}

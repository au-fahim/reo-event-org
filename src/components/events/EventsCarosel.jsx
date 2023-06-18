"use client";

import { eventData } from "../../data/dummyEventData";
import EventCart from "./EventCard";

const events = eventData.map((event) => (
  <EventCart key={event.id} {...event} />
));

export default function EventCarosel() {
  return (
    <>
      <section className="py-4 md:py-6">
        <header className="mb-2 md:mb-4">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-medium">
            Upcomming Events
          </h1>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 ">
          {events}
        </main>
      </section>
    </>
  );
}

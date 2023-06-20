"use client";

import Image from "next/image";
import { useState } from "react";
import { Button, LoadingButton } from "@mui/material";
import { BiBookmarkAlt, BiCalendar, BiMap } from "react-icons/bi";
import { IoTicketOutline } from "react-icons/io5";
import { eventData } from "@/data/dummyEventData";

export default function SingleEvent({currEventId}) {
  const [loading, setLoading] = useState(true);

  function handleClick() {
    setLoading(true);
  }
  
  const event = eventData.filter(item => item.id == currEventId)

  const { id, name, date, time, location, images, organizers } = event[0];

  return (
    <header className="py-8 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-2 lg:gap-4 justify-center">
      {/* EVENT NAME & DATE */}
      <div className="flex flex-col pt-4 md:pt-0 gap-2 sm:justify-center lg:pr-8 order-2 md:order-1">
        <p className="flex flex-row items-center gap-2 text-xs md:text-sm lg:text-base">
          <BiCalendar size={20} /> <span>{date} - {time}</span>
        </p>
        <address className="flex flex-row items-center gap-2 text-xs md:text-sm lg:text-base">
          <BiMap size={20} />{" "}
          <span>{location}</span>
        </address>

        <h1 className="text-3xl md:text-4xl font-bold pt-2 pb-4 lg:pb-8 lg:pt-4">
          {name}
        </h1>

        <div className="w-full grid grid-cols-2 gap-2">
          <Button
            className="bg-[#2305e5] text-white hover:bg-[#2305e5] hover:opacity-80"
            startIcon={<IoTicketOutline />}
            variant="contained"
          >
            <span>Buy Ticket</span>
          </Button>
          <Button startIcon={<BiBookmarkAlt />}>
            <span>Add Wishlist</span>
          </Button>
        </div>
      </div>

      {/* EVENT IMAGES SLIDER */}
      <div className="order-1 md:order-2">
        <Image
          src={images}
          alt={images}
          width={640}
          height={640}
          className="rounded-md overflow-hidden"
        />
      </div>
    </header>
  );
}

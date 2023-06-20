import Link from "next/link";
import Image from "next/image";
import { BiRightArrowAlt } from "react-icons/bi";
import { Avatar, AvatarGroup, Button, Skeleton } from "@mui/material";

export default function EventCart({
  id,
  name,
  date,
  time,
  location,
  images,
  organizers,
}) {
  return (
    <Link
      href={`/events/${id}`}
      className="w-full flex flex-col gap-4 overflow-hidden"
    >
      
        {images ? <div className="rounded-md overflow-hidden w-full aspect-video"><Image src={images} width={650} height={220} alt={images} /> </div> : <Skeleton variant="rounded" animation="wave" width={650} height={200} />}
      

      <p className="text-sm">
        {date} | {time}
      </p>

      <h1 className="line-clamp-2">{name}</h1>

      {/* Bottom Organizers and more Button */}
      <div className="flex flex-row justify-between">
        <AvatarGroup max={3}>
          {organizers?.map((item, index) => (
            <Avatar
              src={item}
              alt={item}
              key={index}
              sx={{ width: 30, height: 30 }}
            />
          ))}
        </AvatarGroup>
        <Button className="text-[#2305e5]">More details</Button>
      </div>
    </Link>
  );
}

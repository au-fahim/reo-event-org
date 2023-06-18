import Image from "next/image";
import { Avatar, AvatarGroup, Button } from "@mui/material";
import Link from "next/link";

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
    <Link href={`/events/${id}`} className="w-full">
      <div className="rounded-md">
        <Image src={images} width={200} height={350} alt={images} />
      </div>

      <p>
        {date} | {time}
      </p>

      <h1>{name}</h1>

      {/* Bottom Organizers and more Button */}
      <div>
        <AvatarGroup max={3}>
          {organizers?.map((item, index) => (
            <Avatar src={item} alt={index} />
          ))}
        </AvatarGroup>
        <Button>More details</Button>
      </div>
    </Link>
  );
}

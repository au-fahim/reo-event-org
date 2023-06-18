import React from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

const navLinks = [
  {
    linkText: "Home",
    linkPath: "/",
  },
  {
    linkText: "Events",
    linkPath: "/events",
  },
  {
    linkText: "Services",
    linkPath: "/services",
  },
  {
    linkText: "About",
    linkPath: "/about",
  },
  {
    linkText: "Contact",
    linkPath: "/contact",
  },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row gap-6">
      {navLinks.map((item, index) => (
        <Link
          key={index}
          href={item.linkPath}
          className={`text-black hover:text-blue relative ${
            pathname === item.linkPath && "active_nav before:w-2/5"
          }`}
        >
          {item.linkText}
        </Link>
      ))}
    </nav>
  );
}

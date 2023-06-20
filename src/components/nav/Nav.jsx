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

export default function Nav({ nav_group, nav_link, closeMenu }) {
  const pathname = usePathname();

  return (
    <nav className={nav_group}>
      {navLinks.map((item, index) => (
        <Link
          key={index}
          href={item.linkPath}
          className={`${nav_link} ${
            pathname === item.linkPath && "active_nav"
          }`}
          onClick={closeMenu}
        >
          {item.linkText}
        </Link>
      ))}
    </nav>
  );
}

"use client";

import { useState } from "react";
import { BiLogIn, BiX } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Button, Drawer } from "@mui/material";

import Link from "next/link";
import Image from "next/image";

import Nav from "../nav/Nav";
import MainWrapper from "../MainWrapper";

export default function Header() {
  const [menuShow, setMenuShow] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMenuShow(open);
  };

  return (
    <header>
      <MainWrapper>
        <div className="flex flex-row items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex-initial w-40">
            <div>
              <Image
                src="/logo/reo.svg"
                alt="logo"
                height={60}
                width={100}
                priority
              />
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex-1 hidden md:flex justify-center">
            <Nav nav_group="nav_group" nav_link="nav_link" />
          </div>

          {/* User Profile Or Sign In button */}
          <div className="flex-initial w-40 hidden md:flex justify-end">
            <Button className="text-[#2305e5]" startIcon={<BiLogIn />}>
              <span>Login</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div
            className="flex-initial md:hidden cursor-pointer"
            onClick={toggleDrawer(true)}
          >
            <HiBars3BottomRight size={30} />
          </div>
          <Drawer
            anchor={"right"}
            open={menuShow}
            onClose={toggleDrawer(false)}
          >
            <header className="py-4 px-4 border-b">
              <BiX
                size={34}
                className="bg-slate-200 rounded-full py-2 px-2 hover:bg-slate-50 cursor-pointer"
                onClick={toggleDrawer(false)}
              />
            </header>

            

            <Nav
              nav_group="mobile_nav_group"
              nav_link="mobile_nav_link"
              closeMenu={toggleDrawer(false)}
            />

          </Drawer>
        </div>
      </MainWrapper>
    </header>
  );
}

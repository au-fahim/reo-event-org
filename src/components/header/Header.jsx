"use client"

import { useState } from "react";
import { BiLogIn } from "react-icons/bi";
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
              <Image src="/logo/reo.svg" alt="logo" height={60} width={100} />
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex-1 hidden md:flex justify-center">
            <Nav />
          </div>

          {/* User Profile Or Sign In button */}
          <div className="flex-initial w-40 hidden md:flex justify-end">
            <Button className="text-blue" startIcon={<BiLogIn />}>
              <span>Login</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex-initial md:hidden" onClick={toggleDrawer(true)}>
            <HiBars3BottomRight size={30} />
          </div>
          <Drawer
            anchor={"right"}
            open={menuShow}
            onClose={toggleDrawer(false)}
          >
            Menu List
          </Drawer>
        </div>
      </MainWrapper>
    </header>
  );
}

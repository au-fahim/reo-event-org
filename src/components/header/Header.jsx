"use client";

import { BiLogIn } from "react-icons/bi";
import { Button } from "@mui/material";

import Link from "next/link";
import Image from "next/image";

import Nav from "../nav/Nav";
import MainWrapper from "../MainWrapper";

export default function Header() {
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
          <div className="flex-1 flex justify-center">
            <Nav />
          </div>

          {/* User Profile Or Sign In button */}
          <div className="flex-initial w-40 flex justify-end">
            <Button className="text-blue" startIcon={<BiLogIn />}>
              <span>Login</span>
            </Button>
          </div>
        </div>
      </MainWrapper>
    </header>
  );
}

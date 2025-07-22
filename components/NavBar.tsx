import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
const NavBar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" alt="logo" height={44} width={46} />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <NavItems />
        <header className="flex justify-end items-center p-4 gap-4 h-16">
          <SignedOut>
            <div className="flex items-center">
              <SignInButton>
                <button className="btn-signin">Sign In</button>
              </SignInButton>
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
      </div>
    </nav>
  );
};

export default NavBar;

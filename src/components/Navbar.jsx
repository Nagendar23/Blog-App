import React, { useState } from "react";
import { IKImage } from "imagekitio-react";
import Image from "./Image";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between px-4 md:px-8 relative z-20">
      {/* logo */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="/logo.png" alt=" Main logo" w={32} h={32} />
        <span>My Dev Diary</span>
      </Link>

      {/* mobile menu icon */}
      <div className="md:hidden z-30">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "✖" : "☰"}
        </div>
      </div>

      {/* mobile links */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 sm:w-1/2 bg-#e6e6ff shadow-lg flex flex-col items-center justify-center gap-8 text-lg font-medium transition-all duration-300 z-20 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <Link to="/">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
            Login 👋🏼
          </button>
        </Link>
      </div>

      {/* desktop menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <Link to="/login">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
            login👋🏼
          </button>
        </Link>
                    {/* <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn> */}
      </div>
    </div>
  );
};

export default Navbar;

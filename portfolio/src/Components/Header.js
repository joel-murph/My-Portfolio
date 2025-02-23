import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="flex justify-between sticky-top px-5 py-2 bg-secondary">
      <a href="#hero">
        <p className="font-bold text-white" >
          Joel Murphy
        </p>
      </a>
      <nav className="hidden md:block">
        <ul className="flex text-white">
          <li className="hover"><a href="/">Home</a></li>
          <li className="hover"><a href="#about">About</a></li>
          <li className="hover"><a href="#project">Projects</a></li>
          <li className="hover"><a href="#resume">Resume</a></li>
          <li className="hover"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      {toggleMenu && (
        <nav className="block md:hidden ">
          <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav ">
           <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      )}
      <button
        className="block md:hidden"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <Bars3Icon className="text-white h-5" />
      </button>
    </header>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const path = usePathname();
  // const isActive = path === href;
  const isActive = href === "/" ? path === "/" : path.startsWith(href);

  return (
    <Link
      href={href}
      className={`${isActive ? "font-bold text-pink-600 border-b-2 rounded-bl-2xl rounded-br-2xl border-b-pink-500" : "font-medium hover:text-pink-600"}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;

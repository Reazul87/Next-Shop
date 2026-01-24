import React from "react";
import NavLink from "../buttons/NavLink";
import Link from "next/link";
import AuthButtons from "../buttons/AuthButtons";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import Image from "next/image";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  const links = (
    <>
      <li>
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink href={"/items"}>Items</NavLink>
      </li>
      {session?.user && (
        <li>
          <NavLink href={"/add-item"}>Add Item</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="bg-gray-700">
      <div className="navbar max-w-7xl mx-auto px-2 md:px-6 text-white backdrop-blur-md sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu text-black menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            href="/"
            className="text-xl text-pink-600 hover:text-pink-700 font-bold tracking-tight"
          >
            NextShop
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex items-center gap-3">
          {session?.user && (
            <div className="avatar">
              <div className="w-10 rounded-full overflow-hidden border-2 border-pink-400 cursor-pointer">
                <Image
                  src={
                    session.user.image ||
                    "https://i.pinimg.com/1200x/9d/c1/03/9dc1031a043b41738e1c747fd04b203f.jpg"
                  }
                  alt="profile"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          )}
          <AuthButtons></AuthButtons>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

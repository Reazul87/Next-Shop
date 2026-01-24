"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { toast } from "react-toastify";

const AuthButtons = () => {
  const session = useSession();
  return (
    <div>
      {session.status == "authenticated" ? (
        <>
          <button
            onClick={() => {
              signOut();
              toast.info("Logout Successful")
            }}
            className="btn btn-primary "
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          <Link href={"/login"}>
            <button className="btn btn-secondary btn-outline">Login</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthButtons;

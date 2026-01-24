"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

export const SocialButtons = () => {
  const router = useRouter();

  const handleSignIn = async () => {
    const result = await signIn("google", {
      callbackUrl: "/items",
    });

    if (result?.error) {
      toast.error("Google sign-in failed");
    } else {
      toast.success("Logged in with Google!");
      router.push("/items");
    }
  };

  return (
    <button onClick={handleSignIn} className="btn btn-outline btn-error">
      <FaGoogle className="text-lg" />
      Google
    </button>
  );
};

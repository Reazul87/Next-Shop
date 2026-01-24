"use client";
import Link from "next/link";
import { SocialButtons } from "./SocialButton";
import { useState } from "react";
import { postUser } from "@/actions/server/auth";
import { useRouter } from "next/navigation";
import { AiOutlineLoading } from "react-icons/ai";
import { Eye, EyeClosed } from "lucide-react";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";

export const RegisterForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.email.endsWith("gmail.com")) {
      toast.error("We only accept Gmail addresses.");
      setLoading(false);
      return;
    }

    if (form.password.length < 6) {
      toast.info("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    try {
      const result = await postUser(form);

      if (result.success) {
        toast.success("Registered successfully! Please login.");
        router.push("/login");
      } else {
        toast.error(result.message || "Email already registered");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong, please try again.");
    }

    setLoading(false);
  };

  const handleSignIn = async () => {
    const result = await signIn("google", { callbackUrl: "/items" });

    if (result?.error) {
      toast.error("Google sign-in failed");
    } else {
      toast.success("Logged in with Google!");
      router.push("/items");
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-base-200">
      <div
        className={` ${
          loading ? " flex opacity-80 inset-0 absolute" : "hidden"
        }  z-20 glass w-full  h-full  justify-center items-center gap-4`}
      >
        <AiOutlineLoading
          size={50}
          className="animate-spin text-primary font-bold"
        />
        <h2 className={`text-xl font-bold animate-pulse`}>
          {" "}
          Processing Registration{" "}
        </h2>
      </div>
      <div className="card w-full max-w-sm shadow-xl bg-base-100">
        <div className="card-body">
          <div className="text-center mb-2">
            <h1 className="text-3xl font-extrabold text-[#123e8bde]">
              Create Account
            </h1>
            <p className="text-gray-500 mt-2">
              By joining this community.{`Let's`} make a community together
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Name */}
            <div className="space-y-1">
              <label htmlFor="name" className="label font-bold text-black/70">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered w-full border border-error focus:ring-1 focus:ring-yellow-600 focus:outline-0"
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Address */}
            <div className="space-y-1">
              <label htmlFor="email" className="label font-bold text-black/70">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full border border-error focus:ring-1 focus:ring-yellow-600 focus:outline-0"
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label
                htmlFor="password"
                className="label font-bold text-black/70"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full border border-error focus:ring-1 focus:ring-yellow-600 focus:outline-0"
                  onChange={handleChange}
                  required
                />

                <button
                  className="absolute top-2.5 right-5 text-gray-700 cursor-pointer z-10"
                  type="button"
                  onClick={() => setShow(!show)}
                >
                  {show ? (
                    <EyeClosed size={20}></EyeClosed>
                  ) : (
                    <Eye size={20}></Eye>
                  )}
                </button>
              </div>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="btn btn-primary w-full"
            >
              Register
            </button>
          </form>

          <button onClick={handleSignIn} className="btn btn-outline btn-error">
            <FaGoogle className="text-lg" />
            Google
          </button>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="link link-primary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

"use client";
import Link from "next/link";
import { SocialButtons } from "./SocialButton";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { Eye, EyeClosed } from "lucide-react";
import { toast } from "react-toastify";

const LoginForm = () => {
  const params = useSearchParams();
  const router = useRouter();
  const callback = params.get("callbackUrl") || "/login";
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const result = await signIn("credentials", {
      email,
      password: password,
      redirect: false,
      callbackUrl: callback,
    });

    if (!result?.ok) {
      toast.error("Email or password not matched");
    } else {
      toast.success("Welcome to NextShop!");
      router.push("/items");
    }
    setLoading(false);
  };

  const handleDirectSignin = async () => {
    const email = `${process.env.NEXT_PUBLIC_EMAIL}`;
    const password = `${process.env.NEXT_PUBLIC_PASSWORD}`;

    const result = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
      callbackUrl: callback,
    });

    if (!result?.ok) {
      toast.error("Demo login failed");
    } else {
      toast.success("Demo login successful!");
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
        <h2 className={`text-xl font-bold animate-pulse`}>Processing Login</h2>
      </div>
      <div className="card w-full max-w-sm shadow-xl bg-base-100">
        <div className="card-body">
          <div className="text-center mb-3">
            <h1 className="text-3xl font-extrabold text-[#123e8bde]">
              Welcome Back
            </h1>
            <p className="text-gray-500 mt-2">
              Sign in to continue your journey. Manage your account, explore new
              features, and more.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Email Address */}
            <div className="space-y-1">
              <label className="label font-bold text-black/70">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full border border-error focus:ring-1 focus:ring-yellow-600 focus:outline-0"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="label font-bold text-black/70">Password</label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full border border-error focus:ring-1 focus:ring-yellow-600 focus:outline-0"
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
              Login
            </button>
          </form>

          <div className="flex flex-col gap-2 mt-0">
            <SocialButtons />
            <button
              type="button"
              onClick={handleDirectSignin}
              className="btn btn-secondary btn-outline"
            >
              Demo Login
            </button>
          </div>

          <p className="text-center text-sm">
            Don’t have an account?{" "}
            <Link href={`/register`} className="link link-primary">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;

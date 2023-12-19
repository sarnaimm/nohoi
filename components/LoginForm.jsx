"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid place-items-center h-screen px-20 bg-dark">
      <div className="border  border-grey rounded-2xl flex">
        <img  className=" object-contain h-92 w-96 rounded-l-2xl" src='https://ui8.net/img/auth-sign-in.jpg'></img>
        <div className="p-10 bg-grey2 rounded-r-2xl">
          <h1 className="text-white text-3xl mb-10">Sign in to your account</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="px-4 py-2 w-full rounded-lg  bg-transparent border white:border-white text-white"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="px-4 py-2 w-full rounded-lg  bg-transparent border white:border-white text-white"
            />
            <button className="bg-blue-600 text-white font-bold cursor-pointer px-6 py-2 rounded-lg">
              Sign in
            </button>
            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}

            <Link className="text-white text-sm mt-3 text-right" href={"/register"}>
              Don't have an account? <span className="underline">Register</span>
            </Link>
          </form>
        </div>
      </div>
  
    </div>
  );
}

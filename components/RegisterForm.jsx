"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    // <div className="grid place-items-center h-screen">
    //   <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
    //     <h1 className="text-xl font-bold my-4">Register</h1>

    //     <form onSubmit={handleSubmit} className="flex flex-col gap-3">
    //       <input
    //         onChange={(e) => setName(e.target.value)}
    //         type="text"
    //         placeholder="Full Name"
    //       />
    //       <input
    //         onChange={(e) => setEmail(e.target.value)}
    //         type="text"
    //         placeholder="Email"
    //       />
    //       <input
    //         onChange={(e) => setPassword(e.target.value)}
    //         type="password"
    //         placeholder="Password"
    //       />
    //       <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
    //         Register
    //       </button>

    //       {error && (
    //         <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
    //           {error}
    //         </div>
    //       )}

    //       <Link className="text-sm mt-3 text-right" href={"/"}>
    //         Already have an account? <span className="underline">Login</span>
    //       </Link>
    //     </form>
    //   </div>
    // </div>
    <div className="grid place-items-center h-screen px-20 bg-dark">
      <div className="border  border-grey rounded-2xl flex">
        <img  className=" object-contain h-92 w-96 rounded-l-2xl" src='https://ui8.net/img/auth-sign-up.jpg'></img>
        <div className="p-10 bg-grey2 rounded-r-2xl">
          <h1 className="text-white text-3xl mb-10">Sign in to your account</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
            className="px-4 py-2 w-full rounded-lg  bg-transparent border white:border-white text-white"
          />
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
              register
            </button>
            {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

            <Link className=" text-white text-sm mt-3 text-right" href={"/"}>
              Already have an account? <span className="underline">Login</span>
             </Link>
          </form>
        </div>
      </div>
  
    </div>
  );
}

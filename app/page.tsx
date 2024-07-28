'use client'
import Image from "next/image";
import Link from "next/link";
import { TbEyeStar } from "react-icons/tb";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [icon, setIcon] = useState<boolean>(false);
  const [type, setType] = useState<string>("password");
  const handleToggle = () => {
    if (type === "password") {
      setIcon(true);
      setType("text");
    } else {
      setIcon(false);
      setType("password");
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-primary">
      <section className="bg-white min-h-screen container flex flex-col items-center">
      <header className="flex justify-between items-center w-full">
        <div className="logo p-4 font-bold text-xl flex items-center space-x-1"><span className="text-criti-blue"><TbEyeStar /></span> <span>Critiview</span></div>
        <div className="p-4 space-x-1"><span>You do not have an account?</span><Link href={'#'} className="text-criti-blue underline font-semibold">Sign up</Link></div>
      </header>
      <div className="text-center font-semibold my-6 text-2xl">Login</div>
      {/* login option buttons */}
      <div className="space-x-2 my-2">
        <button className="underline underline-offset-8 text-gray-300">Login with socials</button>
        <button className="underline underline-offset-8">Login with email</button>
      </div>
      {/* email/magic link option */}
      <div className="space-x-2 my-4 border-2 rounded-lg">
        <button className="bg-black text-white p-2 py-[0.1rem] rounded m-1">Email</button>
        <button className="">Magic Link</button>
      </div>
      <form action="" className="mt-6 w-[80%]">
        <div className="flex flex-col">
        <label htmlFor="email">Email address</label>
        <input type="email" name="" id="email" className="border" />
        </div>
        <div className="mt-4 flex flex-col">
        <label htmlFor="password" className="">Password</label>
        <div className="flex w-full">
        <input type={type} name="password" id="password" className="border w-full" />
        <span
                className="flex justify-around items-center"
                onClick={handleToggle}
              >
                {icon ? (
                  <FaEye className="absolute mr-10" size={25} />
                ) : (
                  <FaEyeSlash className="absolute mr-10" size={25} />
                )}
              </span>
              </div>
        </div>
        <div className="text-right my-2">
        <Link href={'#'}>Forgot password?</Link>
        </div>
        <button type="submit" className="border bg-criti-blue w-full text-white p-2 rounded-lg">Login</button>
      </form>
      </section>
    </main>
  );
}

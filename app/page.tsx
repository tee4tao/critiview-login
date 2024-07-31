'use client'
import Image from "next/image";
import Link from "next/link";
import { TbEyeStar } from "react-icons/tb";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import {useForm, SubmitHandler} from "react-hook-form"
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod' // it connects our schema to react hook-form; npm install @hookform/resolvers 

export default function Home() {
  const [icon, setIcon] = useState<boolean>(false);
  const [type, setType] = useState<string>("password");
  const schema = z.object({
    email: z.string().email(), // all the validations necessary for email has been done here
    password: z.string().min(8), //// all the validations necessary for password has been done here
  })
  type formField = z.infer<typeof schema>
  const {register, handleSubmit, formState:{errors, isSubmitting}} = useForm<formField>({resolver: zodResolver(schema),})
  const onSubmit: SubmitHandler<formField> = async(data)=>{
    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
    console.log(data);
    
  }
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
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-6 bg-primary lg:p-0 lg:items-end">
      <section className="bg-white py-8 container rounded-lg flex flex-col items-center lg:w-1/2 lg:min-h-screen lg:p-8">
      <header className="flex justify-between items-center w-full">
        <div className="logo p-4 font-bold text-xl flex items-center space-x-1"><span className="text-criti-blue"><TbEyeStar /></span> <span>Critiview</span></div>
        <div className="p-4 space-x-1"><span>You do not have an account?</span><Link href={'#'} className="text-criti-blue underline font-semibold">Sign up</Link></div>
      </header>
      <div className="text-center font-semibold my-6 text-2xl">Login</div>
      {/* login option buttons */}
      <div className="space-x-2 my-2 flex">
        <button className="underline underline-offset-8 text-gray-300">Login with socials</button>
        <button className="underline underline-offset-8">Login with email</button>
      </div>
      {/* email/magic link option */}
      <div className="space-x-2 my-4 border-2 rounded-lg">
        <button className="bg-black text-white p-2 py-[0.1rem] rounded m-1">Email</button>
        <button className="">Magic Link</button>
      </div>
      <form action="" className="mt-6 w-[80%]" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
        <label htmlFor="email">Email address</label>
        <input {...register("email"
        // , {
        //   required: "email is required",
        //   validate: value=>{
        //     if (!value.includes('@')) {
        //       return "Email must contain @"
        //     }
        //     return true
        //   }
        // } all custom validation not needed anymore!(it's been taken care of by schema)
        )} id="email" className="border" />
        {errors.email&&(<div className="text-red-500 mt-[5px]">{`${errors.email.message} !`}</div>)}
        </div>
        <div className="mt-4 flex flex-col">
        <label htmlFor="password" className="">Password</label>
        <div className="flex w-full">
        <input {...register("password"
        // ,{
        //   required: "Password is required",
        //   minLength: {
        //     value:8,
        //     message: 'Password must have at least 8 characters'
        //   },
        // } all custom validation not needed anymore!(it's been taken care of by schema)
        )} type={type} className="border w-full" />
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
                {errors.password&&(<div className="text-red-600 mt-[5px]">{`${errors.password.message} !`}</div>)}
        </div>
        <div className="text-right my-2">
        <Link href={'#'}>Forgot password?</Link>
        </div>
        <button type="submit" disabled={isSubmitting} className="border bg-criti-blue w-full text-white p-2 rounded-lg">{isSubmitting?`Loading...`:`Login`}</button>
      </form>
      </section>
    </main>
  );
}

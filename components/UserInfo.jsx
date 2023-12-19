"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  

  return (
    <main>
      <div className="className='w-full h-screen bg-grey">
        <div className='fixed px-20  h-20 responsive-padding w-full md:flex hidden items-center justify-between backdrop-blur-sm'>
          <div className='w-1/2  flex justify-start items-center gap-10'>
            <img src='https://images.ui8.net/avatar/543edf703fbf6101242ebff0/40_40_1.png'></img>
            <p className='text-white/70 text-base cursor-pointer hover:hover:text-white'>Browse</p>
            <p className='text-white/70 text-base cursor-pointer hover:hover:text-white'>All-Access</p>
            <p className='text-white/70 text-base cursor-pointer hover:hover:text-white'>Studio</p>
            <p className='text-white/70 text-base cursor-pointer hover:hover:text-white'>Become an author</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" stroke-white/80 w-6 h-6 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <div className='w-1/2  flex justify-end items-center gap-10'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white/80 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white/80 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white/80 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
            </svg>
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white/80 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            </button>
            <button
          onClick={() => signOut()}
          className=" border rounded-lg border-grey bg-blue-500 text-white font-bold px-6 py-2 mt-3"
        >
          Log Out
        </button>

          </div> 
        </div>

        <div className="bg-[url('https://images.ui8.net/redesign/hero-home.jpg')] w-full h-screen bg-cover bg-center bg-no-repeat mb-8 flex flex-col justify-center items-center">
          <div className="flex flex-col">
            <h1 className="text-white font-bold text-5xl mb-10">8,165 curated design resources to <br/> speed up your creative workflow.</h1>
            <h1 className="text-white text-xl mb-32">Join a growing family of 723,205 designers and makers from around the world.</h1>
          </div>

          <div className="flex justify-center items-end gap-10">
            <button className=' font-bold text-white py-2.5 px-8 border rounded-full border-blue-600 gap-3 flex items-center'>Featured</button>
            <button className=' font-bold text-white py-2.5 px-8 border rounded-full border-white/50 gap-3 flex items-center'>Trending</button>
            <button className=' font-bold text-white py-2.5 px-8 border rounded-full border-white/50 gap-3 flex items-center'>Latest</button>
          </div>
        </div>

      </div>

    </main>
    
  );
}

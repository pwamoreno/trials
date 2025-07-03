"use client";

import Image from "next/image";
import { user } from "@/lib/data/user";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/devtutsComp/Navbar";

const DevtutsHome = () => {
  const [userStatus, setUserStatus] = useState(user.signedIn);

  if (!userStatus) {
    return (
      <div className="mt-12 mx-12 max-md:mx-12">
        <div className="flex justify-between">
          <Image src="/next.svg" alt="logo" width={50} height={50} />
          <div className="flex items-center">
            <button
              onClick={() => setUserStatus(!user.signedIn)}
              className="border bg-black text-white p-1.5 rounded-sm w-24 mr-4 hover:border hover:border-black hover:bg-white hover:text-black hover:cursor-pointer"
            >
              Sign In
            </button>
            <div className="border border-slate-200 rounded-full p-4 bg-slate-100 overflow-hidden relative">
              <Link href={user.signedIn ? "/devtuts/profile" : ""}>
                <Image
                  src="/test2.jpg"
                  alt="user icon"
                  fill
                  className="object-cover"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex max-md:flex-col xl:items-center xl:justify-center mt-24">
          <div className="">
            <h1 className="text-3xl font-bold">Welcome to devtuts!</h1>
            <p className="mt-3 w-[420px] max-md:w-[344px] mr-12">
              Learn the building blocks of programming and create a world with
              no limits. If that sounds good, then let&apos;s go, choose from
              any of our free courses to get started.
            </p>
          </div>
          <Image
            src="/Asset1.svg"
            alt="hero"
            width={400}
            height={200}
            className="mt-24 max-md:mt-6"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12 mx-12 max-md:mx-6">
      <div className="flex justify-between">
        <Image src="/next.svg" alt="logo" width={50} height={50} />
        <div className="flex items-center">
          {/* <p>Welcome {user.name}!</p> */}
          <div className="border border-slate-200 rounded-full p-4 bg-slate-100 overflow-hidden relative">
            <Link href="/devtuts/profile">
              <Image
                src={user.userIcon}
                alt="user icon"
                fill
                className="object-cover"
              />
            </Link>
          </div>
          <p className="ml-4">
            Welcome <strong>{user.username}!</strong>
          </p>
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default DevtutsHome;

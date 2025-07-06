"use client";

import Image from "next/image";
import { user } from "@/lib/data/user";
import { courses } from "@/lib/data/courses";
import Link from "next/link";
import { useMemo, useState } from "react";
import Navbar from "@/components/devtutsComp/Navbar";
import { AlignLeft, ChevronDown, PlusIcon } from "lucide-react";
import Courses from "@/components/devtutsComp/Courses";
import CourseFilter from "@/components/devtutsComp/CourseFilter";
import CourseSort from "@/components/devtutsComp/CourseSort";
import Loader from "@/components/devtutsComp/Loader";

const DevtutsHome = () => {
  const [userStatus, setUserStatus] = useState(user.signedIn);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true)

  const categories = [...new Set(courses.map((course) => course.category))];

  const newFilterCourses = useMemo(() => {
    return courses
      .filter((course) =>
        course.title.toLowerCase().includes(search.toLowerCase())
      )
      .filter((course) =>
        selectedCategory === "All" ? true : course.category === selectedCategory
      );
  }, [search, selectedCategory]);

  setTimeout(() => {
    setLoading(false)
  }, 3000)

  if (!userStatus) {
    return (
      <div className="mt-12 mx-12 max-md:mx-12">
        <div className="flex justify-between">
          <Image src="/Asset3.svg" alt="logo" width={50} height={50} />
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
        <Link href="/devtuts">
          <Image src="/Asset3.svg" alt="logo" width={30} height={50} />
        </Link>
        <div className="flex items-center">
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
          <p className="ml-4 max-md:hidden">
            Welcome <strong>{user.username}!</strong>
          </p>
        </div>
      </div>

      <Navbar />

      {/* Main body of page */}
      <div className="flex items-center justify-between px-4 py-12 shadow">
        <p className="font-medium text-xl">Courses</p>
        <button className="flex items-center bg-black text-white text-sm font-bold w-fit hover:cursor-pointer py-2 px-4 rounded-md">
          Add Course
          <PlusIcon size={15} className="ml-2" />
        </button>
      </div>

      <div className="my-6 relative">
        <button
          className="inline-flex items-center justify-between shadow py-2 rounded-md gap-2 px-2 hover:cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="flex items-center gap-2 font-bold text-sm">
            <AlignLeft size={15} />
            Sort by categories
          </span>
          <span className="ml-12">
            <ChevronDown size={15} />
          </span>
        </button>
        <div className="absolute z-50">
          {isOpen ? (
            <div className="flex flex-col shadow border border-slate-300 w-fit px-4 py-4 bg-white">
              <CourseSort
                selected={selectedCategory}
                setSelected={setSelectedCategory}
                categories={categories}
              />
            </div>
          ) : (
            <span className="hidden"></span>
          )}
        </div>
      </div>
      <div className="flex w-full gap-5 max-md:flex-col-reverse max-md:items-center">
        <div className="px-4 py-6 shadow rounded-md w-2/3 max-md:w-full">
          {
            loading ? <Loader /> : 
            <Courses courses={newFilterCourses} />
          }
        </div>
        <div className="px-4 py-6 shadow rounded-md  w-1/3 h-fit max-md:w-full">
          <CourseFilter search={search} setSearch={setSearch} />
          <hr className="mt-5 w-full bg-gray-200 p-[1px] border-none"/>
        </div>
      </div>
    </div>
  );
};

export default DevtutsHome;

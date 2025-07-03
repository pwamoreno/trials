import Link from "next/link";

import { Asterisk } from "lucide-react";

import { cardInfo } from "@/lib/data/cardInfo";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="max-md:mx-6 ">
      <div className="flex flex-col items-center mt-12 mb-5">
        <div className="flex">
          <Asterisk className="bg-slate-100 rounded-full mr-1"/>
          <h1 className="text-3xl font-bold">trials</h1>
        </div>
        <p className="font-medium">my adventures of learning and discovery</p>
      </div>
      <div className="grid justify-center min-h-screen gap-8 w-fit mx-auto xl:grid-cols-4 lg:grid-cols-2 lg:gap-2 max-lg:grid-cols-2 max-md:grid-cols-3 max-md:gap-4 sm:p-20 max-sm:flex max-sm:flex-col">
        {cardInfo.map((item, index) => (
          <Link key={index} href={`/${item.name}`}>
            <Card name={item.name} about={item.about} image={item.image} />
          </Link>
        ))}
      </div>
    </div>
  );
}

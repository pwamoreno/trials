import Image from "next/image";
import React from "react";

interface CardProps {
  name: string;
  about: string;
  image: string;
}

const Card = ({ name, about, image }: CardProps) => {
  return (
    <div className="border-black border-2 border-solid w-[350px] h-[450px] mb-4">
      <div className="bg-slate-100 w-[300px] h-[350px] mx-auto mt-2.5 overflow-hidden relative">
        <Image src={image} alt={name} fill className="object-contain"/>
      </div>
      <div className="ml-[25px] mt-2">
        <p className="text-2xl font-bold">{name}</p>
        <p className="">{about}</p>
      </div>
    </div>
  );
};

export default Card;

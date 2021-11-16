import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex py-7 px-2 pr-4 border-b border-gray-300 cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex items-center justify-between">
          <p className="font-poppins">{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl font-poppins ">{title}</h4>
        <div className="border-b border-gray-400  w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow font-poppins">
          {description}
        </p>
        <div className="flex justify-between">
          <div className="flex items-center space-x-1">
            <StarIcon className="h-6 text-red-400" />
            <p className="font-poppins">{star}</p>
          </div>
          <div>
            <p className="font-poppins font-bold text-lg pb-2 lg:text-2xl">
              {price}
            </p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;

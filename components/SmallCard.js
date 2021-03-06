import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounged-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-150 ease-out">
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <div>
        <h2 className="font-poppins">{location}</h2>
        <h2 className="font-poppins text-sm">{distance}</h2>
      </div>
    </div>
  );
}

export default SmallCard;

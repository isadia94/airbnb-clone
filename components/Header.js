import Image from "next/image";
import Logo from "../images/logo.png";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  MenuIcon,
} from "@heroicons/react/solid";
function Header() {
  return (
    <header className="sticky top-0 z-50 grid  grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src={Logo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle */}

      <div className="flex items-center md:border-2 rounded-full md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400"
        />
        <SearchIcon className="hidden h-8 md:inline-flex bg-red-400 text-white rounded-full p-2 cursor-pointer mx-auto md:mx-2" />
      </div>
      {/* right */}
      <div className="flex items-center space-x-2 justify-end text-gray-600">
        <p className="hidden md:inline">Become a Host</p>
        <GlobeAltIcon className="h-4" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-4" />
          <UserCircleIcon className="h-4" />
        </div>
      </div>
    </header>
  );
}

export default Header;

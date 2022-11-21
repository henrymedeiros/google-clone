import React, { useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = searchInputRef.current.value;
    if (!searchTerm) return;
    router.push(`/search?term=${searchTerm}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          alt="Google Logo"
          onClick={() => router.push("/")}
          className="cursor-pointer"
        ></Image>
        <form className="flex flex-grow max-w-3xl px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg justify-center space-x-3">
          <input
            ref={searchInputRef}
            value={router.query.term}
            type="text"
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-6 text-gray-500 transition duration-200 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          ></XIcon>
          <MicrophoneIcon className="h-6 mr-3 text-blue-500 border-l-2 pl-4 border-gray-300 hidden sm:inline"></MicrophoneIcon>
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex"></SearchIcon>
          <button hidden type="submit" onClick={handleSearch}></button>
        </form>
        <Avatar
          className={"ml-auto"}
          url={"https://avatars.githubusercontent.com/u/66380727?v=4"}
        ></Avatar>
      </div>
      {/* Header Options */}
      <HeaderOptions></HeaderOptions>
    </header>
  );
}

export default Header;

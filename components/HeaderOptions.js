import React from "react";
import HeaderOption from "./HeaderOption";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";

function HeaderOptions() {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
      {/* Left Section */}
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title={"All"} selected></HeaderOption>
        <HeaderOption Icon={PhotographIcon} title={"Images"}></HeaderOption>
        <HeaderOption Icon={PlayIcon} title={"Videos"}></HeaderOption>
        <HeaderOption Icon={NewspaperIcon} title={"News"}></HeaderOption>
        <HeaderOption Icon={MapIcon} title={"Maps"}></HeaderOption>
        <HeaderOption Icon={DotsVerticalIcon} title={"More"}></HeaderOption>
      </div>

      {/* Right Section */}
      <div className="flex space-x-4">
        <span className="link">Settings</span>
        <span className="link">Tools</span>
      </div>
    </div>
  );
}

export default HeaderOptions;

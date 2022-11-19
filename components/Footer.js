import React from "react";

export default function Footer() {
  return (
    <footer className=" divide-y-2 w-full bg-[#f2f2f2] ">
      <div className="px-8 py-3">
        <p className="text-[#70757a]">United States</p>
      </div>
      <div className="flex flex-wrap justify-evenly  px-8 py-3 lg:justify-between">
        <div className="space-x-8">
          <a href="" className="footer-link">
            About
          </a>
          <a href="" className="footer-link">
            Advertasing
          </a>
          <a href="" className="footer-link">
            Business
          </a>
          <a href="" className="footer-link">
            How the search works?
          </a>
        </div>
        <div className="space-x-8">
          <a href="" className="footer-link">
            Privacy
          </a>
          <a href="" className="footer-link">
            Terms
          </a>
          <a href="" className="footer-link">
            Settings
          </a>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import { useRouter } from "next/router";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

function PaginationButtons() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 0;
  return (
    <div className="flex max-w-lg justify-between mx-auto text-blue-700 mb-10">
      {startIndex >= 10 && (
        <Link
          href={`search?term=${router.query.term}&start=${startIndex - 10}`}
        >
          <div className="flex flex-col items-center cursor-pointer hover:underline">
            <ChevronLeftIcon className="h-5"></ChevronLeftIcon>
            <p>Previous</p>
          </div>
        </Link>
      )}
      <Link href={`search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex flex-col items-center cursor-pointer hover:underline">
          <ChevronRightIcon className="h-5"></ChevronRightIcon>
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default PaginationButtons;

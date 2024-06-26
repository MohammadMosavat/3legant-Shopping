"use client";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { ReactNode, useState } from "react";

const PopoverList = (props: {
  value: string;
  children: ReactNode;
  className?: string;
  mainLink: string;
}) => {
  const [openPopover, setOpenPopover] = useState(false);

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  return (
    <Popover open={openPopover} handler={setOpenPopover}>
      <PopoverHandler {...triggers}>
        <Link
          href={props.mainLink}
          className="font-semibold border-none text-black outline-none text-base  flex items-center capitalize gap-2 primary-font"
        >
          {props.value}
          <picture className="inline-block ">
            <img src="/headers/chevron-down.svg" alt="" />
          </picture>
        </Link>
      </PopoverHandler>
      <PopoverContent
        {...triggers}
        className={`z-50 border-none bg-glass outline-none ${props.className} w-[15rem] `}
      >
        <div className="flex  py-2 px-1.5 flex-col gap-1 w-full   rounded-lg ">
          {props.children}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverList;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";
import { Avatar } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useBreakPoint } from "../hooks/useBreakPoint";

export default function NavLinks({ onClickLink }: any) {
  const { sm, md, lg, xl, xxl } = useBreakPoint();
  const [user, setUser] = useState(false);
  const [openDropMenu, setOpenDropMenu] = useState(lg ? false : true);

  const pathname = usePathname();

  const links: any = [
    { id: 1, name: "HOME", href: "/" },
    {
      id: 2,
      name: "TOURNAMENT",
      href: "/tournament",
      altHref: "/tournament",
    },
    // tam thoi chua dung 
    // { id: 3, name: "COMMUNITY", href: "/community" },
    !user && {
      id: 4,
      name: "SIGNIN/SIGNUP",
      href: "/signup",
      altHref: "/signin",
    },
  ].filter(Boolean);
  return (
    <>
      {links.map((link: any) => (
        <Link
          key={link.id}
          href={link.href}
          className={clsx(
            "relative before:content-[''] before:absolute before:top-full before:w-0 before:h-0.5 before:left-0 before:bg-[#f8844a] hover:before:w-full before:duration-300",
            {
              "text-[#f8844a] before:w-full":
                pathname === link.href ||
                (link.altHref && pathname.startsWith(link.altHref)),
            }
          )}
          onClick={onClickLink}
        >
          <p>{link.name}</p>
        </Link>
      ))}
      {user && (
        <div className="flex flex-row gap-6 border-l pl-4 items-center text-base">
          <FontAwesomeIcon
            icon={faBell}
            className="size-6 cursor-pointer"
            title="notifications"
          />
          <div className="relative cursor-pointer">
            <div
              className="flex flex-row gap-3 items-center"
              onClick={() => setOpenDropMenu(!openDropMenu)}
            >
              <Avatar
                alt="user name"
                className="cursor-pointer "
                src="/image/carousel/Badminton.webp"
              />
              <p className="not-italic">user name</p>
            </div>
            {openDropMenu && (
              <ul className="py-2 text-base not-italic text-white flex flex-col absolute right-0 top-12 bg-[#323232] shadow-2xl">
                <Link
                  href={`/user/${"user-name"}`}
                  className="opacity-75 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Profile
                </Link>
                {/* tam thoi chua dung */}
                {/* <Link
                  href={"/user/#"}
                  className="opacity-75 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Messages
                </Link> */}
                <div className="opacity-75 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Sign out
                </div>
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
}

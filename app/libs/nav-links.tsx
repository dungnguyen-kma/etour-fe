"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavLinks({ onClickLink }: any) {
  const pathname = usePathname();
  const links = [
    { id: 1, name: "HOME", href: "/" },
    { id: 2, name: "TOURNAMENT", href: "/tournament" },
    { id: 3, name: "COMMUNITY", href: "/community" },
    { id: 4, name: "BRACKET GENERATOR", href: "/bracket-generator" },
    { id: 5, name: "SIGNIN/SIGNUP", href: "/signup" },
  ];
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={clsx(
            "relative before:content-[''] before:absolute before:top-full before:w-0 before:h-0.5 before:left-0 before:bg-[#f8844a] hover:before:w-full before:duration-300",
            { "text-[#f8844a] before:w-full": pathname === link.href }
          )}
          onClick={onClickLink}
        >
          <p>{link.name}</p>
        </Link>
      ))}
    </>
  );
}

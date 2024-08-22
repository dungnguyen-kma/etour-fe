"use client";

import Link from "next/link";
import NavLinks from "./nav-links";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { Hidden } from "@mui/material";
import { exit } from "process";

export default function GuestHeader() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleClickLink = () => {
    setIsNavVisible(false);
  };

  return (
    <div className="bg-[#484848] shadow-md h-14 lg:h-16 flex flex-row fixed top-0 w-full justify-between lg:py-3.5 py-3 z-20">
      <div className="min-w-[62px] max-w-80 md:w-80 lg:pl-12 lg:pr-4 md:pr-20 pl-4">
        <Link href="/" className="">
          <div className="md:bg-[url(https://assets.challonge.com/_next/static/media/logo-white-text.928c8884.svg)] bg-contain bg-no-repeat h-[40px] bg-[url(https://assets.challonge.com/_next/static/media/logo-symbol-only.8b0dbfc7.svg)]"></div>
        </Link>
      </div>
      <div
        className="px-4 text-white my-auto flex items-center"
        onClick={() => setIsNavVisible(!isNavVisible)}
      >
        <FontAwesomeIcon icon={faBars} className="size-6" />
      </div>
      <AnimatePresence>
        {isNavVisible && (
          <motion.div
            className="absolute top-14 right-0 flex flex-col items-end bg-black w-screen h-screen bg-opacity-40"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
              exit: { opacity: 0 },
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            onClick={() => setIsNavVisible(false)}
          >
            <motion.div
              className="w-fit h-screen bg-[#484848] flex flex-col items-end gap-6 text-white italic font-bold text-sm px-4"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { x: 100 },
                visible: { x: 0 },
                exit: { x: 100 },
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <NavLinks onClickLink={handleClickLink} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import Link from "next/link";
import NavLinks from "./nav-links";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useBreakPoint } from "../hooks/useBreakPoint";

export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const { sm, md, lg, xl, xxl } = useBreakPoint();

  useEffect(() => {
    console.log(lg);
    if (lg) {
      setIsNavVisible(true);
    } else {
      setIsNavVisible(false);
    }
  }, [lg]);

  return (
    <div className="bg-[#484848] shadow-md h-14 lg:h-16 flex flex-row fixed top-0 w-full justify-between lg:py-3.5 py-3 z-20 mb-24">
      <div className="min-w-[62px] max-w-80 md:w-80 lg:pl-12 lg:pr-4 md:pr-20 pl-4">
        <Link href="/" className="">
          <div className="md:bg-[url(https://assets.challonge.com/_next/static/media/logo-white-text.928c8884.svg)] bg-contain bg-no-repeat h-[40px] bg-[url(https://assets.challonge.com/_next/static/media/logo-symbol-only.8b0dbfc7.svg)]"></div>
        </Link>
      </div>
      {!lg && (
        <div
          className="px-4 text-white my-auto flex items-center"
          onClick={() => setIsNavVisible(!isNavVisible)}
        >
          <FontAwesomeIcon icon={faBars} className="size-6" />
        </div>
      )}
      <AnimatePresence>
        {isNavVisible && (
          <motion.div
            className="absolute top-14 right-0 flex flex-col items-end bg-black w-screen h-screen bg-opacity-40 lg:relative lg:w-auto lg:h-auto lg:flex-row lg:top-0 lg:items-center lg:bg-transparent lg:pr-12"
            initial={lg ? "null" : "hidden"}
            animate={lg ? "null" : "visible"}
            exit={lg ? "null" : "exit"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
              exit: { opacity: 0 },
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            onClick={() => !lg && setIsNavVisible(false)}
          >
            <motion.div
              className="w-fit h-screen bg-[#484848] flex flex-col items-end gap-6 text-white italic font-bold text-sm px-4 lg:px-0 lg:text-base lg:flex-row lg:items-center lg:h-auto"
              initial={lg ? "null" : "hidden"}
              animate={lg ? "null" : "visible"}
              exit={lg ? "null" : "exit"}
              variants={{
                hidden: { x: 100 },
                visible: { x: 0 },
                exit: { x: 100 },
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <NavLinks onClickLink={() => !lg && setIsNavVisible(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

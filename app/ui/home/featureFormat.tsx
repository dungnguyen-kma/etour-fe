"use client";

import clsx from "clsx";
import BasicFormat from "./BasicFormat";
import AdvancedFormat from "./AdvancedFormat";
import { useState } from "react";

export default function FeatureFormat() {
  const [selectedComponent, setSelectedComponent] =
    useState<any>("BasicFormat");

  const formatData = [
    {
      name: "BASIC FORMATS",
      componentKey: "BasicFormat",
      href: "#",
      component: <BasicFormat />,
    },
    {
      name: "ADVANCED FORMATS",
      componentKey: "AdvancedFormat",
      href: "#",
      component: <AdvancedFormat />,
    },
  ];

  return (
    <div className="w-full px-5 lg:px-20 max-w-[1600px] mx-auto">
      <div className="flex flex-col md:flex-row text-[#7b7b7b] font-bold mb-8 text-sm md:text-base">
        {formatData.map((item) => (
          <button
            key={item.name}
            className={clsx("px-6 py-1 italic", {
              "text-white cp-btn-polygon bg-gradient-to-r from-[#484848] to-[#6e6e6e]":
                selectedComponent === item.componentKey,
            })}
            onClick={(e) => {
              setSelectedComponent(item.componentKey);
            }}
          >
            {item.name}
          </button>
        ))}
      </div>
      {selectedComponent
        ? formatData.find((item) => item.componentKey === selectedComponent)
            ?.component
        : "Không có dữ liệu"}
    </div>
  );
}

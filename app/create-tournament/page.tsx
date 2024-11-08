"use client";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox, Datepicker, Dropdown } from "flowbite-react";

export default function CreateTournament() {
  return (
    <div className="gap-6 flex flex-col">
      <h2 className="text-2xl text-white italic font-bold relative after:absolute after:bottom-0 after:left-0 after:content-[' '] after:border-b-[#f8844a] after:border-b-2 after:w-36 ">
        Tournament Info
      </h2>

      <div className="flex justify-between">
        <label htmlFor="host" className="basis-56 text-white mx-0">
          host
        </label>
        <input
          type="text"
          id="host"
          className="block px-2.5 py-4 w-full text-sm text-white bg-[#2a2a2a] rounded-sm border border-[#2a2a2a] appearance-none hover:border-[#f3732966] focus:border-[#f37329e6] focus:outline-none"
          placeholder=" "
        />
      </div>
      <div className="flex justify-between">
        <label htmlFor="tourname" className="basis-56 text-white mx-0">
          tournament name
        </label>
        <input
          type="text"
          id="tourname"
          className="block px-2.5 py-4 w-full text-sm text-white bg-[#2a2a2a] rounded-sm border border-[#2a2a2a] appearance-none hover:border-[#f3732966] focus:border-[#f37329e6] focus:outline-none"
          placeholder=" "
        />
      </div>
      <div className="flex justify-between">
        <label htmlFor="starttime" className="basis-56 text-white mx-0">
          start time
        </label>
        <div className="flex flex-col gap-3 w-full">
          <Datepicker className="w-full"></Datepicker>
          <div className="flex flex-row gap-3">
            <Checkbox
              id="require-checkin"
              className="my-auto"
              theme={{
                root: {
                  base: "h-4 w-4 rounded border border-gray-600 bg-[#2a2a2a] focus:ring-0 focus:ring-offset-0",
                  color: {
                    default:
                      "text-[#f37329] bg-[#2a2a2a] border-gray-600 checked:border-transparent",
                  },
                },
              }}
            />
            <label htmlFor="require-checkin" className="text-base text-white">
              Require participants to check in
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <label htmlFor="desc" className="basis-56 text-white mx-0">
          description
        </label>
        <textarea
          id="desc"
          rows={4}
          className="block px-2.5 py-4 w-full text-sm text-white bg-[#2a2a2a] rounded-sm border border-[#2a2a2a] appearance-none hover:border-[#f3732966] focus:border-[#f37329e6] focus:outline-none"
        ></textarea>
      </div>
      <div className="flex justify-between">
        <label htmlFor="gamename" className="basis-56 text-white mx-0">
          game
        </label>
        <input
          type="text"
          id="gamename"
          className="block px-2.5 py-4 w-full text-sm text-white bg-[#2a2a2a] rounded-sm border border-[#2a2a2a] appearance-none hover:border-[#f3732966] focus:border-[#f37329e6] focus:outline-none"
          placeholder=" "
        />
      </div>
      <div className="flex justify-between">
        <label htmlFor="format" className="basis-56 text-white mx-0">
          format
        </label>
        <Dropdown
          label="Single elimination"
          renderTrigger={() => (
            <button className="w-full text-left px-2.5 py-4 text-sm text-white bg-[#2a2a2a] rounded-sm border border-[#2a2a2a] hover:border-[#f3732966] focus:border-[#f37329e6] focus:outline-none flex justify-between items-center">
              <span>Single stage</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
          )}
        >
          <Dropdown.Item>Single Stage</Dropdown.Item>
          <Dropdown.Item>Two stage</Dropdown.Item>
        </Dropdown>
      </div>
      <div className="flex justify-between">
        <label className="basis-56 text-white mx-0">format</label>
        <Dropdown
          label="Single elimination"
          renderTrigger={() => (
            <button className="w-full text-left px-2.5 py-4 text-sm text-white bg-[#2a2a2a] rounded-sm border border-[#2a2a2a] hover:border-[#f3732966] focus:border-[#f37329e6] focus:outline-none flex justify-between items-center">
              <span>Single elimination</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
          )}
        >
          <Dropdown.Item>Single elimination</Dropdown.Item>
          <Dropdown.Item>Double elimination</Dropdown.Item>
          <Dropdown.Item>Round robin</Dropdown.Item>
          <Dropdown.Item>Swiss</Dropdown.Item>
        </Dropdown>
      </div>
      <div className="flex justify-between">
        <label htmlFor="participants" className="basis-56 text-white mx-0">
          participants
        </label>
        <div className="flex flex-col w-full gap-3">
          <input
            type="text"
            id="participants"
            className="block px-2.5 py-4 w-full text-sm text-white bg-[#2a2a2a] rounded-sm border border-[#2a2a2a] appearance-none hover:border-[#f3732966] focus:border-[#f37329e6] focus:outline-none"
            placeholder=" "
          />
          <div className="flex flex-row gap-3">
            <Checkbox
              id="register-as-team"
              className="my-auto"
              theme={{
                root: {
                  base: "h-4 w-4 rounded border border-gray-600 bg-[#2a2a2a] focus:ring-0 focus:ring-offset-0",
                  color: {
                    default:
                      "text-[#f37329] bg-[#2a2a2a] border-gray-600 checked:border-transparent",
                  },
                },
              }}
            />
            <label htmlFor="register-as-team" className="text-base text-white">
              Require participants to register as a team
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

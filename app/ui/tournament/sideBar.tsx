export default function SideBar() {
  return (
    <>
      <aside
        id="default-sidebar"
        className=" w-full transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto ">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg hover:bg-[#f8844a] group"
              >
                <span className="ms-3">All</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg hover:bg-[#f8844a] group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Upcoming</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg hover:bg-[#f8844a] group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Ongoing</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg hover:bg-[#f8844a] group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Completed</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

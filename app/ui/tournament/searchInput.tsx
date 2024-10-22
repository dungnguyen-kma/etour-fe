import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchInput() {
  return (
    <form className="max-w-md mx-auto">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <FontAwesomeIcon icon={faSearch} className="size-4 text-gray-500" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block p-4 ps-10 w-full text-sm text-white bg-[#363636] rounded-sm border border-[#2a2a2a] appearance-none hover:border-[#f3732966] focus:border-[#f37329e6] focus:outline-none peer"
          placeholder="Search tournament...."
          required
        />
        <button
          type="submit"
          className="text-white bg-[#f8844a] hover:bg-[#f3752c] absolute end-2.5 bottom-2.5 focus:ring-4  font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
}

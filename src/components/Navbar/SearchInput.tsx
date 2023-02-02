import { MagnifyingGlassIcon } from '@heroicons//react/20/solid';

interface SearchInputProps {
  /* user */
}

export const SearchInput = () => {
  return (
    <div className="grow">
      <div className="relative rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-500"
            aria-hidden="true"
          />
        </div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Search Reddit"
          className="h-9 block w-full rounded-full border bg-[#F6F7F8] pl-10 text-sm font-light placeholder:text-gray-500 hover:border-blue-500 hover:bg-white focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

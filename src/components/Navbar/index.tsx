import Image from 'next/image';

import { SearchInput } from './SearchInput';

export const Navbar = () => {
  return (
    <div className="flex items-center h-11 bg-white px-1.5 py-3">
      <div className="flex items-center">
        <Image
          src="/images/redditFace.svg"
          alt="reddit logo face"
          width={32}
          height={32}
        />
        <Image
          src="/images/redditText.svg"
          alt="reddit logo text"
          width={57}
          height={18}
          className="hidden md:block"
        />
      </div>
      <SearchInput />
      {/* <Directory /> */}
      {/* <RightContent /> */}
    </div>
  );
};

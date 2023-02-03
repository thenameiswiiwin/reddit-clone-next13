import Image from 'next/image';
import Link from 'next/link';

import { RightContent } from './RightContent';
import { SearchInput } from './SearchInput';

export const Navbar = () => {
  return (
    <div className="flex h-11 items-center justify-between gap-5 bg-white px-5 py-6">
      <Link href="/">
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
      </Link>
      {/* <Directory /> */}
      <SearchInput />
      <RightContent />
    </div>
  );
};

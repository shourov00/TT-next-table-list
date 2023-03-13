import React from 'react';
import Image from "next/image";

const Header = () => {

  return (
    <div className="bg-black-one h-[90px] flex items-center justify-center md:justify-start w-full px-8 md:px-30">
      <a href="/">
        <Image
          className="ml-2"
          src="/assets/images/logo.svg"
          alt="Vercel Logo"
          width={108}
          height={40}
        />
      </a>
    </div>
  );
};

export default Header;

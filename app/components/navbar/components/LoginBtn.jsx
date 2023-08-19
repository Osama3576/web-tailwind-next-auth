'use client';

import Link from 'next/link';

function LoginBtn({ text }) {
  return (
    <>
      <Link
        href="/login"
        className="hidden transition-all duration-500 text-[#bdbcff] font-normal px-[24px] py-[12px] hover:bg-cyan-900 border-2 border-cyan-800 rounded-full hover:cursor-pointer lg:block "
      >
        {text}
      </Link>
    </>
  );
}

export default LoginBtn;

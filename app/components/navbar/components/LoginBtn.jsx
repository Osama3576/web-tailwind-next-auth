'use client';

import Link from 'next/link';

function LoginBtn({ text }) {
  return (
    <>
      <Link
        href="/login"
        className="hidden font-semibold hover:cursor-pointer lg:block "
      >
        {text} &rarr;
      </Link>
    </>
  );
}

export default LoginBtn;

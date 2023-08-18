'use client';

import Link from 'next/link';

function Button({ text, width, type }) {
  return (
    <button
      type={type}
      className={`${
        width ? 'w-full' : null
      } p-2 text-center text-white transition duration-500 bg-indigo-600 rounded hover:bg-opacity-80`}
    >
      {text}
    </button>
  );
}

export default Button;

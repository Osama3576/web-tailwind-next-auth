import Link from 'next/link';

function LinkEle() {
  return (
    <div className="hidden md:w-full md:text-center md:mt-36 md:block">
      <Link
        href="#"
        className="p-2  text-sm border-blue-300 rounded-full border-3 text-[#f3f2ff] hover:border-blue-400 transition-all duration-500"
      >
        Announcing Our next round of funding. &nbsp;
        <span className="font-semibold text-indigo-600">
          Read more &rarr;
        </span>
      </Link>
    </div>
  );
}

export default LinkEle;

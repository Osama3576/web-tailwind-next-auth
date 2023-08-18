import Link from 'next/link';

function LinkEle() {
  return (
    <div className="hidden md:w-full md:text-center md:mt-36 md:block">
      <Link
        href="#"
        className="p-2 text-sm border rounded-full border-slate-400 hover:border-slate-600"
      >
        Announcing Our next round of funding.
        <span className="font-semibold text-indigo-600">
          Read more &rarr;
        </span>
      </Link>
    </div>
  );
}

export default LinkEle;

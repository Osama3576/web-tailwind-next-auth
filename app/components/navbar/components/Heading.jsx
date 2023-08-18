import Link from 'next/link';

function Heading() {
  return (
    <div className="p-4 mt-4 text-center sm:p-14">
      <div className="">
        <h1 className="text-4xl font-bold sm:text-6xl">
          Data to enrich your <br></br>online business
        </h1>
        <p className="mt-10 text-slate-800">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
          qui lorem <br></br> cupidatat commodo. Elit sunt amet fugiat
          veniam occaecat fugiat aliqua.
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 mt-10 font-semibold">
        <Link
          href="#"
          className="p-2 text-white transition duration-500 bg-indigo-600 rounded hover:bg-opacity-80"
        >
          Get started
        </Link>
        <Link href="#">Learn more &rarr;</Link>
      </div>
    </div>
  );
}

export default Heading;

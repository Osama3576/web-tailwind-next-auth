'use client';
import Link from 'next/link';
import { TiTick } from 'react-icons/ti';
function Cards() {
  return (
    <div className="grid  justify-items-center items-center  grid-cols-1 gap-4 lg:gap-0  lg:grid-cols-3  py-[3rem] justify-center">
      <div className="w-[23rem] lg:w-auto p-12 border border-fuchsia-200 rounded-xl lg:rounded">
        <p className="mb-5 font-semibold">Freelancer</p>
        <p className="mb-5">
          The essentials to provide your best work for clients.
        </p>
        <p className="mb-5">
          <span className="text-4xl font-semibold">$24</span>
          <span>/month</span>
        </p>
        <div className="flex gap-8">
          <TiTick size={24} className="text-indigo-600" />
          <span>5 products</span>
        </div>

        <div className="flex gap-8">
          <TiTick size={24} className="text-indigo-600" />
          <span>Up to 1,000 subscribers</span>
        </div>

        <div className="flex gap-8">
          <TiTick size={24} className="text-indigo-600" />
          <span>Basic analytics</span>
        </div>

        <div className="flex gap-8">
          <TiTick size={24} className="text-indigo-600" />
          <span>48-hour support response time</span>
        </div>

        <div className="flex gap-8">
          <TiTick size={24} className="text-indigo-600" />
          <span>Marketing automations</span>
        </div>

        <div className="py-1 text-center border border-indigo-400 rounded mt-7">
          <Link href="#">Buy plan</Link>
        </div>
      </div>

      <div className="w-[23rem] lg:w-auto p-12 border border-fuchsia-200 rounded-xl lg:rounded ">
        <div className="flex items-center justify-between">
          <p className="mb-5 font-semibold ">Startup</p>
          <p className="text-[10px] text-indigo-600 mb-5   rounded-full p-1 bg-indigo-50">
            most popular
          </p>
        </div>
        <p className="mb-5">
          A plan that scales with your rapidly growing business.
        </p>
        <p className="mb-5">
          <span className="text-4xl font-semibold">$32</span>
          <span>/month</span>
        </p>
        <div className="flex gap-8">
          <TiTick size={24} className="text-indigo-600" />
          <span>25 products</span>
        </div>

        <div className="flex gap-8">
          <TiTick size={24} className="text-indigo-600" />
          <span>Up to 10,000 subscribers</span>
        </div>

        <div className="flex gap-8">
          <TiTick size={24} className="text-indigo-600" />
          <span>Advanced analytics</span>
        </div>

        <div className="flex gap-8">
          <TiTick size={24} className="text-indigo-600" />
          <span>24-hour support response time</span>
        </div>
        <div className="flex gap-8">
          <TiTick size={24} className="text-indigo-600" />
          <span>Marketing automations</span>
        </div>

        <div className="py-1 text-center text-white bg-indigo-600 border border-indigo-400 rounded mt-7">
          <Link href="#">Buy plan</Link>
        </div>
      </div>

      <div className="w-[23rem] lg:w-auto p-12 border border-fuchsia-200 rounded-xl lg:rounded">
        <p className="mb-5 font-semibold">Enterprise</p>
        <p className="mb-5">
          The essentials to provide your best work for clients.
        </p>
        <p className="mb-5">
          <span className="text-4xl font-semibold">$48</span>
          <span>/month</span>
        </p>
        <div className="flex gap-8">
          <TiTick size={24} className="text-indigo-600" />
          <span>Unlimited products</span>
        </div>

        <div className="flex gap-8">
          <TiTick size={24} className="text-indigo-600" />
          <span>Unlimited subscribers</span>
        </div>

        <div className="flex gap-8">
          <TiTick size={24} className="text-indigo-600" />
          <span>Advanced analytics</span>
        </div>

        <div className="flex gap-8">
          <TiTick size={24} className="text-indigo-600" />
          <span>1-hour support response time</span>
        </div>
        <div className="flex gap-8">
          <TiTick size={24} className="text-indigo-600" />
          <span>Marketing automations</span>
        </div>

        <div className="py-1 text-center border border-indigo-400 rounded mt-7">
          <Link href="#">Buy plan</Link>
        </div>
      </div>
    </div>
  );
}

export default Cards;

import {
  BsFillCloudArrowUpFill,
  BsFingerprint,
} from 'react-icons/bs';
import { BiLockAlt, BiCommand } from 'react-icons/bi';

import Logo from './Logo';
function Items() {
  return (
    <>
      <div className="flex">
        <div className="bg-indigo-600 p-[0.3rem] rounded-md w-[2rem] h-[2rem] text-center flex items-center mr-4">
          <Logo Logo={BsFillCloudArrowUpFill} />
        </div>
        <div>
          <h1 className="mb-2 text-xl font-semibold">
            Push to deploy
          </h1>
          <p className="leading-6 text-gray-600">
            Morbi viverra dui mi arcu sed. Tellus semper adipiscing
            suspendisse semper morbi. Odio urna massa nunc massa.
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="bg-indigo-600 p-[0.3rem] rounded-md w-[2rem] h-[2rem] text-center flex items-center mr-4">
          <Logo Logo={BiLockAlt} />
        </div>
        <div>
          <h1 className="mb-2 text-xl font-semibold">
            SSL certificates
          </h1>
          <p className="leading-6 text-gray-600">
            Sit quis amet rutrum tellus ullamcorper ultricies libero
            dolor eget. Sem sodales gravida quam turpis enim lacus
            amet.
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="bg-indigo-600 p-[0.3rem] rounded-md w-[2rem] h-[2rem] text-center flex items-center mr-4">
          <Logo Logo={BiCommand} />
        </div>
        <div>
          <h1 className="mb-2 text-xl font-semibold">
            Simple queues
          </h1>
          <p className="leading-6 text-gray-600">
            Morbi viverra dui mi arcu sed. Tellus semper adipiscing
            suspendisse semper morbi. Odio urna massa nunc massa.
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="bg-indigo-600 p-[0.3rem] rounded-md w-[2rem] h-[2rem] text-center flex items-center mr-4">
          <Logo Logo={BsFingerprint} />
        </div>
        <div>
          <h1 className="mb-2 text-xl font-semibold">
            Advanced security
          </h1>
          <p className="leading-6 text-gray-600">
            Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt
            mattis aliquet hac quis. Id hac maecenas ac donec pharetra
            eget.
          </p>
        </div>
      </div>
    </>
  );
}

export default Items;

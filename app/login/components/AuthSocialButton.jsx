'use client';
// import { IconType } from 'react-icons';

function AuthSocialButton({ icon, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex justify-center w-full px-4 py-2 text-gray-500 bg-white rounded-md shadow-sm hover:outline-1 hover:outline-indigo-600 hover:bg-gray-50 "
    >
      {icon}
    </button>
  );
}

export default AuthSocialButton;

'use client';
import clsx from 'clsx';
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';
function Input({
  label,
  type,

  id,
  register,
  errors,
  disabled,
  required,
}) {
  return (
    <div className="w-full mb-4">
      <label
        className="block mb-2 font-semibold text-slate-50"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className={clsx(
          `pl-2 form-input block w-full rounded-md border-0 py-1.5 bg-slate-800 text-slate-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset  focus:ring-indigo-600 sm:text-sm sm:leading-6 `,
          errors[id] && 'focus:ring-rose-500',
          disabled && 'opacity-50 cursor-default'
        )}
        type={type}
        id={id}
        name={id}
        disabled={disabled}
        {...register(id, { required })}
      />
    </div>
  );
}

export default Input;
// className="w-full p-2 rounded-lg text-slate-50 bg-slate-800 focus:outline-indigo-600"

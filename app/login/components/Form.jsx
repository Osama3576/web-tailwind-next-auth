'use client';

import LogoTail from '@/app/components/LogoTail';
import Input from './Input';

import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import AuthSocialButton from './AuthSocialButton';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import axios from 'axios';
function Form() {
  const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState('Login');
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/protected');
    }
  }, [session?.status, router]);

  // const toggleVariant = useCallback(() => {
  //   if (variant === 'Login') setVariant('Register');
  //   if (variant === 'Register') setVariant('Login');
  // }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
  setIsLoading(true);
  if (variant === 'Register') {
    axios
      .post('/api/register', data)
      .then(() => {
        toast.success('successfully registered');
        return signIn('credentials', data);
      })
      .catch(() => toast.error('Please fill the form carefully'))
      .finally(() => setIsLoading(false));
  }
  if (variant === 'Login') {
    signIn('credentials', {
      ...data,
      redirect: false,
    })
      .then((callback) => {
        if (callback?.error) toast.error('invalid Credentials');
        if (callback?.ok && !callback?.error)
          toast.success('Sucessfully logged in');
        router.push('/protected');
      })
      .finally(() => setIsLoading(false));
  }
};

  const socialAction = action => {
    setIsLoading(true);
    signIn(action, { redirect: false })
      .then(callback => {
        if (callback?.error) toast.error('invalid Credentials');
        if (callback?.ok && !callback?.error)
          toast.success('Sucessfully logged in');
      })
      .finally(() => setIsLoading(false));
  };

  const changeVariant = () => {
    if (variant === 'Login') {
      setVariant('Register');
    } else {
      setVariant('Login');
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-[27rem] mx-auto text-slate-50 px-2">
      <LogoTail />
      <div>
        <h1 className="mt-4 mb-4 text-2xl font-semibold">
          Sign in to your account
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full"
      >
        {variant === 'Register' ? (
          <Input
            label="Name"
            type="text"
            id="name"
            register={register}
            errors={errors}
            disabled={loading}
          />
        ) : null}
        <Input
          label="Email address"
          type="email"
          id="email"
          register={register}
          errors={errors}
          disabled={loading}
        />
        <Input
          label="Password"
          type="password"
          id="password"
          register={register}
          errors={errors}
          disabled={loading}
        />

        <button
          disabled={loading}
          type="submit"
          className={` w-full p-2 text-center text-white transition duration-500 bg-indigo-600 rounded hover:bg-opacity-80`}
        >
          {variant === 'Register' ? 'Register' : 'Sign in'}
        </button>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="relative flex justify-center text-sm">
            <span className="px-2 text-slate-50">
              or continue with
            </span>
          </div>
        </div>

        <div className="flex gap-2 mt-6">
          <AuthSocialButton
            icon={<BsGithub />}
            onClick={() => socialAction('github')}
          />
          <AuthSocialButton
            icon={<BsGoogle />}
            onClick={() => socialAction('google')}
          />
        </div>
      </div>

      <div className="flex justify-center gap-2 px-2 mt-6 text-sm text-gray-500 ">
        <div>
          {variant === 'Login'
            ? 'New to messenger?'
            : ' Already have an Account?'}
        </div>
        <div
          onClick={changeVariant}
          className="underline transition-all duration-500 cursor-pointer hover:text-slate-100"
        >
          {variant === 'Login' ? 'Create an account' : 'Login'}
        </div>
      </div>
    </div>
  );
}

export default Form;

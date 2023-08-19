'use client';

import { toast } from 'react-hot-toast';
import Button from '../Button';
import { useState } from 'react';

function NewsLetter() {
  const [loading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Email successfully submitted
        toast.success('Email successfully submitted');
      } else {
        // Handle error case
        toast.error('subscription failed');
      }

      // Clear the email input after submission
      setEmail('');
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="section grid justify-items-start lg:justify-items-center grid-cols-1 p-4 gap-8 lg:p-[6rem] bg-fuchsia-100 md:grid-cols-2">
      <div>
        <h1 className="text-2xl font-semibold lg:text-4xl">
          Want product news and updates?
        </h1>
        <h1 className="text-2xl font-semibold lg:text-4xl">
          Sign up for newsLetter.
        </h1>
      </div>
      <div className="h-[9rem]">
        <form onSubmit={handleSubmit} className="flex gap-5 mb-4">
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="rounded-md p-[0.5rem] w-full focus:outline-indigo-600 "
            type="email"
            placeholder="Enter your email"
          />
          <Button type="submit" text="Subscribe" />
        </form>
        <p>
          we care about your data. Read our{' '}
          <span className="text-indigo-600">privacy policy.</span>
        </p>
      </div>
    </div>
  );
}

export default NewsLetter;

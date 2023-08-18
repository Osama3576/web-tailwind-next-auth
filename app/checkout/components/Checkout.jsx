'use client';
import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/navigation';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
export function PreviewPage() {
  //   const router = useRouter();
  //   console.log(router);
  //   const { success, canceled } = router.query;
  //   useEffect(() => {
  //     // Check to see if this is a redirect back from Checkout
  //     // const query = new URLSearchParams(window.location.search);
  //     if (success) {
  //       console.log(
  //         'Order placed! You will receive an email confirmation.'
  //       );
  //     }

  //     if (canceled) {
  //       console.log(
  //         'Order canceled -- continue to shop around and checkout when you’re ready.'
  //       );
  //     }
  //   }, [success, canceled]);
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('/api/checkout_sessions', {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json',
        // },
        // body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Email successfully submitted
        toast.success('Email successfully submitted');
      } else {
        // Handle error case
        toast.error('subscription failed');
      }

      // Clear the email input after submission
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section>
        <button type="submit" role="link">
          Checkout
        </button>
      </section>
      <style jsx>
        {`
          section {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            width: 400px;
            height: 112px;
            border-radius: 6px;
            justify-content: space-between;
          }
          button {
            height: 36px;
            background: #556cd6;
            border-radius: 4px;
            color: white;
            border: 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </form>
  );
}

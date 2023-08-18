// pages/api/submit-email.js
import prisma from '@/app/libs/prismadb';

import { NextResponse } from 'next/server';
export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;
    if (!email) {
      return new NextResponse('Missing info', { status: 400 });
    }

    const userEmail = await prisma.subscriber.create({
      data: {
        email,
      },
    });
    return NextResponse.json(userEmail);
  } catch (error) {
    console.log(error, 'Registration error');
    return new NextResponse('Internal error', { status: 500 });
  }
}

// export async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { email } = req.body;

//     try {
//       const newEmail = await prisma.subscriber.create({
//         data: {
//           email,
//         },
//       });
//       res.status(200).json(newEmail);
//     } catch (error) {
//       res
//         .status(500)
//         .json({ error: 'An error occurred while saving the email.' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }

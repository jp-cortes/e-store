import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: NextRequest, res: NextResponse) {
  const body = req.body;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        body 
        // `query { 
          // categories { 
          //   id 
          //   name
          //   image 
          // } 
          // products { 
          //   id 
          //   name 
          //   image 
          //   description 
          //   categoryId 
          //   category { 
          //     name 
          //   } 
          // }`
        // }
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();
    return NextResponse.json({ data: data })
  
  } catch (error) {
    console.error('Error fetching products:', error);
    NextResponse.json({ message: 'Internal Server Error' });
  }
}

import { NextResponse } from 'next/server'
import { endPoints } from '../../../services/queries/endPoints';
 


export async function GET() {
  const res = await fetch(`${endPoints.products.allProducts}`);
  const data = await res.json();
 
  return NextResponse.json({ data });
}
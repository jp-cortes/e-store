import { NextResponse } from 'next/server'
 
const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

export async function GET() {
  const res = await fetch(`${API}/api/${VERSION}/products`)
  const data = await res.json()
 
  return NextResponse.json({ data })
}
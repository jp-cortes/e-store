import { NextResponse } from 'next/server'
 
const {NEXT_PUBLIC_API_URL, NEXT_PUBLIC_API_VERSION} = process.env;

const API = NEXT_PUBLIC_API_URL;
const VERSION = NEXT_PUBLIC_API_VERSION;

export async function GET() {
  const res = await fetch(`${API}/api/${VERSION}/products`)
  const data = await res.json()
 
  return NextResponse.json({ data })
}
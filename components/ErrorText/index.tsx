'use client'
import { ReactNode } from 'react';


export function ErrorText({ children }: { children: ReactNode }) {
  return (
    <>{children && <p className='text-xs text-red-600 pt-1'>{children}</p>}</>
  )
}
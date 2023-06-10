import { Navbar } from '../components/Navbar';
import { ReactNode, Suspense } from 'react';
import { Inter } from 'next/font/google'
import './globals.css';


export const metadata = {
  title: 'E-store',
  description: '',
};


const inter = Inter({   
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});


export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-black">
        <Navbar />
        <Suspense>
          <main className='mt-10 flex items-center'>{children}</main>
        </Suspense>
      </body>
    </html>
  );
}

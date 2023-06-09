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
      <body className="bg-white text-black selection:bg-teal-300 dark:bg-black dark:text-white dark:selection:bg-fuchsia-600 dark:selection:text-white">
        <Navbar />
        <Suspense>
          <main>{children}</main>
        </Suspense>
      </body>
    </html>
  );
}

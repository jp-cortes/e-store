import { Navbar } from '../components/Navbar';
import { ReactNode, Suspense } from 'react';
import { Inter } from 'next/font/google'
import { ShoppingCartProvider } from '../store/Cart';
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
        <ShoppingCartProvider>
          <Navbar />
          <Suspense>
            <main className='mt-10 grid items-center'>{children}</main>
          </Suspense>
        </ShoppingCartProvider>
      </body>
    </html>
  );
}

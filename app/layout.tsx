import { ReactNode, Suspense } from 'react';
import { Navbar } from '../components/Navbar';
import { ShoppingCartProvider } from '../store/Cart';
import { Footer } from '../components/Footer';
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
       
         <ShoppingCartProvider>
          <Navbar />
         
          <Suspense>
            <main className='mt-[68px] grid items-center'>{children}</main>
          </Suspense>
          <Footer/>
         </ShoppingCartProvider>
        
      </body>
    </html>
  );
}

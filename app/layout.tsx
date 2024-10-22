import type { Metadata } from 'next';
import './globals.css';
import Header from './ui/header';
import { Inter } from 'next/font/google';
import { description, fullname } from './data/base';

const interFont = Inter({ subsets: ['latin'], display: 'swap' });
export const metadata: Metadata = {
  title: {
    default: fullname,
    template: `${fullname} | %s`,
  },
  description: description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark' data-theme='dark'>
      <body className={`${interFont.className} transition duration-500`}>
        <div className='container mx-auto max-w-5xl px-2 pb-10'>
          <Header />
          <div className='mt-5'>{children}</div>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './css/globals.css';
import './css/font-awesome.min.css';
import '@/app/css/github-dark.min.css';
import Header from './ui/header';
import { Inter } from 'next/font/google';
import { Saira_Stencil_One } from 'next/font/google';
import { fullname, description } from './lib/loadBase';
import nav from './lib/loadNav';
const fontBody = Inter({ subsets: ['latin'], display: 'swap' });
const fontTitle = Saira_Stencil_One({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-var-title',
});
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
      <body
        className={`${fontBody.className} ${fontTitle.variable} transition duration-500`}
      >
        <div className='container mx-auto max-w-5xl px-5 pb-10'>
          <Header nav={nav} />
          <div className='mt-5'>{children}</div>
        </div>
      </body>
    </html>
  );
}

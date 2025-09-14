import { Nunito } from 'next/font/google';
import Page from './page';
import './globals.css';
import { Header, Categories } from '@/components/shared';
const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});
export const metadata = {
  title: 'Pizzarista 3.0',
  description: 'Delicious pizza made with love',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={nunito.variable} lang="en">
      <body className={nunito.className}>
        <main className="min-h-screen">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}

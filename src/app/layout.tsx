import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nagoya Event Portal',
  description: 'Nagoya Event Portal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className="w-full border-b bg-white">
          <div className="flex h-16 max-w-3xl items-center px-4">
            <h1 className="text-xl font-bold text-slate-900">Nagoya Event Portal</h1>
          </div>
        </header>
        <main className="block w-full max-w-3xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}

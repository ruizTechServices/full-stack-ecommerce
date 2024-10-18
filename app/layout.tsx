import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ClerkProviderWithChildren from '@/components/ClerkProviderWithChildren';
import { ThemeProvider } from '@/components/theme-provider';
import { CartProvider } from '@/contexts/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-commerce Template',
  description: 'A comprehensive, production-ready full-stack e-commerce template',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <ClerkProviderWithChildren>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <CartProvider>
              <Header />
              <main className="min-h-screen">{children}</main>
              <Footer />
            </CartProvider>
          </ThemeProvider>
        </ClerkProviderWithChildren>
      </body>
    </html>
  );
}
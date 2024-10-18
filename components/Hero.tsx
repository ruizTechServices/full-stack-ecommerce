import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="gradient-bg text-white py-20 sm:py-32 rounded-lg shadow-lg mb-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">Welcome to Our E-commerce Store</h1>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">Discover amazing products at unbeatable prices</p>
        <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-100 transition-colors duration-300">
          <Link href="/products">Shop Now</Link>
        </Button>
      </div>
    </section>
  );
}
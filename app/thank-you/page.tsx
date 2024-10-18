import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ThankYouPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Thank You for Your Order!</h1>
      <p className="text-xl mb-8">Your order has been successfully placed. We'll send you an email with the order details shortly.</p>
      <Button asChild>
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  );
}
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CartPage() {
  // This is a placeholder. In a real application, you'd fetch the cart items from your state management solution or API.
  const cartItems = [
    { id: 1, name: 'Product 1', price: 19.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 29.99, quantity: 1 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.id} className="py-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <Button asChild className="mt-4">
              <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
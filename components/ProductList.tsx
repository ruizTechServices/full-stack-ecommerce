import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type ProductListProps = {
  products: Product[];
};

export default function ProductList({ products }: ProductListProps) {
  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="flex flex-col h-full transition-transform duration-300 hover:scale-105">
          <CardHeader className="p-0">
            <div className="relative h-48 sm:h-56">
              {product.image ? (
                <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="rounded-t-lg" />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">No Image</div>
              )}
            </div>
          </CardHeader>
          <CardContent className="flex-grow p-4">
            <CardTitle className="mb-2">{product.name}</CardTitle>
            <p className="text-lg font-semibold">${product.price?.toFixed(2) || 'N/A'}</p>
          </CardContent>
          <CardFooter className="p-4">
            <Button asChild className="w-full">
              <Link href={`/products/${product.id}`}>View Details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
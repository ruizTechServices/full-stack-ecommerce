import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import ProductList from '@/components/ProductList';

const categories = [
  { id: 1, name: 'Electronics', slug: 'electronics' },
  { id: 2, name: 'Clothing', slug: 'clothing' },
  { id: 3, name: 'Home & Kitchen', slug: 'home-kitchen' },
  { id: 4, name: 'Books', slug: 'books' },
];

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((c) => c.slug === params.slug);

  if (!category) {
    notFound();
  }

  const { data: products } = await supabase
    .from('products')
    .select('*')
    .eq('category', category.name);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{category.name}</h1>
      <ProductList products={products || []} />
    </div>
  );
}
import ProductList from '@/components/ProductList';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import { supabase, handleSupabaseError } from '@/lib/supabase';

async function getProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .limit(8);  // Limit to 8 products for the home page

  if (error) {
    handleSupabaseError(error);
    return [];
  }

  return data || [];
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4">
      <Hero />
      <FeaturedProducts />
      <h2 className="text-2xl font-bold mb-4">Latest Products</h2>
      {products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <p>No products available. Please check the database connection.</p>
      )}
    </div>
  );
}
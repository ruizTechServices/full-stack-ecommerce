import { supabase } from '@/lib/supabase';
import ProductList from '@/components/ProductList';

async function getDeals() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('on_sale', true)
    .order('price', { ascending: true });

  if (error) {
    console.error('Error fetching deals:', error);
    return [];
  }

  return data;
}

export default async function DealsPage() {
  const deals = await getDeals();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Special Deals</h1>
      {deals.length > 0 ? (
        <ProductList products={deals} />
      ) : (
        <p>No special deals available at the moment. Check back soon!</p>
      )}
    </div>
  );
}
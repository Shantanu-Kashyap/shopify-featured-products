import ProductCard from './ProductCard'

export default function FeaturedSection({ featuredProducts, featuredIds, onToggle }) {
  if (featuredProducts.length === 0) {
    return (
      <div className="mb-10 bg-yellow-50 border-2 border-dashed border-yellow-300 rounded-2xl p-8 text-center">
        <p className="text-yellow-500 text-lg font-semibold">No featured products yet</p>
        <p className="text-gray-400 text-sm mt-1">Click "Mark as Featured" on any product below to add it here.</p>
      </div>
    )
  }

  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">★</span>
        <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
        <span className="ml-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
          {featuredProducts.length}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            isFeatured={featuredIds.has(product.id)}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  )
}
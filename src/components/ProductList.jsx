import ProductCard from './ProductCard'

export default function ProductList({ products, featuredIds, onToggle }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <span className="text-xl sm:text-2xl">🛍️</span>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">All Products</h2>
        <span className="ml-2 bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full">
          {products.length}
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
        {products.map(product => (
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
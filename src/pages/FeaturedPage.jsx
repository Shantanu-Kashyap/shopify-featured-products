import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

export default function FeaturedPage({ featuredProducts, featuredIds, onToggle }) {
  const navigate = useNavigate()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-2">
            ★ Featured Products
          </h1>
          <p className="text-gray-500 mt-1 text-sm">These products are highlighted in your store.</p>
        </div>
        <span className="self-start sm:self-auto bg-yellow-400 text-yellow-900 font-bold px-4 py-2 rounded-xl text-sm whitespace-nowrap">
          {featuredProducts.length} Featured
        </span>
      </div>

      {featuredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 gap-5 bg-white rounded-2xl border-2 border-dashed border-yellow-300 px-4 text-center">
          <span className="text-5xl sm:text-6xl">★</span>
          <p className="text-lg sm:text-xl font-bold text-gray-700">No featured products yet</p>
          <p className="text-gray-400 text-sm max-w-xs">
            Go to All Products and click "Mark as Featured" to add products here.
          </p>
          <button
            onClick={() => navigate('/')}
            className="mt-2 bg-indigo-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors cursor-pointer"
          >
            Browse All Products →
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {featuredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              isFeatured={featuredIds.has(product.id)}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  )
}
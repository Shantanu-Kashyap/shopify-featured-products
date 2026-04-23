import ProductList from '../components/ProductList'

export default function Dashboard({ products, featuredIds, onToggle, loading, error }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
        <p className="text-gray-500 mt-1 text-sm">Browse all products and mark them as featured.</p>
      </div>

      {loading && (
        <div className="flex flex-col items-center justify-center py-32 gap-4">
          <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500 text-sm">Loading products from store...</p>
        </div>
      )}

      {error && (
        <div className="text-center py-20 text-red-500 font-semibold">{error}</div>
      )}

      {!loading && !error && (
        <ProductList
          products={products}
          featuredIds={featuredIds}
          onToggle={onToggle}
        />
      )}
    </div>
  )
}
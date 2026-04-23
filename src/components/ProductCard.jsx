export default function ProductCard({ product, isFeatured, onToggle }) {
  return (
    <div className={`relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group border-2 ${isFeatured ? 'border-yellow-400' : 'border-transparent'}`}>
      
      {isFeatured && (
        <div className="absolute top-3 left-3 z-10 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
          ★ Featured
        </div>
      )}

      <div className="h-52 flex items-center justify-center p-6 bg-gray-50">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4 flex flex-col flex-1 gap-2">
        <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
          {product.category}
        </span>
        <h3 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2 flex-1">
          {product.title}
        </h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          <span className="text-xs text-yellow-500">{'★'.repeat(Math.round(product.rating?.rate || 4))} <span className="text-gray-400">({product.rating?.count})</span></span>
        </div>

        <button
          onClick={() => onToggle(product.id)}
          className={`mt-3 w-full py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer
            ${isFeatured
              ? 'bg-yellow-400 text-yellow-900 hover:bg-yellow-500'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
        >
          {isFeatured ? '★ Unmark Featured' : '☆ Mark as Featured'}
        </button>
      </div>
    </div>
  )
}
import { NavLink } from 'react-router-dom'

export default function Navbar({ featuredCount }) {
  return (
    <nav className="bg-white border-b border-gray-200 px-8 py-0 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      
      {/* Brand */}
      <div className="flex items-center gap-2 py-4">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-sm font-bold">S</span>
        </div>
        <span className="text-gray-900 font-bold text-lg">ShopAdmin</span>
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-2">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2
            ${isActive
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
              : 'text-gray-600 hover:bg-gray-100'
            }`
          }
        >
          🛍️ All Products
        </NavLink>

        <NavLink
          to="/featured"
          className={({ isActive }) =>
            `px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2
            ${isActive
              ? 'bg-yellow-400 text-yellow-900 shadow-md shadow-yellow-200'
              : 'text-gray-600 hover:bg-yellow-50'
            }`
          }
        >
          ★ Featured Products
          {featuredCount > 0 && (
            <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded-full ml-1">
              {featuredCount}
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  )
}
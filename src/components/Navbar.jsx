import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar({ featuredCount }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="px-4 sm:px-8 py-3 flex items-center justify-between">

        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shrink-0">
            <span className="text-white text-sm font-bold">S</span>
          </div>
          <span className="text-gray-900 font-bold text-lg">ShopAdmin</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-2">
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
            ★ Featured
            {featuredCount > 0 && (
              <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded-full">
                {featuredCount}
              </span>
            )}
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-gray-100 px-4 py-3 flex flex-col gap-2 bg-white">
          <NavLink
            to="/"
            end
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2
              ${isActive
                ? 'bg-indigo-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            🛍️ All Products
          </NavLink>

          <NavLink
            to="/featured"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2
              ${isActive
                ? 'bg-yellow-400 text-yellow-900'
                : 'text-gray-600 hover:bg-yellow-50'
              }`
            }
          >
            ★ Featured Products
            {featuredCount > 0 && (
              <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded-full ml-auto">
                {featuredCount}
              </span>
            )}
          </NavLink>
        </div>
      )}
    </nav>
  )
}
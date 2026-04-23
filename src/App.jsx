import { Routes, Route } from 'react-router-dom'
import { useProducts } from './hooks/useProducts'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import FeaturedPage from './pages/FeaturedPage'

export default function App() {
  const { products, featuredProducts, featuredIds, toggleFeatured, loading, error } = useProducts()

  return (
    <div className="min-h-screen bg-gray-100">
      <ui-title-bar title="Featured Products Dashboard" />
      <Navbar featuredCount={featuredProducts.length} />
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              products={products}
              featuredIds={featuredIds}
              onToggle={toggleFeatured}
              loading={loading}
              error={error}
            />
          }
        />
        <Route
          path="/featured"
          element={
            <FeaturedPage
              featuredProducts={featuredProducts}
              featuredIds={featuredIds}
              onToggle={toggleFeatured}
            />
          }
        />
      </Routes>
    </div>
  )
}
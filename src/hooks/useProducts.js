import { useState, useEffect } from 'react'

export function useProducts() {
  const [products, setProducts] = useState([])
  const [featuredIds, setFeaturedIds] = useState(new Set())
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(err => {
        setError('Failed to load products.')
        setLoading(false)
      })
  }, [])

  const toggleFeatured = (id) => {
    setFeaturedIds(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const featuredProducts = products.filter(p => featuredIds.has(p.id))

  return { products, featuredProducts, featuredIds, toggleFeatured, loading, error }
}
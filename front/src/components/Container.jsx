import { useState, useEffect } from "react"
import ProductList from "./ProductList"

const Container = () => {
  const [products, setProducts] = useState([])

  const loadProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/products")
      const data = await res.json()
      setProducts(data)
    } catch (error) {
      console.error("Error al cargar productos", error)
    }
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-50 to-gray-200 pt-5">
      <h1 className="text-4xl mb-5 font-bold text-center">Lista de productos</h1>
      <ProductList products={products} />
    </div>
  )
}

export default Container
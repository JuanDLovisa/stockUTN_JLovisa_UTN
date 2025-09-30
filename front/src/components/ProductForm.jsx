import { useState } from "react"

const ProductForm = ({ onProductCreated }) => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newProduct = { name, price: parseFloat(price), stock: parseInt(stock) }

    try {
      const res = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      })

      if (res.ok) {
        setName("")
        setPrice("")
        setStock("")
        onProductCreated()
      } else {
        console.error("Error al crear producto")
      }
    } catch (err) {
      console.error("Error de conexión:", err)
    }
  }

  return (
    <div className="w-full flex h-screen justify-center items-center
     bg-gradient-to-b from-gray-50 to-gray-200">
      <form className="flex flex-col gap-4 w-full max-w-md p-6 bg-white 
      rounded-md shadow-lg text-center" 
      onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nombre"
        className="ring ring-gray-300 p-2 rounded-md shadow-sm 
        focus:outline-none focus:ring-2 focus:ring-sky-400/50" required />
        <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="Precio"
        className="ring ring-gray-300 p-2 rounded-md shadow-sm 
        focus:outline-none focus:ring-2 focus:ring-sky-400/50" required />
        <input type="number" value={stock} onChange={e => setStock(e.target.value)} placeholder="Stock"
        className="ring ring-gray-300 p-2 rounded-md shadow-sm 
        focus:outline-none focus:ring-2 focus:ring-sky-400/50" required />
        <button className="bg-sky-400 text-white py-2 rounded-md
         hover:bg-sky-500 transition-colors cursor-pointer" 
        type="submit">Agregar producto</button>
      </form>
    </div>
  )
}

export default ProductForm
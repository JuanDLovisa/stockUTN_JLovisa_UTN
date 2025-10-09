import { Input } from './Input'
import { useState } from 'react'
import { toast } from "react-toastify"
export const ProductForm = () => {

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const config = {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },

        body: JSON.stringify({
          name: name,
          price: price,
          stock: stock
        })
      }
      const url = "http://localhost:3000/"
      const req = await fetch(url, config)
      const res = await req.json()
      if (res.error) {
        toast.error(res.msg)
        return
      }

      toast.success(res.msg)
      setName("")
      setPrice("")
      setStock("")


    } catch (er) {
      console.log(er)
      alert("Ha ocurrido un error")
    }

  }

  return (
    <div className='h-screen w-full bg-gray-100 justify-center'>
      <div className='gap-5 pt-5 flex flex-col justify-center items-center'>
        <a href="/" className="w-1/3 bg-blue-600 text-neutral-50 p-3 rounded shadow cursor-pointer 
        font-bold hover:bg-blue-700 mb-5 inline-block text-center
        transform hover:scale-102 transition-all" >Lista de productos</a>
        <h2 className='text-4xl font-bold'>Producto</h2>

        <form
          className="flex flex-col gap-2 p-7 bg-gray-200 rounded border-[1px] border-gray-400 w-[40%]"
          onSubmit={handleSubmit}

        >

          <Input
            type="text"
            name="Nombre de Producto"
            placeholder="Ingrese el producto"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <Input
            type="number"
            name="Precio"
            placeholder="Ingrese el precio"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value)
            }}
          />
          <Input
            name="Cantidad"
            type="number"
            placeholder="Ingrese la cantidad"
            value={stock}
            onChange={(e) => {
              setStock(e.target.value)
            }}
          />
          <button
            className="p-2 mt-5 border-[1px] bg-slate-950  transform hover:scale-102 transition-all
            font-black rounded hover:bg-blue-700 cursor-pointer text-slate-100"
          >Cargar</button>
        </form>

      </div>
    </div>
    )
}
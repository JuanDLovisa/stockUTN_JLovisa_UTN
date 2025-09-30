// GUIA https://expressjs.com/en/guide/routing.html
// Importar Express
import express from "express"
import dotenv from "dotenv"
import { sequelize } from './config/db.mjs'
import { Product } from "./models/products.mjs"
import cors from "cors"
// Crear servidor Express
const app = express()
dotenv.config()
// Agregar a express el soporte para JSON
app.use(express.json())
app.use(cors())
// Crear Ruta GET para obtener productos
app.get("/products", async function(req, res) {
  
  try{
    const {id, name} = req.query
    let where = {}

    if (id) where.id = id
    if (name) where.name = name

    const products = await Product.findAll({where})
    res.json(products)
  }
  catch(error){
    console.error(error)
    res.status(500).json({error:"Error al obtener productos"})
  }
  // de req.query obtenemos todo lo que esta despues
  // de el ? en la url
  // pe: http://localhost:3000/?id=1
  // obtenemos {id:1}
})
// Crear Ruta POST para crear producto
app.post('/products', async (req, res) => {

  try{
    const {name, price, stock} = req.body

    if(!name || !price || !stock){
      return res.status(400).json({error:"Todos los campos son obligatorios"})
    }
    const newProduct = await Product.create({name, price, stock})
    res.status(200).json(newProduct)
  }
  catch(error){
    console.error(error)
    res.status(500).json({error:"Error al crear producto"})
  }
})

// Crear Ruta PUT para modificar producto

app.put("/products", async (req, res) => {
  
  try{
    const {id} = req.params()
    const {name, price, stock} = req.body()

    const product = Product.findByPk(id)
    if(!product){
     return res.status(400).json({error:"Producto no encontrado"})
    }

    product.name = name ?? product.name
    product.price = price ?? product.price
    product.stock = stock ?? product.stock

    await product.save()
    res.json(product)
  }
  catch(error){
    console.error(error)
    res.status(500).json({ error: "Error al actualizar producto" })
  }
})

// Crear Ruta DELETE para eliminar un producto
app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findByPk(id)

    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" })
    }

    await product.destroy()
    res.json({ message: "Producto eliminado correctamente" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error al eliminar producto" })
  }
})

// Iniciar servidor express
app.listen(3000, () => {
  console.log("servidor iniciado en puerto http://localhost:3000")
  sequelize.sync()
  // Dentro de la función hay que agregar sequelize.sync()
})
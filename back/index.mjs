import express from "express";
import dotenv from "dotenv";
import { sequelize } from "./config/db.mjs";
import { Product } from "./models/products.mjs";
import cors from "cors";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json({
      error: false,
      data: products
    });
  } catch (error) {
    res.json({
      error: true,
      msg: "Error al obtener productos"
    })
  }
});

app.post("/", async (req, res) => {
  try {
    const { name, price, stock } = req.body;

    if (!name || price == null || stock == null) {
      res.json({
        error: true,
        msg: "Todos los campos son obligatorios"
      })
    }

    const product = await new Product({
      name: name,
      price:price,
      stock:stock
    })
    await product.save()
    
    res.json({
      error:false,
      msg:"Producto cargado"
    })
  } catch (error) {
    res.json({
      error:true,
      msg:error.message
    })
  }
});

// Corregir la ruta PUT para que use :id
app.put("/", async (req, res) => {
  try {
    const query = req.query
    res.json({
      error:false,
      msg:query
    })
  } catch (error) {
   res.json({
      error:true,
      msg:"Error al modificar producto"
    })
  }
});

app.delete("/", async (req, res) => {
  try {
    res.json("ruta delete")
  } catch (error) {
    res.json({
      error:true,
      msg: error.message
    })
  }
});

app.listen(3000, () => {
  console.log("Servidor iniciado en puerto http://localhost:3000");
  sequelize.sync();
});

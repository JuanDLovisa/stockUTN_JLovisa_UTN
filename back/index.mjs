import express from "express";
import dotenv from "dotenv";
import { sequelize } from "./config/db.mjs";
import { Product } from "./models/products.mjs";
import cors from "cors";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.get("/products", async (req, res) => {
  try {
    const { id, name } = req.query;
    let where = {};

    if (id) where.id = id;
    if (name) where.name = name;

    const products = await Product.findAll({ where });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener productos" });
  }
});

app.post("/products", async (req, res) => {
  try {
    const { name, price, stock } = req.body;

    if (!name || price == null || stock == null) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const newProduct = await Product.create({ name, price, stock });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear producto" });
  }
});

// Corregir la ruta PUT para que use :id
app.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, stock } = req.body;

    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    product.name = name ?? product.name;
    product.price = price ?? product.price;
    product.stock = stock ?? product.stock;

    await product.save();
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar producto" });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    await product.destroy();
    res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar producto" });
  }
});

app.listen(3000, () => {
  console.log("Servidor iniciado en puerto http://localhost:3000");
  sequelize.sync();
});

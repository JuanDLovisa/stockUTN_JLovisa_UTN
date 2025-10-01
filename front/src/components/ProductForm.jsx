import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";

const ProductForm = () => {
  const { id } = useParams();  // si viene edit, tendrá id
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    stock: "",
  });

  // Si hay id, cargar los datos del producto
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/products?id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            const prod = data[0];
            setProduct({
              name: prod.name,
              price: prod.price,
              stock: prod.stock,
            });
          }
        })
        .catch((error) => console.error("Error al obtener producto:", error));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let url = "http://localhost:3000/products";
      let method = "POST";

      if (id) {
        // edición
        url += `/${id}`;
        method = "PUT";
      }

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (!res.ok) {
        throw new Error("Error al guardar producto");
      }

      // Volver a la lista o a donde quieras
      navigate("/");
    } catch (error) {
      console.error("Error al guardar:", error);
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        {id ? "Editar Producto" : "Crear Producto"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Nombre"
          className="w-full p-2 border"
          required
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Precio"
          className="w-full p-2 border"
          required
        />
        <input
          type="number"
          name="stock"
          value={product.stock}
          onChange={handleChange}
          placeholder="Stock"
          className="w-full p-2 border"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {id ? "Guardar Cambios" : "Crear Producto"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;

import ProductRow from "./ProductRow";

const ProductList = ({ products, onDelete }) => {
  return (
    <table className="min-w-full table-fixed border border-gray-200 shadow-md rounded overflow-hidden">
      <thead className="bg-gray-200 text-center text-gray-700 uppercase text-sm">
        <tr>
          <th className="px-6 py-3 w-1/4 text-center">Nombre</th>
          <th className="px-6 py-3 w-1/4 text-center">Precio</th>
          <th className="px-6 py-3 w-1/4 text-center">Stock</th>
          <th className="px-6 py-3 w-1/4 text-center">Acciones</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {products.map((product) => (
          <ProductRow
            key={product.id}
            product={product}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;

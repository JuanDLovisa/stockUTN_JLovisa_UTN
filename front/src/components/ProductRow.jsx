const ProductRow = ({ product }) => {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 border-x border-gray-200 text-center">{product.name}</td>
      <td className="px-6 py-4 border-x border-gray-200 text-center">{product.price}</td>
      <td className="px-6 py-4 border-x border-gray-200 text-center">{product.stock}</td>
      <td className="px-6 py-4 text-center">
        <button className="bg-blue-400 rounded font-bold p-1
         hover:underline mr-2 cursor-pointer">Editar</button>
        <button className="bg-red-500 rounded p-1
        font-bold hover:underline cursor-pointer">Eliminar</button>
      </td>
    </tr>
  )
}

export default ProductRow
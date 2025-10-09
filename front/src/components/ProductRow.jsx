export const ProductRow = ({ data, onDelete }) => {
  return (
    <div className="flex rounded shadow gap-2 p-2 bg-white text-gray-950 font-bold justify-between 
    items-center mb-5">

      <p className="flex-2">{data.name}</p>
      <p className="flex-1">${data.price}</p>
      <p className="flex-1">{data.stock}</p>
      <section className="flex flex-1 justify-evenly">
        <a className="p-1 bg-gray-950 text-gray-50 rounded m-1 cursor-pointer 
        transition-colors
        hover:bg-blue-600 shadow"
        href={`/product/${data.id}`}>
          Editar
        </a>
        <button className="p-1 bg-gray-950 text-gray-50 rounded m-1 cursor-pointer 
        transition-colors
        hover:bg-red-600 shadow"
          onClick={() => onDelete(data.id)}
        >Borrar</button>
      </section>
    </div>
  )
}
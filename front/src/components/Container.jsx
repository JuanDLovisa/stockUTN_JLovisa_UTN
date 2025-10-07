export const Container = ({ children }) => {
  return (
    <div className="container mx-auto py-5 text-center">
      <a href="/product" className="w-1/3 bg-neutral-600 text-neutral-50 p-3 rounded shadow cursor-pointer 
      font-bold hover:bg-green-600 mb-5 inline-block text-center">Cargar Producto</a>
      {children}
    </div>
  )
}
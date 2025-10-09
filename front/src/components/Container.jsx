export const Container = ({ children }) => {
  return (
  <div className="h-screen w-full bg-gray-100">
    <div className="container mx-auto py-5 text-center">
      <a href="/product" className="w-1/3 bg-blue-600 text-neutral-50 p-3 rounded shadow cursor-pointer 
      font-bold hover:bg-blue-700 mb-5 inline-block text-center transform hover:scale-102 transition-all">Cargar Producto</a>
      {children}
    </div>
  </div>
  )
}
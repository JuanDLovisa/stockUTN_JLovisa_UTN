import {BrowserRouter, Route, Routes} from "react-router"
import ProductList from "./components/ProductList"
import ProductForm from "./components/ProductForm"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<ProductForm/>}></Route>
        <Route path="/" element={<ProductList/>}></Route>
        <Route path="*" element={<h2>404 No encontrado</h2>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App


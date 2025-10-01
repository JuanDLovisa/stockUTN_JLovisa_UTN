import { BrowserRouter, Routes, Route } from "react-router";
import Container from "./components/Container";
import ProductForm from "./components/ProductForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/edit/:id" element={<ProductForm />} />
        <Route path="/create" element={<ProductForm />} />
        <Route path="*" element={<h2>404 No encontrado</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


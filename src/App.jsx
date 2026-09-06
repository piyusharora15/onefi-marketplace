import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Marketplace from "./pages/Marketplace";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/marketplace" replace />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/marketplace/:productId" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

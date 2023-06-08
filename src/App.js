import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/AdminSections/Dashboard";
import Products from "./Pages/AdminSections/Home";
import Reports from "./Pages/AdminSections/Reports";
import AddProduct from "./Pages/AdminSections/AddProduct";
import AdminLanding from "./Pages/AdminLanding";
import UserLanding from "./Pages/UserLanding";
import EditProduct from "./Pages/AdminSections/EditProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/*" element={<AdminLanding />} />
          <Route path="/user/*" element={<UserLanding />} />
          {/* <Route path="/admin/editProduct/*" element={<EditProduct />} /> */}
          {/* <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/reports" element={<Reports />} />
          <Route path="/admin/addProduct" element={<AddProduct />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import Admin from "pages/admin/Index";
import Clientes from "pages/admin/Clientes";
import Vehiculos from "pages/admin/Vehiculos";
import Index from "pages/Index";
import Login from "pages/Login";
import Registro from "pages/Registro";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; /* importar router */
// import "styles/styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="registro" element={<Registro />} />
        <Route path="admin/vehiculos" element={<Vehiculos />} />
        <Route path="admin/clientes" element={<Clientes />} />
        <Route path="admin" element={<Admin />} />
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;

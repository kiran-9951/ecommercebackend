import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Addproducts from "./pages/addproducts";
import Listproducts from "./pages/listproducts";
import Orders from "./pages/orders";


export default function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <hr/>
   <div className="flex"> 
<Sidebar/>
<Routes>
  <Route path="/add" element={<Addproducts />} />
  <Route path="/list" element={<Listproducts />} />
  <Route path="/orders" element={<Orders />} />
</Routes>
   </div>
   </BrowserRouter>   
  )
}
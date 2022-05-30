import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Home/Services";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import BuyNow from "./Pages/Parts/BuyNow";
import Parts from "./Pages/Parts/Parts";
import Navbar from "./Pages/Shared/Navbar";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from "./Pages/Blog/Blog";
import NotFound from "./Pages/Shared/NotFound";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyReview from "./Pages/Dashboard/MyReview";
import MyHistory from "./Pages/Dashboard/MyHistory";
import Users from "./Pages/Dashboard/Users";
import SecureAdmin from "./Pages/Login/SecureAdmin";
import AddParts from "./Pages/Dashboard/AddParts";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="parts" element={<Parts></Parts>}></Route>
        <Route path="parts/:partsId" element={
          <PrivateRoute>
            <BuyNow />
          </PrivateRoute>}>
        </Route>
        <Route path="dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>

          <Route path="users" element={<Users></Users>}></Route>
          <Route path="addparts" element={<AddParts></AddParts>}></Route>
        </Route>
        <Route path="services" element={<Services></Services>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="blogs" element={<Blog></Blog>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;

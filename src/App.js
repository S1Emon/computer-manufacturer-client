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
            <Dashboard>

            </Dashboard>
          </PrivateRoute>}>
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

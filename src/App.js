import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Home/Services";
import Login from "./Pages/Login/Login";
import Parts from "./Pages/Parts/Parts";
import Products from "./Pages/Parts/Parts";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="parts" element={<Parts></Parts>}></Route>
        <Route path="services" element={<Services></Services>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

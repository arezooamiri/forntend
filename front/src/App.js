import Navbar from "./components/navbar/Navbar";
import About from "./pages/About us/aboutus";
import Articlepage from "./pages/Articleapage/articlepage";
import Home from "./pages/home/home";
import { Route,Routes } from "react-router-dom";



function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/article/:id" element={<Articlepage/>} />
      </Routes>
   
    </div>
  );
}

export default App;

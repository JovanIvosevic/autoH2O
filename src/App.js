import AddGame from "./pages/addGame/AddGame";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./register.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addGame" element={<AddGame />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

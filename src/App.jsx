import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { SingleHotel } from "./components/hotels/SingleHotel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hotels/:id" element={<SingleHotel />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="content-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

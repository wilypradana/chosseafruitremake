import Home from "./Hero.js";
import Cash from "./Cash.js";
import Exchange from "./Exchange.js";
import "./App.css";
import "./Handler.js";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound.js";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="exchange" element={<Exchange />} />
        <Route path="/" element={<Home />} />
        <Route path="/cash" element={<Cash />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

/// <reference types="vite-plugin-svgr/client" />
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="catalog" element={<div>ahhaha</div>}></Route>
        <Route path="sign-in" element={<Authentication />}></Route>
      </Route>
    </Routes>
  );
}

export default App;

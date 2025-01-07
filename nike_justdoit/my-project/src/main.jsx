import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

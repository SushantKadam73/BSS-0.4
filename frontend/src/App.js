import React from "react";
import "./App.css";
import "./styles/pixelPushers.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FundDirectoryPage from "./pages/FundDirectoryPage";
import FundDetailPage from "./pages/FundDetailPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="App" style={{ background: 'var(--bg-page)', minHeight: '100vh' }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/funds" element={<FundDirectoryPage />} />
          <Route path="/funds/:slug" element={<FundDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductImages from "./components/ProductImages";
import PaymentOptions from "./components/PaymentOptions";
import BundleSection from "./components/BundleSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
      <div className="app">
        <Header />
        <main className="main-container">
          <div className="product-section">
            <ProductImages />
            <ProductDetails />
          </div>
          <PaymentOptions />
          <BundleSection />
        </main>
        <Footer />
      </div>
  );
}

export default App;

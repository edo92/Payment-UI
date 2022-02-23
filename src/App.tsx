import React from "react";
import { Routes, Route } from "react-router-dom";
import CheckoutPage from "./Pages/Checkout";
import AuthPage from "./Pages/Auth";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={"checkout/*"} element={<CheckoutPage />} />
      <Route path={"auth/*"} element={<AuthPage />} />
    </Routes>
  );
};

export default App;

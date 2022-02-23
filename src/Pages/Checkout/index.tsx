import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Payment from "./stages/Payment";
import Shipping from "./stages/Shipping";
import Information from "./stages/Information";

import CheckoutSummary from "./Summary";
import HeaderMenu from "./Summary/menu";
import Template from "../../Templates/Divide";

const CheckoutRoutes: React.FC = () => (
  <Routes>
    <Route path={"payment"} element={<Payment />} />
    <Route path={"shipping"} element={<Shipping />} />
    <Route path={"information"} element={<Information />} />
    <Route path={"*"} element={<Navigate to="/" />} />
  </Routes>
);

const CheckoutPage: React.FC = () => {
  return (
    <>
      <Template
        active={1}
        header={<HeaderMenu />}
        steps={["Cart", "Information", "Shipping", "Payment"]}
      >
        <CheckoutRoutes />
        <CheckoutSummary />
      </Template>
    </>
  );
};

export default CheckoutPage;

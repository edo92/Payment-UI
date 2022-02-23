import React from "react";
import { InputWrapper, Input } from "./styles";
import {
  CardCvcElement,
  CardNumberElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";

export const CardName = () => {
  return <Input placeholder="Name on card" />;
};

export const CardNumber = () => {
  return (
    <InputWrapper>
      <CardNumberElement
        options={{
          placeholder: "Card number",
          showIcon: true,
        }}
      />
    </InputWrapper>
  );
};

export const CardExpiry = () => {
  return (
    <InputWrapper>
      <CardExpiryElement
        options={{
          placeholder: "Expiration date",
        }}
      />
    </InputWrapper>
  );
};

export const CardCvc = () => {
  return (
    <InputWrapper className="testingxxx">
      <CardCvcElement
        options={{
          placeholder: "CVC",
        }}
      />
    </InputWrapper>
  );
};

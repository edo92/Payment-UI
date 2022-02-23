import React from "react";
import { Radio } from "exo-ui";
import CardType, { CardTypeProps } from "./logos";
import { CardNumber, ExpiryDate, RadioIcon } from "./styles";

export interface CardDetailsProps {
  cardNumber: string;
  cardExpiry: string;
}

export const CardDetails: React.FC<CardDetailsProps> = () => (
  <>
    <CardNumber>**** **** **** **** 4747</CardNumber>
    <ExpiryDate>05/23</ExpiryDate>
  </>
);

export const SelectType: React.FC<CardTypeProps> = (props) => (
  <RadioIcon>
    <Radio size="large" />
    <CardType cardType={props.cardType} />
  </RadioIcon>
);

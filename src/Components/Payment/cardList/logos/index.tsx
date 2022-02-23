import React from "react";
import { LogoContainer } from "../styles";
import { Visa, MasterCard } from "./logos";

export type ICardTypes = "visa" | "mastercard";

export interface CardTypeProps {
  cardType: ICardTypes;
}

const CardType: React.FC<CardTypeProps> = (props) => {
  return (
    <LogoContainer>
      {props.cardType === "visa" && <MasterCard />}
      {props.cardType === "mastercard" && <Visa />}
    </LogoContainer>
  );
};

export default CardType;

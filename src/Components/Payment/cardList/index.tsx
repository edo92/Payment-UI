import React from "react";
import { CardTypeProps } from "./logos";
import { Container, Wrapper, Inner } from "./styles";
import { SelectType, CardDetails, CardDetailsProps } from "./elems";

export interface ICard extends CardTypeProps, CardDetailsProps {}

export interface CardSelectProps {
  cards: ICard[];
}

const CardSelect: React.FC<CardSelectProps> = (props) => {
  return (
    <>
      {props.cards.map((card, i) => (
        <Container key={`${card.cardNumber}${i}`}>
          <Wrapper>
            <Inner>
              <SelectType cardType={card.cardType} />

              <CardDetails
                cardNumber={card.cardNumber}
                cardExpiry={card.cardExpiry}
              />
            </Inner>
          </Wrapper>
        </Container>
      ))}
    </>
  );
};

export default CardSelect;

import React from "react";
import { Card } from "exo-ui";
import CardForm from "./cardForm";
import CardList, { ICard } from "./cardList";

interface PaymentCardProps {
  cards?: ICard[];
}

const PaymentCard: React.FC<PaymentCardProps> = ({ cards }) => {
  const hasSavedCards = cards && cards.length;

  return (
    <Card title="Cardit Card">
      {!hasSavedCards ? (
        <>
          <CardForm />
        </>
      ) : (
        <>
          <CardList cards={cards} />
        </>
      )}
    </Card>
  );
};

export default PaymentCard;

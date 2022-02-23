import React from "react";
import { FormEvent } from "types";
import { StripeApi, StripeElem, Elems } from "Api/stripe";
import { Elements, ElementsConsumer } from "@stripe/react-stripe-js";

import { Section } from "exo-ui";
import { Form } from "Components/Form";
import PaymentCard from "Components/Payment";
import { LargeButton } from "Components/Common";
import { ContentBox, OptionBox } from "Components/Common";

const PaymentStage: React.FC = () => {
  const handleSubmit = (event: FormEvent, stripe: StripeElem, elems: Elems) => {
    event.preventDefault();
  };

  return (
    <Elements stripe={StripeApi.stripePromise}>
      <ElementsConsumer>
        {({ stripe, elements }) => (
          <Form onSubmit={(e) => handleSubmit(e, stripe, elements)}>
            <Section>
              <ContentBox
                items={[
                  {
                    name: "Contact",
                    body: "example123@gmail.com",
                    action: {
                      actionName: "Change",
                      function: () => {
                        console.log("change...");
                      },
                    },
                  },
                  {
                    name: "Address",
                    body: "12345 Testing st. Helloworld, CA 913010",
                    action: {
                      actionName: "Change",
                      function: () => {
                        console.log("change...");
                      },
                    },
                  },
                  {
                    name: "Shipping",
                    body: "Overnight",
                    action: {
                      actionName: "Change",
                      function: () => {
                        console.log("change...");
                      },
                    },
                  },
                ]}
              />
            </Section>

            <Section title="Payment">
              <PaymentCard
                cards={
                  [
                    // { cardType: "visa", cardNumber: "1234", cardExpiry: "05/15" },
                    // { cardType: "visa", cardNumber: "1234", cardExpiry: "05/15" },
                  ]
                }
              />
            </Section>

            <Section title="Billing address">
              <OptionBox
                items={[
                  { name: "Regular Shipping", result: "Free" },
                  { name: "Overnight Shipping", result: "$20" },
                ]}
              />
            </Section>
            <LargeButton radius={5} size="large">
              Next
            </LargeButton>
          </Form>
        )}
      </ElementsConsumer>
    </Elements>
  );
};

export default PaymentStage;

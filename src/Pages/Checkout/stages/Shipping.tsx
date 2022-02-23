import React from "react";
import { FormEvent } from "types";
import { useNavigate } from "react-router-dom";
import { Section } from "exo-ui";
import { LargeButton } from "Components/Common";
import { Form } from "Components/Form";
import { OptionBox, ContentBox } from "Components/Common";

const ShippingStage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    navigate("/checkout/payment");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
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
            ]}
          />
        </Section>

        <Section title="Shipping method">
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
    </div>
  );
};

export default ShippingStage;

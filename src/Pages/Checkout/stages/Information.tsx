import React from "react";
import { FormEvent } from "types";
import { useNavigate } from "react-router-dom";
import { Section } from "exo-ui";

import ContactForm from "../../../Forms/Contact";
import AddressForm from "../../../Forms/Address";
import { LargeButton } from "Components/Common";
import { Form, FormItem } from "Components/Form";

const InformationStage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    navigate("/checkout/shipping");
  };

  return (
    <div style={{ paddingTop: "35px" }}>
      <Form onSubmit={handleSubmit}>
        <Section title="Contact information">
          <FormItem>
            <ContactForm />
          </FormItem>
        </Section>

        <Section title="Shipping address">
          <FormItem>
            <AddressForm />
          </FormItem>
        </Section>

        <LargeButton radius={5} size="large">
          Next
        </LargeButton>
      </Form>
    </div>
  );
};

export default InformationStage;

import React from "react";
import { Checkbox, Input, Field, InputEmail, InputNumber } from "exo-ui";

import styled from "styled-components";
const ExtraSpace = styled.div`
  margin-top: 3px;
`;

const ContactForm: React.FC = () => (
  <>
    <Field>
      <Input size="medium" placeholder="First name" />
      <Input size="medium" placeholder="Last name" />
    </Field>
    <Field>
      <InputEmail size="medium" placeholder="Email" />
    </Field>
    <Field>
      <InputNumber size="medium" placeholder="Phone number" />
    </Field>
    <Field>
      <ExtraSpace>
        <Checkbox size="medium">
          {"Keep me up to date on news and offers"}
        </Checkbox>
      </ExtraSpace>
    </Field>
  </>
);

export default ContactForm;

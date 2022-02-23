import React from "react";
import { Field } from "exo-ui";
import { Wrapper } from "./styles";
import { CardNumber, CardName, CardExpiry, CardCvc } from "./elems";

const CardInput: React.FC = () => (
  <Wrapper>
    <Field>
      <CardNumber />
    </Field>
    <Field>
      <CardName />
    </Field>
    <Field>
      <CardExpiry />
      <CardCvc />
    </Field>
  </Wrapper>
);

export default CardInput;

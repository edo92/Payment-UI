import React from "react";
import { Select, Option, Field, Input, InputNumber } from "exo-ui";

const AddressForm: React.FC = () => (
  <>
    <Field>
      <Input size="medium" placeholder="Address" />
    </Field>
    <Field>
      <Input size="medium" placeholder="Appartment, suit" />
    </Field>
    <Field>
      <Input size="medium" placeholder="City" />
    </Field>
    <Field>
      <Select size="medium">
        <Option key="US" value="US">
          United States
        </Option>
        <Option key="AM" value="AM">
          Armenia
        </Option>
      </Select>
      <Select size="medium">
        <Option key="US" value="US">
          California
        </Option>
        <Option key="AM" value="AM">
          Alabama
        </Option>
      </Select>
      <InputNumber size="medium" placeholder="Zip code" />
    </Field>
  </>
);

export default AddressForm;

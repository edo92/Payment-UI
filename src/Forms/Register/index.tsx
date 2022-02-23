import React from "react";
import { Input, Field } from "exo-ui";

const RegisterForm: React.FC = () => {
  return (
    <>
      <Field>
        <Input size="medium" placeholder="First Name" />
        <Input size="medium" placeholder="Last Name" />
      </Field>

      <Field>
        <Input size="medium" placeholder="Email" />
      </Field>

      <Field>
        <Input size="medium" placeholder="Password" />
      </Field>
    </>
  );
};

export default RegisterForm;

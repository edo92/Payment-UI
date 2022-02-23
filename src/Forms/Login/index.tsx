import React from "react";
import { Input, Field } from "exo-ui";

const LoginForm: React.FC = () => {
  return (
    <>
      <Field>
        <Input size="medium" placeholder="Email" />
      </Field>

      <Field>
        <Input size="medium" placeholder="Password" />
      </Field>
    </>
  );
};

export default LoginForm;

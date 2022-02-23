import React from "react";
import RegisterForm from "Forms/Register";
import { Form } from "Components/Form";
import { Button, FormItem } from "../styles";

const Register: React.FC = () => {
  return (
    <>
      <Form>
        <FormItem>
          <RegisterForm />
        </FormItem>

        <FormItem>
          <Button size="medium" radius={4}>
            Register
          </Button>
        </FormItem>
      </Form>
    </>
  );
};

export default Register;

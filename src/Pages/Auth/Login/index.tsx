import React from "react";
import LoginForm from "Forms/Login";
import { Form } from "Components/Form";
import { Button, FormItem, TabLink, TabRow, TabLinkText } from "../styles";

const Login: React.FC = () => {
  return (
    <>
      <Form>
        <FormItem>
          <LoginForm />
        </FormItem>

        <FormItem>
          <Button size="medium" radius={4}>
            Login
          </Button>
        </FormItem>
      </Form>

      <TabRow>
        <TabLink>
          <TabLinkText>Forgot password ?</TabLinkText>
        </TabLink>
      </TabRow>
    </>
  );
};

export default Login;

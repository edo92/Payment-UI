import React from "react";
import { Routes, Route } from "react-router-dom";
import TabContainer from "Components/TabContainer";
import { Container, Wrapper } from "./styles";
import MainLogo from "Components/Logo";
import Login from "./Login";
import Register from "./Register";

const AuthPage: React.FC = () => {
  const tabs = [
    { name: "Login", to: "login" },
    { name: "Create Account", to: "register" },
  ];

  return (
    <Container>
      <MainLogo />
      <Wrapper>
        <TabContainer tabs={tabs}>
          <Routes>
            <Route path={"login"} element={<Login />} />
            <Route path={"register"} element={<Register />} />
          </Routes>
        </TabContainer>
      </Wrapper>
    </Container>
  );
};

export default AuthPage;

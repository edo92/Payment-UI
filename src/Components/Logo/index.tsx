import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Link = styled.a`
  display: block;
  color: #000000;
  vertical-align: middle;
  transition: color 0.2s ease-in-out;
`;

const Logo = styled.img``;

const SiteLogo: React.FunctionComponent = () => {
  const imgUrl =
    "https://cdn.shopify.com/s/files/1/0009/3080/7852/files/logo.png?1891";
  const siteUrl = "http://localhost:3000/checkout/information";

  return (
    <Container>
      <Link href={siteUrl}>
        <Logo alt="logo" src={imgUrl} />
      </Link>
    </Container>
  );
};

export default SiteLogo;

import React from "react";
import { Content, Badge } from "exo-ui";
import { Thumbnail, TextBold, TextSmall, LastItem } from "./styles";
import styled from "styled-components";

const url =
  "https://cdn.shopify.com/s/files/1/0009/3080/7852/products/16_2_small.jpg?v=1629541016";

const Elem = styled(Badge)`
  top: -10px;
  left: 68%;
  z-index: 3;
  display: block;
  line-height: 17px;
  position: absolute;
`;

export const Summary: React.FC = () => {
  return (
    <>
      <Content>
        <Elem size="medium" shape="circle" color="neutral" count={3} />
        <Thumbnail size="large" alt="image" src={url} />
      </Content>
      <Content>
        <TextBold>Sweeper and Funnel</TextBold>
        <TextSmall>White</TextSmall>
      </Content>
      <LastItem>
        <TextBold>$1200</TextBold>
      </LastItem>
    </>
  );
};

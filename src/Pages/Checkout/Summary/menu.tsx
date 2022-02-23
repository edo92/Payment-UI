import React from "react";
import styled from "styled-components";
import checkoutImg from "Assets/checkout.png";

const OrderBar = styled.div`
  width: 100%;
  color: #000000;
  display: flex;
  justify-content: space-evenly;
  padding: 2.5px 0;
  background: #fafafa;
  cursor: pointer;
  broder-bottom: 1px solid gray;
`;

const OrderText = styled.div`
  box-sizing: border-box;
  font-weight: 400;
`;

const OrderTotal = styled.div`
  color: #333333;
  font-size: 1.3em;
  box-sizing: border-box;
  font-weight: 500;
`;

const CheckoutIcon = styled.img`
  height: 25px;
  position: absolute;
  margin-left: -3em;
  margin-top: -3px;
`;

const OrderBarInner = styled.span`
  display: flex;
`;

const Menu: React.FC = () => {
  return (
    <OrderBar>
      <OrderBarInner>
        <CheckoutIcon src={checkoutImg} />
        <OrderText>Order Summary</OrderText>
      </OrderBarInner>
      <OrderTotal>$350.00</OrderTotal>
    </OrderBar>
  );
};

export default Menu;

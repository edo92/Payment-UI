import styled from "styled-components";
import visa from "./svgs/visa.svg";
import mastercard from "./svgs/mastercard.svg";

export const Visa = styled.img.attrs({
  src: visa,
})`
  width: 32px;
  margin-top: 3px;
`;

export const MasterCard = styled.img.attrs({
  src: mastercard,
})`
  width: 32px;
  margin-top: 3px;
`;

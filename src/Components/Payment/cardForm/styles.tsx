import styled, { css } from "styled-components";
import { InputStyle, Input as BaseInput } from "exo-ui";

const noFocus = css`
  &:focus {
    box-shadow: none !important;
  }
`;

export const Input = styled(BaseInput)`
  ${noFocus};
`;

export const Wrapper = styled.div`
  padding: 10px 18px;
  padding-bottom: 18px;
  & div {
    padding: 3px 0;
  }
`;

export const InputWrapper = styled(InputStyle)`
  &&& {
    ${noFocus};
    background: #fff;
    padding: 10.55px !important;
  }
`;

import styled from "styled-components";
import {
  Button,
  ContentBox as _ContentBox,
  OptionBox as _OptionBox,
} from "exo-ui";

export const ContentBox = styled(_ContentBox)`
  .content-item {
    font-size: 15px;
    padding: 14px 20px;
  }
`;

export const OptionBox = styled(_OptionBox)`
  .option-item {
    padding: 18.5px 20px;

    span {
      font-size: 15.5px;
      line-height: 15px;
    }
  }
`;

export const LargeButton = styled(Button)`
  min-width: 200px;
  div {
    justify-content: center;
  }
`;

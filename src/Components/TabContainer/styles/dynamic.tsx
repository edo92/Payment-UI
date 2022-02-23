import { css } from "styled-components";

export type IActive = { active?: boolean };

export const fontColor = css<IActive>`
  color: ${({ active }) => {
    return active ? "#666666" : "#343e45";
  }};
`;

export const background = css<IActive>`
  background-color: ${({ active }) => {
    return active ? "#ebebeb" : "#ffff";
  }};
`;

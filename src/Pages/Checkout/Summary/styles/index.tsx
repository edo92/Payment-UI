import styled, { css } from "styled-components";

export const dynamicHeight = css`
  @media only screen and (min-width: 1000px) {
    height: calc(100vh - 5em);
  }
  @media only screen and (max-width: 1000px) {
    height: 100%;
  }
`;

export const Container = styled.div`
  ${dynamicHeight};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  line-height: 1.3em;
  position: relative;
`;

export const Section = styled.div`
  min-width: 100%;
  &:before {
    background-color: transparent;
    top: 0;
    content: "";
    display: block;
    height: 1px;
    left: 0;
    position: absolute;
    transition: background-color 0.3s cubic-bezier(0.3, 0, 0, 1);
    width: 100%;
    z-index: 4;
  }
`;

export const Spaceing = styled.div`
  padding: 4.2px 0;
`;

export const DescribleItem = styled.th`
  padding-top: 0;
  padding-bottom: 0;
  text-align: left;
  width: 100%;
  font-weight: normal;
`;

// Repeates
export const TextBold = styled.span`
  color: #323232;
  text-align: left;
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
`;

export const TextHighlight = styled.span`
  color: #323232;
  text-align: left;
  font-size: 1.14em;
  white-space: nowrap;
`;

export const Prefix = styled.span`
  color: #717171;
  font-size: 0.857em;
  margin-right: 0.75em;
  vertical-align: 0.2em;
`;

export const TextFinal = styled.span`
  color: #323232;
  font-size: 1.714em;
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 1em;
  text-align: right;
  white-space: nowrap;
`;

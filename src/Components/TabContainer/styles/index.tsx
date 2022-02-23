import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { fontColor, background, IActive } from "./dynamic";

export const Container = styled.div`
  padding: 50px 0;
  position: relative;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 600px;
  border-radius: 3px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%),
    0 3px 1px -2px rgb(0 0 0 / 20%);
`;

export const Header = styled.div`
  width: 100%;
  display: block;
  position: relative;
`;

export const Tabs = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  display: inline-flex;
  justify-content: space-evenly;
`;

export const Tab = styled.div<IActive>`
  ${background};
  padding: 20px;
  text-align: center;
`;

export const Link = styled(RouterLink)<IActive>`
  ${fontColor};
  width: 50%;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  text-decoration: none;
`;

export const Body = styled.div`
  padding: 20px;
  display: block;
  position: relative;
`;

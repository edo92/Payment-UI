import styled, { css } from "styled-components";
import { Dropdown as SmallViewDropdown } from "exo-ui";

const dynamicPadding = css`
  @media only screen and (min-width: 1000px) {
    padding: 0 5%;
    margin-right: auto;
    margin-left: auto;
    width: 90%;
  }
`;

export const Container = styled.div`
  color: #545454;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
`;

export const Wrapper = styled.div`
  ${dynamicPadding};
  max-width: 80em;
  display: flex;
  padding: 0 5%;
  &:before {
    content: "";
    display: table;
  }
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`;

export const MainView = styled.main`
  width: 52%;
  float: left;
  flex: 1 0 auto;
  padding-top: 2em;
  padding-right: 6%;
  position: relative;
  flex-direction: column;
`;

export const Header = styled.header`
  margin: 2em 0;
  @media only screen and (min-width: 0) and (max-width: 500px) {
    padding: 0 15%;
  }
  @media (max-width: 1000px) and (min-width: 500px) {
    padding: 0 23%;
  }
`;

export const Body = styled.div`
  padding-bottom: 0.1428571429rem;
  padding-top: 0.1428571429rem;
`;

export const SideLayout = styled.aside`
  @media only screen and (min-width: 0) and (max-width: 500px) {
    padding: 0 30px;
  }
  @media (max-width: 1000px) and (min-width: 500px) {
    padding: 0 100px;
    padding-top: 25px !important;
    border-top: 1px solid #e6e6e6;
  }
  position: relative;
  background-position: left top;
  &:after {
    left: 0;
    background-position: left top;
    box-shadow: 1px 0 0 #e1e1e1 inset;
    content: "";
    display: block;
    width: 300%;
    position: absolute;
    top: 0;
    bottom: 0;
    background: #fafafa;
    z-index: -1;
  }
`;

export const SideView = styled(SideLayout)`
  width: 38%;
  float: right;
  padding-left: 4%;
  padding-top: 4em;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const Dropdown = styled(SmallViewDropdown)`
  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

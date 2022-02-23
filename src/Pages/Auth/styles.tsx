import styled from "styled-components";
import { Button as Btn } from "exo-ui";

export const Button = styled(Btn)`
  width: 100%;
  border-radius: 5px;

  & div {
    font-size: 15px;
    font-weight: 600;
    justify-content: center;
  }
`;

export const FormItem = styled.div`
  & > * {
    margin: 8px 0;
  }
`;

export const TabRow = styled.div`
  padding: 13px 0;
  text-align: center;
`;

export const TabLink = styled.div`
  width: 100%;
  padding: 13px 0;
  font-size: 13px;
  font-weight: 500;
`;

export const TabLinkText = styled.a`
  padding: 13px;
  color: #666666;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #e1e1e1;
`;

export const Container = styled.div`
  padding: 60px 15%;
`;

export const Wrapper = styled.div`
  padding: 50px;
`;

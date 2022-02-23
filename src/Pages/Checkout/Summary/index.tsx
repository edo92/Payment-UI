import React from "react";
import { Table, TableRow, Divider } from "exo-ui";
import { Summary } from "Components/Product";
import {
  Container,
  Wrapper,
  Section,
  Spaceing,
  TextBold,
  DescribleItem,
  TextHighlight,
  Prefix,
  TextFinal,
} from "./styles";

const Side: React.FC = () => (
  <Container>
    <Wrapper>
      <Section>
        <Table>
          {[1, 2].map((item) => (
            <>
              <TableRow key={item}>
                <Summary />
              </TableRow>
              <Spaceing />
            </>
          ))}
        </Table>
        <Divider />

        <Spaceing />

        <Table>
          <TableRow>
            <DescribleItem>Subtotal</DescribleItem>
            <TextBold>$4200</TextBold>
          </TableRow>

          <Spaceing />
          <Spaceing />

          <TableRow>
            <DescribleItem>Subtotal</DescribleItem>
            <TextBold>$4200</TextBold>
          </TableRow>
        </Table>

        <Spaceing />
        <Divider />
        <Spaceing />

        <Table>
          <TableRow>
            <DescribleItem>
              <TextHighlight>Total</TextHighlight>
            </DescribleItem>
            <DescribleItem>
              <Prefix>USD</Prefix>
              <TextFinal>$259.00</TextFinal>
            </DescribleItem>
          </TableRow>
        </Table>
      </Section>
    </Wrapper>
  </Container>
);

export default Side;

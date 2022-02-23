import React, { useState } from "react";
import { createBrowserHistory } from "history";

import { Tabs, Tab, Link } from "./styles";
import { Container, Wrapper, Header, Body } from "./styles";

interface ITab {
  to: string;
  name: string;
}

interface TabProps {
  tabs: ITab[];
}

interface TabListProps extends TabProps {
  current: string;
}

const TabList: React.FC<TabListProps> = (props) => {
  const [active, setStatus] = useState(props.current);

  return (
    <>
      {props.tabs.map((tab, i) => {
        const isActive = active === tab.to;
        return (
          <Link
            to={tab.to}
            key={`${tab.name}${i}`}
            active={isActive}
            onClick={() => setStatus(tab.to)}
          >
            <Tab active={isActive}>
              <>{tab.name}</>
            </Tab>
          </Link>
        );
      })}
    </>
  );
};

const TabContainer: React.FC<TabProps> = (props) => {
  const history = createBrowserHistory();
  const current = history.location.pathname.split("/")[2];

  return (
    <Container>
      <Wrapper>
        <Header>
          <Tabs>
            <TabList current={current} tabs={props.tabs} />
          </Tabs>
        </Header>
        <Body>{props.children}</Body>
      </Wrapper>
    </Container>
  );
};

export default TabContainer;

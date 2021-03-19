import {
  Container,
  Content,
  GlobalStyles,
  Header,
  Span,
  Navbar,
  Ul,
  Li,
  Links,
  Div,
} from "./style-components";

import { theme } from "./theme-context/themeSetup";

import Theme from "./theme-context/theme";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./Routes";

function App() {
  return (
    <Theme theme={theme}>
      <GlobalStyles />

      <Header secondary>
        <Span padding="small">Hello</Span>
      </Header>
      <Container>
        <Router>
          <Navbar>
            <h2>Components</h2>
            <Ul>
              <Li>
                <Links to="/alert">Alert</Links>
              </Li>
              <Li>
                <Links to="/button">Button</Links>
              </Li>
              <Li>
                <Links to="/shoelaces">Badges</Links>
              </Li>
            </Ul>
          </Navbar>

          <Content bgcolor>
            <Div pl="2rem">
              <Switch>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}
                  />
                ))}
              </Switch>
            </Div>
          </Content>
        </Router>
      </Container>
    </Theme>
  );
}

export default App;

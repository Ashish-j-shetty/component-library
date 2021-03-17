import { Container, Div, GlobalStyles, Header, Span } from "./style-components";
import { lightTheme } from "./style-components/GlobalStyles";
import Theme from "./theme-context/theme";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { routes } from "./style-components/Routes";

function App() {
  return (
    <Theme theme={lightTheme}>
      <GlobalStyles mode="light" />
      <Header>
        <Span>Hello</Span>
      </Header>
      <Container>
        <Router>
          <Div width="20rem">
            <div
              style={{
                padding: "10px",

                background: "#f0f0f0",
              }}
            >
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/bubblegum">Bubblegum</Link>
                </li>
                <li>
                  <Link to="/shoelaces">Shoelaces</Link>
                </li>
              </ul>
            </div>
          </Div>

          <Div body>
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
        </Router>
      </Container>
    </Theme>
  );
}

export default App;

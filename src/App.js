import React from "react";
import Landing from "./components/layout/Landing";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Colors from "./ui-styles/colors";
import { Provider } from "react-redux";
import store from "./store";
const Nav = styled.nav`
  background-color: #ffffff;
  height: 50px;
  border-bottom: 0.7px solid #dce4e9;
`;
const Ul = styled.ul`
  margin: 0;
`;
const Li = styled.li`
  padding: 0 2%;
  display: inline-block;
  line-height: 50px;
`;
const Links = styled(Link)`
  color: ${Colors.navBarColor};
  text-decoration: none;
  :hover& {
    color: ${Colors.navBarColorHover};
    transition: 0.1s;
  }
`;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Nav>
            <Ul>
              <Li>
                <Links to="/">Home</Links>
              </Li>
              <Li>
                <Links to="/register">Register</Links>
              </Li>
              <Li>
                <Links to="/login">Login</Links>
              </Li>
            </Ul>
          </Nav>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

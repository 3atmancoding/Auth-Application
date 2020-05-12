import React, { Component } from "react";
import styled from "styled-components";
import Font from "../../ui-styles/fonts";
import Colors from "../../ui-styles/colors";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const LandingSection = styled.section`
  overflow: hidden;
`;
const WelcomeHeading = styled.h1`
  font-family: ${Font.Montserrat}, ${Font.Fallback};
  font-size: 7.5em;
  color: ${Colors.welcomeHeading};
  font-weight: 500;
  margin-left: 1em;
`;
class Landing extends Component {
  render() {
    return (
      <LandingSection>
        <WelcomeHeading>Welcome</WelcomeHeading>
      </LandingSection>
    );
  }
}
export default Landing;

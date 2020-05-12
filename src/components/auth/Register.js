import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import logo from "../../media/svg/logo.svg";
import styled from "styled-components";
import Colors from "../../ui-styles/colors";
const LoginSection = styled.section`
  text-align: center;
  background-color: ${Colors.backgroundColor};
`;
const Logo = styled.img`
  width: 300px;
`;
const Welcome = styled.h2`
  color: ${Colors.welcomeHeading};
  position: relative;
  top: -113px;
  padding: 1%;
  margin-bottom: 0;
`;
const BackToLogin = styled.p`
  position: relative;
  top: -113px;
  margin: 1em 0 1em 0;
  color: ${Colors.AlreadyAccount};
`;
const Links = styled(Link)`
  color: ${Colors.navBarColor};
  text-decoration: none;
  :hover& {
    color: ${Colors.navBarColorHover};
    transition: 0.1s;
  }
`;
const FormContainer = styled.div`
  width: 30%;
  margin: 0 auto;
  position: relative;
  top: -119px;
`;
const FormOuter = styled.div`
  padding: 0.5em;
`;
const Input = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  padding: 0.4em;
  border: 1px solid ${Colors.inputFormBorder};
  :focus& {
    outline:none;
  }
  }
`;
const SubmitButton = styled.button`
  width: 7.5em;
  height: 40px;
  background-color: ${Colors.submitButtonDefault};
  border: 0;
  cursor: pointer;
  border-radius: 10px;
  color: ${Colors.buttonFontColor};
  font-weight: bold;
  font-size: 1em;
  :focus& {
    outline: none;
  }
  :hover& {
    background-color: ${Colors.submitButtonDefaultHover};
    transition: 0.3s;
  }
`;
function Register() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [error, setError] = React.useState({});
  // state = {
  //   name: "",
  //   email: "",
  //   password: "",
  //   password2: "",
  //   errors: {},
  // };
  // onChange = (e) => {
  //   let name = e.target.name
  //   this.setState({ [e.target.id]: e.target.value });
  // };
  // onSubmit = (e) => {
  //   e.preventDefault();
  // };
  const onSubmit = (e) => {
    const UserData = {
      name: name,
      email: email,
      password: password,
      password2: password2,
    };
    console.log(UserData);

    e.preventDefault();
  };
  return (
    <LoginSection>
      <Logo src={logo} alt="logo_img" />
      <Welcome>Register for a new account</Welcome>
      <BackToLogin>
        Already have an account? <Links to="/login">Log in</Links>
      </BackToLogin>
      <FormContainer>
        <form noValidate onSubmit={onSubmit}>
          <FormOuter>
            <Input
              onChange={(e) => setName(e.target.value)}
              value={name}
              // errors={errors.name}
              id="name"
              type="text"
              placeholder="Name"
            />
          </FormOuter>
          <FormOuter>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              errors={email}
              id="email"
              type="email"
              placeholder="Email"
            />
          </FormOuter>
          <FormOuter>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              // error={errors.password}
              id="password"
              type="password"
              placeholder="Password"
            />
          </FormOuter>
          <FormOuter>
            <Input
              onChange={(e) => setPassword2(e.target.value)}
              value={password2}
              // error={errors.password2}
              id="password2"
              type="password"
              placeholder="Re-type Password"
            />
          </FormOuter>
          <FormOuter>
            <SubmitButton type="submit">Sign Up</SubmitButton>
          </FormOuter>
        </form>
      </FormContainer>
    </LoginSection>
  );
}
export default Register;

import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import {
  LoginContainer,
  LoginHeader,
  FormContainer,
  InputContainer,
  Label,
  Input,
  CheckboxContainer,
  InputC,
  LabelC,
  ButtonContainer,
  LoginButton,
  ErrorMessage,
} from "./styledComponents";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const readUsername = (event) => setUsername(event.target.value);
  const readPassword = (event) => setPassword(event.target.value);
  const toggleShowPassword = (event) => setShowPassword(event.target.checked);
  const navigate = useNavigate();
  const onSubmitForm = async (event) => {
    event.preventDefault();
    const userData = { username, password };
    const apiUrl = "http://localhost:5000/api/login/";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      const jwtToken = data.jwtToken;
      Cookies.set("jwtToken", jwtToken, { expires: 1 });
      navigate("/dashboard");
    } else {
      setErrorMsg(data.error);
    }
  };
  return (
    <LoginContainer>
      <LoginHeader>Login</LoginHeader>
      <FormContainer onSubmit={onSubmitForm}>
        <InputContainer>
          <Label htmlFor="username">Username:</Label>
          <Input
            onChange={readUsername}
            id="username"
            value={username}
            type="text"
            placeholder="Enter your username"
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="password">Password:</Label>
          <Input
            onChange={readPassword}
            id="password"
            value={password}
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
          />
        </InputContainer>
        <CheckboxContainer>
          <InputC
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={toggleShowPassword}
          />
          <LabelC htmlFor="showPassword">Show Password</LabelC>
        </CheckboxContainer>
        {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
        <ButtonContainer>
          <LoginButton type="submit">Login</LoginButton>
        </ButtonContainer>
      </FormContainer>
    </LoginContainer>
  );
};
export default Login;

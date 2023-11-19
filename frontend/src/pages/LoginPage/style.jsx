import styled from "styled-components";

export const AuthContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #111;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  background: #222;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export const Button = styled.button`
  padding: 10px;
  margin-bottom: 10px;
  background-color: #780bec;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #6500a5;
  }
`;

export const RegisterButton = styled.button`
  color: #ffffff;
  background-color: #780bec;
  text-decoration: none;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #6500a5;
  }
`;

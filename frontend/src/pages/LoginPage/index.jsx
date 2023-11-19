import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContainer, Form, Input, Button, RegisterButton } from "./style";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}${"/login"}`,
        {
          email,
          password,
        }
      );
      if (response.status === 200) {
        // Store the token in a cookie
        document.cookie = `token=${response.data.token}; path=/;`;

        navigate("/");
      } else {
        console.error("Connexion non autorisée");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContainer>
      <Form onSubmit={handleLogin}>
        <h2>Connexion</h2>
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Nom d'utilisateur"
          required
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
          required
        />
        <Button className="se-connecter" type="submit">
          Se connecter
        </Button>
        <RegisterButton onClick={() => navigate("/signup")}>
          Pas de compte ? Inscrivez-vous
        </RegisterButton>
      </Form>
    </AuthContainer>
  );
}

export default LoginPage;

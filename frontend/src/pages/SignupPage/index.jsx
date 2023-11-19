import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AuthContainer, Form, Input, Button } from "./style";

function SignUpPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return;
    }

    axios.post(`${import.meta.env.VITE_BACKEND_URL}${"/register"}`, {
      name,
      email,
      password,
    });

    navigate("/login");
  };

  return (
    <AuthContainer>
      <Form onSubmit={handleSubmit}>
        <h2>Inscription</h2>
        <Input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="confirmez votre mot de passe"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <Button type="submit">S'inscrire</Button>
        <Link to="/login">Vous avez déjà un compte ? Connectez-vous</Link>
      </Form>
    </AuthContainer>
  );
}

export default SignUpPage;

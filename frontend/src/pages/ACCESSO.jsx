import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slice/authSlice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Container, FloatingLabel, Form, Button } from 'react-bootstrap';
import Logo from '../assets/img/Logo-Mattatoyo-nero.png';

export default function LOGIN() {

  return (
    <Container fluid className="alt-100 bg-light">
      <Container className="w-75">
        <Form>
          <img className="py-4 d-block mx-auto" src={Logo} alt="Logo Mattatoyo" width="140" ></img>
          <FloatingLabel controlId="floatingInput" label="Email" className="mb-3" >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              
            />
          </FloatingLabel>
          <Button
            variant="dark"
            className="w-100 mb-3 "
            type="submit"
            
          >
            Accedi
          </Button>
          <Button
            variant="dark"
            className="w-100 "
            type="submit"
            
          >
            Registrati
          </Button>
          <p className="text-muted text-center py-4">&copy; 2024</p>
        </Form>
      </Container>
    </Container>
  );
}
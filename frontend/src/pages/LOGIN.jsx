import React from 'react'
import { Container, FloatingLabel, Form, Button } from 'react-bootstrap';
import Logo from '../assets/img/Logo-Mattatoyo-nero.png';

export default function LOGIN() {
  return (
    <Container fluid className="alt-100 bg-light">
      <Container className="py-4 w-25">
        <Form>
          <img className="pt-5 mb-4 d-block mx-auto" src={Logo} alt="Logo Mattatoyo" width="140" ></img>
          <FloatingLabel controlId="floatingInput" label="Email" className="mb-3" >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
            <Form.Control type="password" placeholder="Password"/>
          </FloatingLabel>
          <Button variant="dark" className="w-100 mb-5 " type="submit">
            Accedi
          </Button>
          <p className="text-muted text-center">&copy; 2024</p>
        </Form>
      </Container>
    </Container>
  );
}
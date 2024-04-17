import React from 'react'
import { Container } from 'react-bootstrap';
import ListaEventi from '../features/eventi/ListaEventi';

export default function eventi() {
  return (
    <Container className='my-4'>
      <ListaEventi />
    </Container>
  )
}
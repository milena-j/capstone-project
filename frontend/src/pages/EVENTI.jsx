import React from 'react'
import CardImg from '../assets/img/20240414.jpg';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function EVENTI() {

  return (
    <Container className='my-5'>
      <Row className="g-4">
        <Col sm={12} md={6} lg={4} xl={3}>
          <Card>
            <Card.Img variant="top" src={CardImg} />
            <Card.Body>
              <Card.Title>Mercatino Popolare</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">14/04/2024</Card.Subtitle>
              <Card.Text>
                Call per espositor3 di vestiti usati! Scrivici in dm! La piazzola è gratuita.
              </Card.Text>
              <Button variant="dark" className='right-aligned'>Dettagli</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}



/* 
function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
    } else {
        return text;
    }
}
 <p class="card-text">${truncateText(description, 100)}</p> 
*/
import React, { useState } from 'react';
import { Form, Button, Dropdown, InputGroup, Accordion } from 'react-bootstrap';

export default function EventoNuovoMain() {

  const [tipologia, setTipologia] = useState('Scegli');
  const [stato, setStato] = useState('Scegli');

  return (
    <>
      <h1 className="fs-4 ps-2 border-start border-3 border-danger mb-3">
        NUOVO EVENTO
      </h1>

      <Form /* onSubmit={handleSubmit} */>
        <Form.Group className="mb-3">
          <Form.Label>Data e ora inizio</Form.Label>
          <Form.Control required type="datetime-local" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Titolo</Form.Label>
          <Form.Control required type="text" placeholder="Titolo" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descrizione</Form.Label>
          <Form.Control required type="text" placeholder="Descrizione" as="textarea" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Tipologia</Form.Label>
          <Dropdown drop='down'>
            <Dropdown.Toggle required variant="outline-dark" className='w-100 d-flex justify-content-between align-items-center' >
              {tipologia}
            </Dropdown.Toggle>
            <Dropdown.Menu className='w-100'>
              <Dropdown.Item onClick={() => setTipologia('Matta')} href="#/action-1">Matta</Dropdown.Item>
              <Dropdown.Item onClick={() => setTipologia('Collaborazione %')} href="#/action-2">Collaborazione %</Dropdown.Item>
              <Dropdown.Item onClick={() => setTipologia('Affitto')} href="#/action-3">Affitto</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Stato</Form.Label>
          <Dropdown drop='down'>
            <Dropdown.Toggle required variant="outline-dark" className='w-100 d-flex justify-content-between align-items-center' >
              {stato}
            </Dropdown.Toggle>
            <Dropdown.Menu className='w-100'>
              <Dropdown.Item onClick={() => setStato('Bozza')} href="#/action-1">Bozza</Dropdown.Item>
              <Dropdown.Item onClick={() => setStato('Confermato')} href="#/action-2">Confermato</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>

        <Form.Group>
          <Form.Label>Ingresso</Form.Label>
          <InputGroup>
            <InputGroup.Text>€</InputGroup.Text>
            <Form.Control required type="number" placeholder="0,00" />
          </InputGroup>
        </Form.Group>

        <h2 className="fs-4 ps-2 border-start border-3 border-danger mb-3 mt-4">
          SPESE
        </h2>

        <Form.Group className="mb-3">
          <Form.Label>Cachet</Form.Label>
          <InputGroup>
            <InputGroup.Text>€</InputGroup.Text>
            <Form.Control required type="number" placeholder="0,00" />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>S.I.A.E.</Form.Label>
          <InputGroup>
            <InputGroup.Text>€</InputGroup.Text>
            <Form.Control required type="number" placeholder="0,00" />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Spese varie</Form.Label>
          <InputGroup>
            <InputGroup.Text>€</InputGroup.Text>
            <Form.Control required type="number" placeholder="0,00" />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Fonico</Form.Label>
          <InputGroup>
            <InputGroup.Text>€</InputGroup.Text>
            <Form.Control required type="number" placeholder="0,00" />
          </InputGroup>
        </Form.Group>

        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h2 className="fs-4 ps-2 border-start border-3 border-danger">
                SERATA
              </h2>
            </Accordion.Header>
            <Accordion.Body>
              <Form.Group className="mb-3">
                <Form.Label>Fondo bar</Form.Label>
                <InputGroup>
                  <InputGroup.Text>€</InputGroup.Text>
                  <Form.Control required type="number" placeholder="0,00" />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Fondo tessere</Form.Label>
                <InputGroup>
                  <InputGroup.Text>€</InputGroup.Text>
                  <Form.Control required type="number" placeholder="0,00" />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Numero ingressi POS</Form.Label>
                <InputGroup>
                  <InputGroup.Text>€</InputGroup.Text>
                  <Form.Control required type="number" placeholder="0,00" />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Numero tessere POS</Form.Label>
                <InputGroup>
                  <InputGroup.Text>€</InputGroup.Text>
                  <Form.Control required type="number" placeholder="0,00" />
                </InputGroup>
              </Form.Group>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>


        <Accordion defaultActiveKey={['0']} alwaysOpen className='my-4'>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h2 className="fs-4 ps-2 border-start border-3 border-danger">
                ENTRATE
              </h2>
            </Accordion.Header>
            <Accordion.Body>

              <Form.Group className="mb-3">
                <Form.Label>POS</Form.Label>
                <InputGroup>
                  <InputGroup.Text>€</InputGroup.Text>
                  <Form.Control required type="number" placeholder="0,00" />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Contanti Tessere</Form.Label>
                <InputGroup>
                  <InputGroup.Text>€</InputGroup.Text>
                  <Form.Control required type="number" placeholder="0,00" />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Contanti Bar</Form.Label>
                <InputGroup>
                  <InputGroup.Text>€</InputGroup.Text>
                  <Form.Control required type="number" placeholder="0,00" />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Affitto</Form.Label>
                <InputGroup>
                  <InputGroup.Text>€</InputGroup.Text>
                  <Form.Control required type="number" placeholder="0,00" />
                </InputGroup>
              </Form.Group>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Button variant="dark" className="w-100" type="submit">
          Crea
        </Button>
      </Form>
    </>
  )
}
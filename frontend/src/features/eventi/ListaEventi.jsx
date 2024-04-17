import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEventi } from './listaEventiSlice';
import { Link } from 'react-router-dom';
import { TbCalendarPlus } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { Row, Col, Card, Button, InputGroup, Form } from 'react-bootstrap';
import CardImg from '../../assets/img/20240414.jpg';

export default function ListaEventi() {
    const dispatch = useDispatch();
    const eventi = useSelector(state => state.listaEventi.list);
    const eventiStatus = useSelector(state => state.listaEventi.status);
    const error = useSelector(state => state.listaEventi.error);

    useEffect(() => {
        if (eventiStatus === 'idle') {
            dispatch(fetchEventi());
        }
    }, [eventiStatus, dispatch]);

    return (
        <>
            <div className='d-flex mb-3 gap-3 flex-wrap'>
                <div className='w-100'>
                    <InputGroup size='sm'>
                        <Form.Control
                            placeholder="Cerca un evento per titolo o descrizione"
                            aria-label="search"
                            aria-describedby="search"
                        />
                        <Button variant="outline-dark" id="search">
                            <FiSearch />
                        </Button>
                    </InputGroup>
                </div>

                <div className='w-100'>
                    <Link to="/evento/nuovo" className='d-flex align-items-center gap-2 w-100 btn btn-sm btn-dark'>
                        <TbCalendarPlus className='fs-6' />
                        Nuovo Evento
                    </Link>
                </div>
            </div>

            <Row className="g-4">
                {eventiStatus === 'loading' && <div>Loading...</div>}
                {eventiStatus === 'failed' && <div>Error: {error}</div>}
                {eventiStatus === 'succeeded' && eventi.map((evento) => (
                    <Col sm={12} md={6} lg={4} xl={3} key={evento.ID_evento} >
                        <Card>
                            <Card.Img variant="top" src={CardImg} />
                            <Card.Body>
                                <Card.Title>
                                    {evento.Titolo}
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    {evento.Data.toDate().toLocaleDateString('it-IT')}
                                </Card.Subtitle>
                                <Card.Text>
                                    {evento.Descrizione.length > 50
                                        ? `${evento.Descrizione.substring(0, 50)}...`
                                        : evento.Descrizione}
                                </Card.Text>
                                <Link
                                    to={`/evento/${evento.ID_evento}`}
                                    className='w-100 btn btn-sm btn-outline-dark'
                                >
                                    Dettagli
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                {eventiStatus === 'succeeded' && eventi.length === 0 && (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Card>
                            <Card.Img variant="top" src={CardImg} />
                            <Card.Body>
                                <Card.Title>
                                    Niente da mostrare
                                </Card.Title>
                                <Card.Text>
                                    Non ci sono eventi da mostrare
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        </>
    );
}
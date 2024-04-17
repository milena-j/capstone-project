import React from 'react';
import { useSelector } from 'react-redux';
import CardImg from '../assets/img/20240414.jpg';
import { Container } from 'react-bootstrap';


export default function EventoIDmain() {

    const eventi = useSelector(state => state.listaEventi.list);
    const eventiStatus = useSelector(state => state.listaEventi.status);
    const error = useSelector(state => state.listaEventi.error);

    console.log(eventi);

    return (

        /* pagina di dettaglio dell'evento con tutti i dati che possono essere inviati dal form presente in EventoNuovoMain:
         */

        <>

            {eventiStatus === 'loading' && <div>Loading...</div>}
            {eventiStatus === 'failed' && <div>Error: {error}</div>}
            {eventiStatus === 'succeeded' && (
                <div className="d-flex mb-3 gap-3 flex-wrap">
                    {eventi.map(evento => (
                        <div key={evento.id}>
                            <Container fluid className='bg-dark h-50 position-relative'>
                                <img src={CardImg} alt={evento.Titolo} className="h-100 position-absolute top-50 start-50 translate-middle" />
                            </Container>
                            <Container className="mt-3">
                                <h5>{evento.Titolo}</h5>
                                <p>{evento.Data.toDate().toLocaleDateString('it-IT')}</p>
                                <p>{evento.Descrizione}</p>
                                <p>{evento.Ingresso}</p>
                                <p>{evento.Tipologia}</p>
                                <p>{evento.Stato}</p>
                            </Container>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};
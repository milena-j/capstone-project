import React from 'react'
import { useState, useEffect } from 'react'
import axios from '../api/axios';
import { Table, Button, Modal } from 'react-bootstrap';
import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function UtentiMain() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/users')
            .then(response => {
                console.log(response.data);
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    return (
        <div>
            <div className='d-flex justify-content-between align-items-center'>
                <h1>Utenti</h1>
                <Button variant="dark" size="sm">
                    Aggiungi utente
                </Button>
            </div>
            <Table striped bordered hover variant="dark" className='mt-4'>
                <thead>
                    <tr>
                        <th className='col-1'>ID</th>
                        <th className='col-5'>Nome e Cognome</th>
                        <th className='col-5'>Admin</th>
                        <th className='col-1'>Azioni</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>
                                {/* {user.admin ? 'Si' : 'No'} */}
                            </td>
                            <td className='d-flex justify-content-center gap-2'>

                                {/* edit btn */}

                                <Button variant="warning" size="sm" onClick={handleShowEdit} key={user.id}>
                                    <FiEdit />
                                </Button>

                                {/* modale per modificare */}

                                <Modal show={showEdit} onHide={handleCloseEdit} key={user.id}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Modifica utente</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>{user.id}</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleCloseEdit} className='w-25'>
                                            Annulla
                                        </Button>
                                        <Button variant="success" onClick={handleCloseEdit} className='w-25'>
                                            Salva
                                        </Button>
                                    </Modal.Footer>
                                </Modal>

                                {/* delete btn */}

                                <Button variant="danger" size="sm" onClick={handleShowDelete} key={user.id}>
                                    <FiTrash2 />
                                </Button>

                                {/* modale per modificare */}

                                <Modal show={showDelete} onHide={handleCloseDelete} key={user.id}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Elimina utente</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Cliccando su "Conferma" l'utente {user.name} verrà eliminato in modo definitivo.</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleCloseDelete} className='w-25'>
                                            Annulla
                                        </Button>
                                        <Button variant="danger" onClick={handleCloseDelete} className='w-25'>
                                            Conferma
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
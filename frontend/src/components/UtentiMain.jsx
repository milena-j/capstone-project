import React, { useState, useEffect } from 'react'
import { Table, Button, Modal } from 'react-bootstrap';
import { FiUserPlus, FiEdit, FiTrash2 } from "react-icons/fi";

export default function UtentiMain() {

    /* const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/users')
            .then(response => {
                console.log(response.data);
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []); */

    const [selectedUser, setSelectedUser] = useState(null);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const handleShowEdit = (user) => {
        setSelectedUser(user);
        setShowEdit(true);
    }

    const handleCloseEdit = () => {
        setSelectedUser(null);
        setShowEdit(false);
    }

    const handleShowDelete = (user) => {
        setSelectedUser(user);
        setShowDelete(true);
    };

    const handleCloseDelete = () => {
        setSelectedUser(null);
        setShowDelete(false);
    };

    return (
        <div>
            <div className='d-flex justify-content-between align-items-center mb-4'>
                <h1 className='fs-2 m-0'>Utenti</h1>
                <Button variant="dark" size="sm" className='d-flex align-items-center gap-2'>
                    <FiUserPlus />
                    Nuovo Utente
                </Button>
            </div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th className='col-1'>ID</th>
                        <th className='col-4'>Username</th>
                        <th className='col-4'>Email</th>
                        <th className='col-2'>Admin</th>
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

                                <Button variant="warning" size="sm" onClick={() => handleShowEdit(user)}>
                                    <FiEdit />
                                </Button>

                                {/* modale per modificare */}

                                <Modal show={selectedUser && selectedUser.id === user.id && showEdit} onHide={handleCloseEdit}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Modifica utente</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        {user.id}
                                    </Modal.Body>
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

                                <Button variant="danger" size="sm" onClick={() => handleShowDelete(user)}>
                                    <FiTrash2 />
                                </Button>

                                {/* modale per cancellare */}

                                <Modal show={selectedUser && selectedUser.id === user.id && showDelete} onHide={handleCloseDelete}>
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
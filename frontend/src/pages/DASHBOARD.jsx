import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { TbCalendarPlus, TbCoinEuro } from "react-icons/tb";
import { LuCalendarDays } from "react-icons/lu";
import { FiCreditCard } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { RiLogoutCircleLine } from "react-icons/ri";

/* componenti test */
import Counter from '../test-features/counter/Counter';
import User from '../test-features/user/User';
import AddTodo from '../test-features/todo/AddTodo';
import TodoList from '../test-features/todo/TodoList';
import AddNote from '../test-features/note/AddNote';
import NoteList from '../test-features/note/NoteList';
/* fine componenti test */

import { Link } from 'react-router-dom';
export default function DASHBOARD() {
    return (
        <Container className='my-4'>

            {/* <Counter /> */}

            {/* <User userId="1" /> */}

            {/* <AddTodo />
            <TodoList />

            <AddNote/>
            <NoteList/> */}

            <Row className="g-3">

                <Col sm={6} lg={4}>
                    <Link
                        to="/eventi"
                        className='d-flex align-items-center gap-2 w-100 p-3 btn btn-dark'
                    >
                        <LuCalendarDays className='fs-4' />
                        Eventi
                    </Link>
                </Col>

                <Col sm={6} lg={4}>
                    <Link
                        to="/evento/nuovo"
                        className='d-flex align-items-center gap-2 w-100 p-3 btn btn-dark'
                    >
                        <TbCalendarPlus className='fs-4' />
                        Nuovo Evento
                    </Link>
                </Col>

                <Col sm={6} lg={4}>
                    <Link
                        to="/spese-fisse"
                        className='d-flex align-items-center gap-2 w-100 p-3 btn btn-dark'
                    >
                        <TbCoinEuro className='fs-4' />
                        Spese Fisse
                    </Link>
                </Col>

                <Col sm={6} lg={4}>
                    <Link
                        to="/spese-variabili"
                        className='d-flex align-items-center gap-2 w-100 p-3 btn btn-dark'
                    >
                        <TbCoinEuro className='fs-4' />
                        Spese Variabili
                    </Link>
                </Col>

                <Col sm={6} lg={4}>
                    <Link
                        to="/tessere"
                        className='d-flex align-items-center gap-2 w-100 p-3 btn btn-dark'
                    >
                        <FiCreditCard className='fs-4' />
                        Tessere
                    </Link>
                </Col>

                <Col sm={6} lg={4}>
                    <Link
                        to="/statistiche"
                        className='d-flex align-items-center gap-2 w-100 p-3 btn btn-dark'
                    >
                        <GoGraph className='fs-4' />
                        Statistiche
                    </Link>
                </Col>

                <Col sm={6} lg={4}>
                    <Link
                        to="/login"
                        className='d-flex align-items-center gap-2 w-100 p-3 btn btn-outline-dark'
                    >
                        <RiLogoutCircleLine className='fs-4' />
                        Logout
                    </Link>
                </Col>

            </Row>
        </Container>
    )
}
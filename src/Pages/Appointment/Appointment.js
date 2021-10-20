import React, { useState } from 'react';
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Appointment = () => {

    const [show, setShow] = useState(false);
    const [checked, setChecked] = useState('')
    const history = useHistory()
    const handleClose = () => setShow(false);

    const handleCheck = e => {
        setChecked(e.target.checked);
    }
    const handleShow = () => {
        setShow(true);
        checked ? history.push('/confirmation') : setShow(true)
    }

    return (
        <div className="container mx-auto m-5">
            <h1 className="text-center p-2 text-primary mb-3">Make an Appointment</h1>
            <Row xs={1} md={2} lg={2} className='mx-auto m-5'>
                <Col className="mx-auto">
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" />
                            </Form.Group>
                            <Form.Group as={Col} >
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="Phone" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Appointment Date</Form.Label>
                                <Form.Control type="date" placeholder="Appointment Date" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" >
                            <FloatingLabel label="Message">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" onChange={handleCheck}>
                            <Form.Check type="checkbox" label="I agree with the terms and conditions" />
                        </Form.Group>
                        <>
                            <Button variant="primary" onClick={handleShow}>
                                Set Appointment
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title className="text-danger">Important!</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Please agree to our terms and conditions</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="success" onClick={handleClose}>
                                        Ok
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </>
                    </Form>
                </Col>
            </Row>
        </div >
    );
};

export default Appointment;
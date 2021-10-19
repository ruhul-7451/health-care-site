import React, { useState } from 'react';
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';

const Appointment = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="I agree with the terms and conditions" />
                        </Form.Group>
                        <>
                            <Button variant="primary" onClick={handleShow}>
                                Set Appointment
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Appointment Successful</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Be prepare on you schedule and your selected doctor will reach you on time. Please click confirm to set the schedule.</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="success" onClick={handleClose}>
                                        Confirm
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
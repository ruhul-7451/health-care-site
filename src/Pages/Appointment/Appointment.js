import React from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';

const Appointment = () => {
    const handleFormSubmit = e => {
        e.preventDefault();
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
                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="I agree with the terms and conditions" />
                        </Form.Group>
                        <Button onClick={handleFormSubmit} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div >
    );
};

export default Appointment;
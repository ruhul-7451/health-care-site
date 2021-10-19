import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = ({ service }) => {
    const { serviceId, serviceImg, serviceTitle, serviceDescription } = service;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={serviceImg} />
                    <Card.Body>
                        <Card.Title>{serviceTitle}</Card.Title>
                        <Card.Text>{serviceDescription}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;
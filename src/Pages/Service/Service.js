import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
const info = <FontAwesomeIcon icon={faInfoCircle} />

const Service = ({ service }) => {
    const { serviceId, serviceImg, serviceTitle } = service;

    const history = useHistory();
    const handleService = () => {
        history.push(`/service/${serviceId}`)
    }
    return (
        <div>
            <Col>
                <Card className="shadow">
                    <Card.Img variant="top" src={serviceImg} />
                    <Card.Header>
                        <Card.Title>{serviceTitle}</Card.Title>
                    </Card.Header>
                    <Card.Header className="text-center">
                        <Button onClick={handleService} variant="warning text-white w-100">See Details {info}</Button>
                    </Card.Header>
                </Card>
            </Col>
        </div>
    );
};

export default Service;
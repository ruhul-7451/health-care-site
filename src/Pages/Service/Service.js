import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
const info = <FontAwesomeIcon icon={faInfoCircle} />

const Service = ({ service }) => {
    const { serviceId, serviceImg, serviceTitle, serviceDescription } = service;

    const history = useHistory();
    const handleService = () => {
        history.push(`/service/${serviceId}`)
    }
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={serviceImg} />
                    <Card.Body>
                        <Card.Title>{serviceTitle}</Card.Title>
                        {/* <Card.Text>{serviceDescription}</Card.Text> */}
                    </Card.Body>
                    <Card.Footer className="text-center">
                        <Button onClick={handleService} variant="warning">See Details {info}</Button>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Service;
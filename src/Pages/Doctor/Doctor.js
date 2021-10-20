import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';
const info = <FontAwesomeIcon icon={faInfoCircle} />

const Doctor = ({ doctor }) => {
    const { docId, docName, docImage, expertize } = doctor;
    const history = useHistory();
    const handleDoctor = () => {
        history.push(`/doctor/${docId}`)
    }
    return (
        <div>
            <Col>
                <Card className="shadow">
                    <Card.Img variant="top" src={docImage} />
                    <Card.Body>
                        <Card.Title>{docName}</Card.Title>
                        <Card.Title><small className="text-secondary">{expertize}</small></Card.Title>
                    </Card.Body>
                    <Card.Body className="text-center">
                        <Button onClick={handleDoctor} variant="outline-primary w-100">See Details {info}</Button>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Doctor;
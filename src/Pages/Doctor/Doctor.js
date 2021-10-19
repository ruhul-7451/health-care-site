import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';
const info = <FontAwesomeIcon icon={faInfoCircle} />

const Doctor = ({ doctor }) => {
    const { docId, docName, docImage, expertize, docProfile } = doctor;
    const history = useHistory();
    const handleDoctor = () => {
        history.push(`/doctor/${docId}`)
    }
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={docImage} />
                    <Card.Body>
                        <Card.Title>{docName}</Card.Title>
                        <Card.Title><small>{expertize}</small></Card.Title>
                        {/* <Card.Text>
                            {docProfile}
                        </Card.Text> */}
                    </Card.Body>
                    <Card.Footer className="text-center">
                        <Button onClick={handleDoctor} variant="warning">See Details {info}</Button>
                    </Card.Footer>
                </Card>
            </Col>

        </div>
    );
};

export default Doctor;
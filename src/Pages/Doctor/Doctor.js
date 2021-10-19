import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = ({ doctor }) => {
    const { docName, docImage, expertize, docProfile } = doctor;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={docImage} />
                    <Card.Body>
                        <Card.Title>{docName}</Card.Title>
                        <Card.Title><small>{expertize}</small></Card.Title>
                        <Card.Text>
                            {docProfile}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Doctor;
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowServices = ({ showServices }) => {
    const { serviceImg, serviceTitle, serviceDescription } = showServices;
    return (
        <div>
            <Card className="container my-5 col-lg-10 mx-auto">
                <Card.Img variant="top" src={serviceImg} />
                <Card.Body>
                    <Card.Title>{serviceTitle}</Card.Title>
                    <Card.Text>{serviceDescription}</Card.Text>
                    <Card.Link as={Link} to="/services" className="btn btn-primary">Go Back</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ShowServices;
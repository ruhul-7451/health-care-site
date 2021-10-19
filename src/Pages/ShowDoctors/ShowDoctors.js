import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowDoctors = ({ showDoctors }) => {
    const { docName, docImage, expertize, docProfile } = showDoctors;
    return (
        <div>
            <Card className="container my-5 col-lg-10 mx-auto">
                <Card.Img variant="top" src={docImage} />
                <Card.Body>
                    <Card.Title>{docName}</Card.Title>
                    <Card.Text><small>{expertize}</small></Card.Text>
                    <Card.Text>{docProfile}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link as={Link} to="/doctors" className="btn btn-primary">Go Back</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ShowDoctors;
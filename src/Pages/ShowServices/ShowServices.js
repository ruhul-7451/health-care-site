import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowServices = ({ showServices }) => {
    const { serviceImg, serviceTitle, serviceDescription, importance, getTheCare } = showServices;
    return (
        <div>
            <Card className="container my-3 col-lg-8 mx-auto">
                <Card.Img className="py-3" variant="top" src={serviceImg} />
                <Card.Header className="fs-2 fw-bold bg-info text-white">{serviceTitle}</Card.Header> <br />
                <Card.Text>
                    {serviceDescription}
                </Card.Text> <br />

                <Card.Title>
                    Important Things to Know
                </Card.Title>
                <Card.Text>
                    {importance}
                </Card.Text><br />
                <Card.Title>
                    Get the Care You Deserve
                </Card.Title>
                <Card.Text>
                    {getTheCare}
                </Card.Text><br />
                {/* <Card.Body>
                    <Card.Title>{serviceTitle}</Card.Title>
                    <Card.Text>{serviceDescription}</Card.Text>
                    <Card.Link as={Link} to="/services" className="btn btn-primary">Go Back</Card.Link>
                </Card.Body> */}
                <Card.Link as={Link} to="/services" className="btn btn-warning fs-6 w-25">Go Back</Card.Link> <br />
            </Card>
        </div>
    );
};

export default ShowServices;
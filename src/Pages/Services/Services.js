import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = "/dbServices.json"
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className="container">

            <h2 className=" rounded">Our Services</h2>

            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    services.map(service => <Service
                        key={service.serviceId}
                        service={service}
                    ></Service>)
                }
            </Row>

        </div >
    );
};

export default Services;
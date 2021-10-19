import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ShowServices from '../ShowServices/ShowServices';

const ServiceDetails = () => {
    const [detailService, setDetailsService] = useState([]);
    useEffect(() => {
        const url = '/dbServices.json'
        fetch(url)
            .then(res => res.json())
            .then(data => setDetailsService(data))
    }, []);

    const { id } = useParams();
    const findService = detailService.filter(function (el) {
        return el.serviceId === parseInt(id);
    });
    return (
        <div>
            {findService.map(showServices => <ShowServices
                key={showServices.serviceId}
                showServices={showServices}
            ></ShowServices>)}
        </div>
    );
};

export default ServiceDetails;
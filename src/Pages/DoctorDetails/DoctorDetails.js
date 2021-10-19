import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ShowDoctors from '../ShowDoctors/ShowDoctors';

const DoctorDetails = () => {
    const [detailDoctor, setDetailsDoctor] = useState([]);
    useEffect(() => {
        const url = '/dbDoctors.json'
        fetch(url)
            .then(res => res.json())
            .then(data => setDetailsDoctor(data))
    }, []);

    const { id } = useParams();
    const findDoctor = detailDoctor.filter(function (el) {
        return el.docId === parseInt(id);
    });
    return (
        <div>
            {findDoctor.map(showDoctors => <ShowDoctors
                key={showDoctors.serviceId}
                showDoctors={showDoctors}
            ></ShowDoctors>)}
        </div>
    );
};

export default DoctorDetails;
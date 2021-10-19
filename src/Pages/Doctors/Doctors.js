import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        const url = "/dbDoctors.json"
        fetch(url)
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className="container my-3">
            <h2 className="bg-warning text-center p-2 mb-3">Meet our Medical Specialists</h2>
            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.docId}
                        doctor={doctor}
                    ></Doctor>)
                }
            </Row>
        </div>
    );
};

export default Doctors;
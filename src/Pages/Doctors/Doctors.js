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
            <h2 className=" rounded bg-primary text-light text-center text-uppercase p-3 mb-3">Meet Our Doctors</h2>
            <Row xs={1} md={2} lg={3} className="g-4 container">
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
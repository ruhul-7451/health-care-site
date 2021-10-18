import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Footer = () => {
    const handleNewsLetter = (e) => {
        e.preventDefault()
    }
    return (
        <div className="bg-dark row text-light m-0">
            <div className="col-lg-6 p-5">
                <h5>About HomeClinic</h5>
                <small className="text-secondary">
                    HomeClinic is an online based treatment system where it services people by virtual meeting with the doctor. It's a 24/7 service system and we have dedicated experienced doctors so that a patient get the best treatment over online. We also have physical meeting schedule where the patient can visit a doctor taking a schedule.
                </small> <br /> <hr />
                <small className="text-secondary">
                    HomeClinic still advise to visit doctors physically but as pre-cautions a patient with beginning level health issue can make this more efficient by sitting at home and get advice by a professional doctor rather self medication.
                </small>
            </div>

            <div className="col-lg-6 p-5">
                <h5 >News Letter Sign Up</h5>
                <small className="text-muted text-wrap">Stay updated with latest news from us.</small>
                <Form onSubmit={handleNewsLetter} className="w-50 mx-auto mt-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Button className="w-100" variant="secondary" type="submit">
                        Subscribe
                    </Button>
                </Form>
            </div>
            <hr className="mt-3" />
            <p> &copy; Copyright 2021. All Rights Reserved by Md. Ruhul Amin Khan</p>
        </div>
    );
};

export default Footer;
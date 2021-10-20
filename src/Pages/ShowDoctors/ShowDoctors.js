import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowDoctors = ({ showDoctors }) => {
    const { docName, docImage, expertize, education, workdays, preHospital_i, preHospital_ii, preHospital_iii, pre_i, pre_ii, pre_iii, hos_detail_i, hos_detail_ii, hos_detail_iii } = showDoctors;
    return (
        <div>
            <div className="row container mx-auto m-5 shadow p-3">
                <div className="col-lg-4 bg-white text-center p-3">
                    <Card.Img variant="top" src={docImage} />
                    <Card.Body>
                        <Card.Title>{docName}</Card.Title>
                    </Card.Body>
                    <hr />
                    <div className="row d-flex justify-content-center">
                        <div className="col-4"><p className="fw-bold fs-6 text-uppercase">Speciality:</p></div>
                        <div className="col"><p>{expertize}</p></div>
                    </div>
                    <hr />
                    <div className="row d-flex justify-content-center">
                        <div className="col-4"><p className="fw-bold fs-6 text-uppercase">Education:</p></div>
                        <div className="col"><p>{education}</p></div>
                    </div>
                    <hr />
                    <div className="row d-flex justify-content-center">
                        <div className="col-4"><p className="fw-bold fs-6 text-uppercase">Work Days:</p></div>
                        <div className="col"><p>{workdays}</p></div>
                    </div>
                    <hr />
                    <Card.Link as={Link} to="/doctors" className="btn btn-primary w-100">Go Back</Card.Link>
                </div>
                <div className="col-lg-8 bg-light px-3">
                    <div>
                        <h1>{docName}</h1> <hr />
                        <h3>{preHospital_i}</h3> <br />
                        <h6>{pre_i}</h6>
                        <p>{hos_detail_i}</p>
                    </div>
                    <div><br />
                        <h3>{preHospital_ii}</h3> <br />
                        <h6>{pre_ii}</h6>
                        <p>{hos_detail_ii}</p>
                    </div>
                    <div><br />
                        <h3>{preHospital_iii}</h3> <br />
                        <h6>{pre_iii}</h6>
                        <p>{hos_detail_iii}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowDoctors;
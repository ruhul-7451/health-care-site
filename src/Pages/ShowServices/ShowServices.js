import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ShowServices = ({ showServices }) => {
    const { serviceImg, serviceTitle, serviceDescription, importance, getTheCare } = showServices;
    const history = useHistory();
    const handleGoBack = () => {
        history.push('/services');
    }
    return (
        <div className="container m-3 mx-auto">
            <div className="col-lg-10 mx-auto shadow p-3">
                <div>
                    <img className="img-fluid" src={serviceImg} alt="" />
                </div>
                <div>
                    <h2 className="bg-info p-3 text-white">{serviceTitle}</h2>
                    <p>{serviceDescription}</p>
                    <br />
                    <h2 className="text-danger">Important Things to Know</h2>
                    <p>{importance}</p>
                    <br />
                    <h2 className="text-danger">Get the Care You Deserve</h2>
                    <p>{getTheCare}</p> <br />
                </div>
                <div className="mb-5">
                    <Button onClick={handleGoBack} variant="warning">Go Back</Button>
                </div>
            </div>
        </div>
    );
};

export default ShowServices;
import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';

const goHomeLogo = <FontAwesomeIcon icon={faHome} />
const ConfirmAppointment = () => {
    const history = useHistory();
    const handleReturnHome = () => {
        history.push('/home');
    }
    return (
        <div className="row m-5">
            <div className="col-lg-8 col-sm-12 bg-success p-5 text-center mx-auto rounded text-white shadow">
                <h1>We have confirmed your appointment.</h1>
                <h6 className="text-white" >The appointment will follow the same schedule as you have mentioned.</h6>
            </div>

            <div className="text-center m-5">
                <Button onClick={handleReturnHome} variant="danger">Go Home {goHomeLogo}</Button>
            </div>
        </div>
    );
};

export default ConfirmAppointment;
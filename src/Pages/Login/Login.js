import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
const googleLogo = <FontAwesomeIcon icon={faGoogle} />

const Login = () => {
    const [check, setCheck] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || "/home"

    const { signInWithGoogle, registerUser, loginUser } = useAuth();

    const handleChange = e => {
        e.target.checked ? setCheck(true) : setCheck(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleUserEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleUserPass = (e) => {
        setPassword(e.target.value);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                history.push(redirectUrl);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const handleEmailPassRegister = () => {
        registerUser(email, password);
    }

    const handleEmailPassLogin = () => {
        loginUser(email, password);
    }

    return (
        <div className="">
            <div className="col-lg-3 col-md-6 m-5 shadow p-3 rounded mx-auto">
                <h3 className="pb-3 text-center">Please {check ? "Register" : "Login"}</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="my-3">
                        <Form.Control onBlur={handleUserEmail} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control onBlur={handleUserPass} type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="my-3">
                        <Form.Check onChange={handleChange} type="checkbox" label="Don't Have an Account" />
                    </Form.Group>
                    <Form.Group className="text-center my-3">
                        {
                            check ? <Button className="w-75 mb-3" variant="primary" onClick={handleEmailPassRegister}>Register</Button> : <Button className="w-75 mb-3" variant="primary" onClick={handleEmailPassLogin}>Login</Button>
                        }

                        <Button onClick={handleGoogleSignIn} className="w-75" variant="primary" type="submit">
                            {googleLogo} Google Sign In
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        </div >
    );
};

export default Login;
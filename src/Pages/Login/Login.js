import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
const googleLogo = <FontAwesomeIcon icon={faGoogle} />
const errorLogo = <FontAwesomeIcon icon={faExclamationTriangle} />

const Login = () => {
    const [check, setCheck] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || "/home"

    const { signInWithGoogle, registerUser, loginUser, error, setError, getUserName, setIsLoading } = useAuth();

    const handleChange = e => { //Checkbox status to perform change.
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
                setError('')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            }).finally(() => setIsLoading(false));
    }
    const handleUserSignIn = () => { //Toggle action action 
        check ? registerUser(email, password)?.then(() => { history.push(redirectUrl) }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            setError(errorMessage);
        }) : loginUser(email, password)?.then(() => { history.push(redirectUrl) }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            setError(errorMessage);
        });

    }
    const handleUserName = (e) => { //On register displayName set up.
        const name = (e.target.value)
        getUserName(name)
    }

    return (
        <div className="py-5">
            <div className="col-lg-3 col-md-6 m-5 shadow p-3 rounded mx-auto" style={{ backgroundColor: "#EAECEE" }}>
                <h3 className="pb-3 text-center">Please {check ? "Register" : "Login"}</h3>
                <Form onSubmit={handleSubmit}>
                    {
                        check && <Form.Group onBlur={handleUserName} className="my-3">
                            <Form.Control type="text" placeholder="Your Name" />
                        </Form.Group>
                    }
                    <Form.Group className="my-3">
                        <Form.Control onBlur={handleUserEmail} type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control onBlur={handleUserPass} type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="my-3">
                        <Form.Check onChange={handleChange} type="checkbox" label="Don't have an account?" />
                    </Form.Group>
                    {error && <Form.Text className="text-danger">{errorLogo} {error}</Form.Text>}
                    <Form.Group className="text-center my-3">
                        <Button className="w-75 mb-3" variant="primary" onClick={handleUserSignIn}>{check ? "Register" : "Login"}</Button>

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
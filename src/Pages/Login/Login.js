import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import useAuth from '../../Hooks/useAuth';
const googleLogo = <FontAwesomeIcon icon={faGoogle} />

const Login = () => {
    const [check, setCheck] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
    const createUserLogin = (uEmail, uPass) => {
        registerUser(uEmail, uPass);
    }

    const letUserLogin = (uEmail, uPass) => {
        loginUser(uEmail, uPass);
    }

    const { signInWithGoogle, registerUser, loginUser } = useAuth();

    return (
        <div>
            <div className="w-25 m-5 shadow p-3 rounded mx-auto">
                <h3 className="pb-3 text-center">Please {check ? "Register" : "Login"}</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Control onBlur={handleUserEmail} type="email" placeholder="Enter email" />
                        {/* <Form.Text className="text-muted">
                            Please! Enter a Valid Email
                        </Form.Text> */}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control onBlur={handleUserPass} type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check onChange={handleChange} type="checkbox" label="Don't Have an Account" />
                    </Form.Group>

                    <Form.Group className="text-center">
                        {
                            check ? <Button className="w-75 mb-3" variant="primary" onClick={() => createUserLogin(email, password)}>Register</Button> : <Button className="w-75 mb-3" variant="primary" onClick={() => letUserLogin(email, password)}>Login</Button>
                        }
                        <Button onClick={signInWithGoogle} className="w-75" variant="primary" type="submit">
                            {googleLogo} Google Sign In
                        </Button>
                    </Form.Group>
                </Form>
            </div>

        </div >
    );
};

export default Login;
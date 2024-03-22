import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import "./Register.css"; // Import CSS file for styling
import { useNavigate, Link } from "react-router-dom";
import backgroundImage from './clothes12.jpg';

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    function sendData(e) {
        e.preventDefault();
        
        const newUser = {
            name,
            email,
            contactNumber,
            password,
        };

        axios.post("http://localhost:5200/user/add", newUser)
            .then(() => {
                alert("User Details were recorded.");
                navigate("/home");
            })
            .catch((err) => {
                alert(err);
            });
    }

    return (
        <div 
            className="d-flex flex-column min-vh-100" 
            style={{
                backgroundImage: `url(${backgroundImage})`, // Set the background image
                backgroundSize: 'fit',
                backgroundPosition: 'center',
            }}
        >
            <div className="register-container-right"> {/* Updated class name */}
                <Container>
                    <div className="register-box">
                        <h2>Register</h2>
                        <Form onSubmit={sendData}>

                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Name"
                                    name="name"
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter Email"
                                    name="email"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                            </Form.Group>

                            <Form.Group controlId="contactNumber">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Contact Number"
                                    name="contactNumber"
                                    onChange={(e) => {
                                        setContactNumber(e.target.value);
                                    }}
                                />
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter Password"
                                    name="password"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                            <div className="signup-link">
                                <p>Already have an account? <Link to="/">Log In</Link></p>
                            </div>
                        </Form>
                    </div>
                </Container>
            </div>
        </div>
    );
}

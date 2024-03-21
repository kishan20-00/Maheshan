import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from "react-bootstrap/ListGroup";
import axios from 'axios';

function ViewClothes() {
    const [values, setValues] = useState([]);

    const [UserName, setUserName] = useState("");
    const [ClothName, setCloth] = useState("");
    const [ClothImage, setClothImage] = useState("");
    const [WearType, setWearType] = useState("");
    const [Casualty, setCasualty] = useState("");

    const [clothes, setClothes] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        function getClothes() {
            axios.get("http://localhost:5200/cloth/").then((res) => {
                setClothes(res.data);
            }).catch((err) => {
                alert(err.message);
            });
        }
        getClothes();
    }, []);

    const deleteClothes = (id) => {
        axios.delete(`http://localhost:5200/cloth/delete/${id}`);
        alert("Cloth Details deleted.");
    };

    const updateClothDetails = (val) => {
        setValues(val);
        handleShow();
    };

    function sendData(e) {
        e.preventDefault();

        const updatedValues = {
            id: values._id,
            UserName: UserName || values.UserName,
            ClothName: ClothName || values.ClothName,
            ClothImage: ClothImage || values.ClothImage,
            WearType: WearType || values.WearType,
            Casualty: Casualty || values.Casualty
        };

        axios.put(`http://localhost:5200/cloth/update/${updatedValues.id}`, updatedValues)
            .then(() => {
                alert("Cloth Details Updated");
                handleClose();
            }).catch((err) => {
                console.log(err);
                alert(err);
            });
    }

    return (
        <div>
            <h1>All Cloth Details</h1>
            {clothes.map((val, key) => (
                <div key={key} className="clothes">
                    <ListGroup key={key} horizontal className="my-2">
                        <ListGroup.Item>{val._id}</ListGroup.Item>
                        <ListGroup.Item>{val.UserName}</ListGroup.Item>
                        <ListGroup.Item>{val.ClothName}</ListGroup.Item>
                        <ListGroup.Item>{val.ClothImage}</ListGroup.Item>
                        <ListGroup.Item>{val.WearType}</ListGroup.Item>
                        <ListGroup.Item>{val.Casualty}</ListGroup.Item>
                    </ListGroup>

                    <Button variant="primary" onClick={() => updateClothDetails(val)} className="uppay">Update</Button>
                    <Button className="delpay" onClick={() => deleteClothes(val._id)}>Delete</Button>

                    <Modal show={show} onHide={handleClose} className="getfunc">
                        <Modal.Header closeButton>
                            <Modal.Title>Update Details</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form onSubmit={sendData}>
                                <Form.Group controlId="name">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="text" defaultValue={values.name} onChange={(e) => setUserName(e.target.value)} required />
                                </Form.Group>

                                <Form.Group controlId="email">
                                    <Form.Label>Cloth Name</Form.Label>
                                    <Form.Control type="text" defaultValue={values.email} onChange={(e) => setCloth(e.target.value)} required />
                                </Form.Group>

                                <Form.Group controlId="contactNumber">
                                    <Form.Label>Cloth Image</Form.Label>
                                    <Form.Control type="text" defaultValue={values.contactNumber} onChange={(e) => setClothImage(e.target.value)} required />
                                </Form.Group>

                                <Form.Group controlId="password">
                                    <Form.Label>Wear Type</Form.Label>
                                    <Form.Control type="text" defaultValue={values.password} onChange={(e) => setWearType(e.target.value)} required />
                                </Form.Group>

                                <Form.Group controlId="password">
                                    <Form.Label>Casualty</Form.Label>
                                    <Form.Control type="text" defaultValue={values.password} onChange={(e) => setCasualty(e.target.value)} required />
                                </Form.Group>

                                <Button className="finalpay" type="submit">Edit details</Button>
                            </Form>
                        </Modal.Body>
                    </Modal>
                    <br />
                </div>
            ))}
        </div>
    );
};

export default ViewClothes;

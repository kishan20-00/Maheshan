import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default function AddCloth(){
    const [ClothID, setClothID] = useState("");
    const [UserName, setUserName] = useState("");
    const [ClothName, setClothName] = useState("");
    const [ClothImage, setClothImage] = useState("");
    const [WearType, setWearType] = useState("");
    const [Casualty, setCasualty] = useState("");

    function sendData(e) {
        e.preventDefault();
        
        const newCloth = {
            ClothID,
            UserName,
            ClothName,
            ClothImage,
            WearType,
            Casualty
        }
  
        
        axios.post("http://localhost:5200/cloth/add", newCloth).then(()=>{
          alert("Loyalty Details were recorded.");
        }).catch((err)=>{
            alert(err)
        })
  
      }


  return (
    <Form onSubmit={sendData}>
      <Form.Group controlId="userID">
        <Form.Label>Cloth ID</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter User ID"
          name="userID"
          onChange={(e)=>{
            setClothID(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group controlId="name">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          name="username"
          onChange={(e)=>{
            setUserName(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group controlId="price">
        <Form.Label>Cloth Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Price"
          name="price"
          onChange={(e)=>{
            setClothName(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group controlId="image">
        <Form.Label>Cloth Image</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Contact Number"
          name="image"
          onChange={(e)=>{
            setClothImage(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group controlId="Wear">
        <Form.Label>Wear Type</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Password"
          name="wear"
          onChange={(e)=>{
            setWearType(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group controlId="casualty">
        <Form.Label>Casualty</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Password"
          name="casualty"
          onChange={(e)=>{
            setCasualty(e.target.value);
          }}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};

